import Head from "next/head";
import Ramblings from "../../components/Ramblings";
import { getAllPosts, getAllUniqueTags } from "../../lib/ramblings";

export default function RamblingsPage({ posts, allTags }) {
  return (
    <div className="px-4 md:px-0">
      <Head>
        <title>Ramblings | My Thoughts and Musings</title>
      </Head>
      <Ramblings posts={posts} allTags={allTags} />
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts().map((post) => ({
    slug: post.slug,
    frontmatter: post.frontmatter,
  }));
  const allTags = getAllUniqueTags();

  return {
    props: {
      posts,
      allTags,
    },
  };
}
