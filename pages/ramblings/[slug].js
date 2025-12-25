import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { useState } from "react";

export default function PostPage({ frontmatter, content, readingTime }) {
  const [copied, setCopied] = useState(false);
  const postUrl = `https://www.heydarsh.in/ramblings/${frontmatter.slug}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: frontmatter.title,
          text: frontmatter.excerpt || "Check out this blog post!",
          url: postUrl,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(postUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="px-4 md:px-0 py-16">
      <Head>
        <title>{`${frontmatter.title} | Ramblings`}</title>
        <meta property="og:url" content={`https://www.heydarsh.in/ramblings/${frontmatter.slug}`} />
        <meta name="description" content={frontmatter.excerpt || "A blog post from Ramblings."} key="desc" />
        <meta name="og:description" content={frontmatter.excerpt || "A blog post from Ramblings."} key="desc" />
        <meta property="og:title" content={`${frontmatter.title} | Ramblings`} />
        <meta property="og:image" content={frontmatter.banner || 'https://www.heydarsh.in/assets/p3updated.webp'} />
        <meta property="og:type" content="article" />
      </Head>
      <div className="max-w-[1240px] m-auto">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold py-4">{frontmatter.title}</h1>
            <div className="flex gap-3 text-gray-600 dark:text-gray-300">
              <p>{frontmatter.date}</p>
              <p>•</p>
              <p>{readingTime} min read</p>
            </div>
          </div>
          <button
            onClick={handleShare}
            className="mt-4 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center gap-2 shadow-sm hover:shadow-md"
            aria-label="Share this post"
          >
            {copied ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span className="text-sm font-medium">Share</span>
              </>
            )}
          </button>
        </div>

        {frontmatter.banner && (
          <div className="flex justify-center py-8">
            <img
              src={frontmatter.banner}
              alt={frontmatter.title}
              className="rounded-xl max-w-md w-full shadow-md"
            />
          </div>
        )}
        <div className="prose dark:prose-dark max-w-none py-8" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const readingTime = calculateReadingTime(content);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    props: {
      frontmatter: { ...frontmatter, slug },
      content: contentHtml,
      readingTime,
    },
  };
}

function calculateReadingTime(content) {
  const wordsPerMinute = 150;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}