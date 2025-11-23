import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export default function PostPage({ frontmatter, content, readingTime }) {
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
        <h1 className="text-3xl font-bold py-4">{frontmatter.title}</h1>
        <p className="text-gray-600 dark:text-gray-300">{frontmatter.date}</p>
        <p>{readingTime} min read</p>
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
      frontmatter,
      content: contentHtml,
      readingTime,
    },
  };
}

function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}