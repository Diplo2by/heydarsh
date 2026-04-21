import { getAllPosts, xmlEscape } from "../lib/ramblings";

const siteUrl = "https://www.heydarsh.in";

function generateRss(posts) {
  const items = posts
    .map((post) => {
      const postUrl = `${siteUrl}/ramblings/${post.slug}`;
      const categories = (post.frontmatter.tags || [])
        .map((tag) => `<category>${xmlEscape(tag)}</category>`)
        .join("");

      return `<item>
  <title>${xmlEscape(post.frontmatter.title || post.slug)}</title>
  <link>${postUrl}</link>
  <guid>${postUrl}</guid>
  <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
  <description>${xmlEscape(post.frontmatter.excerpt || "")}</description>
  ${categories}
</item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>HeyDarsh Ramblings</title>
  <link>${siteUrl}/ramblings</link>
  <description>My thoughts and musings on tech, life, and everything in between.</description>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  ${items}
</channel>
</rss>`;
}

export async function getServerSideProps({ res }) {
  const posts = getAllPosts();
  const rss = generateRss(posts);

  res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
  res.write(rss);
  res.end();

  return {
    props: {},
  };
}

export default function Rss() {
  return null;
}
