import Head from "next/head";
import Ramblings from "../../components/Ramblings";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function RamblingsPage({ posts }) {
  return (
    <div className="px-4 md:px-0">
      <Head>
        <title>Ramblings | My Thoughts and Musings</title>
      </Head>
      <Ramblings posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)),
    },
  };
}
