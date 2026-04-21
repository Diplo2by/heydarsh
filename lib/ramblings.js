import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function normalizeTags(tags) {
  if (!Array.isArray(tags)) return [];
  return tags.map((tag) => String(tag).trim()).filter(Boolean);
}

function calculateReadingTime(content) {
  const wordsPerMinute = 150;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

function stripMarkdown(content) {
  return content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_~\-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractExcerpt(content, wordLimit = 36) {
  const plainText = stripMarkdown(content);
  const words = plainText.split(" ").filter(Boolean);
  if (words.length <= wordLimit) return plainText;
  return `${words.slice(0, wordLimit).join(" ")}...`;
}

function parsePostFile(filename) {
  const slug = filename.replace(/\.md$/, "");
  const markdownWithMeta = fs.readFileSync(
    path.join(postsDirectory, filename),
    "utf-8"
  );
  const { data, content } = matter(markdownWithMeta);
  const tags = normalizeTags(data.tags);

  return {
    slug,
    frontmatter: {
      ...data,
      tags,
      excerpt: data.excerpt || extractExcerpt(content),
    },
    content,
    readingTime: calculateReadingTime(content),
  };
}

export function getAllPosts() {
  const files = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.toLowerCase().endsWith(".md"));

  return files
    .map(parsePostFile)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getPostBySlug(slug) {
  const filename = `${slug}.md`;
  return parsePostFile(filename);
}

export function getRelatedPosts(currentSlug, tags = [], limit = 3) {
  const normalizedCurrentTags = normalizeTags(tags);
  const tagSet = new Set(normalizedCurrentTags.map((tag) => tag.toLowerCase()));

  const scoredPosts = getAllPosts()
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const relatedTags = normalizeTags(post.frontmatter.tags);
      const sharedTagCount = relatedTags.reduce((count, tag) => {
        if (tagSet.has(tag.toLowerCase())) {
          return count + 1;
        }
        return count;
      }, 0);

      const recency = new Date(post.frontmatter.date).getTime();

      return {
        ...post,
        score: sharedTagCount,
        recency,
      };
    })
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return b.recency - a.recency;
    });

  const strongMatches = scoredPosts.filter((post) => post.score > 0);
  const fallback = scoredPosts.filter((post) => post.score === 0);

  return [...strongMatches, ...fallback].slice(0, limit);
}

export function getAllUniqueTags() {
  const tagSet = new Set();

  getAllPosts().forEach((post) => {
    normalizeTags(post.frontmatter.tags).forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
}

export function xmlEscape(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
