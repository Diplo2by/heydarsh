import React, { useMemo, useState } from "react";
import Link from "next/link";

const Ramblings = ({ posts, allTags }) => {
  const [activeTag, setActiveTag] = useState("All");

  const filteredPosts = useMemo(() => {
    if (activeTag === "All") {
      return posts;
    }

    return posts.filter((post) =>
      (post.frontmatter.tags || []).includes(activeTag)
    );
  }, [activeTag, posts]);

  return (
    <div
      id="ramblings"
      className="w-full md:h-screen px-2 flex items-center md:py-16 py-24"
    >
      <div className="max-w-[1240px] m-auto w-full">
        <p className="uppercase text-xl tracking-widest text-brand">
          Ramblings
        </p>
        <div className="flex items-center justify-between gap-4 py-4 flex-wrap">
          <p className="uppercase text-2xl">My Thoughts and Musings</p>
          <Link
            href="/rss.xml"
            className="text-sm font-semibold text-brand hover:underline"
          >
            Subscribe to RSS
          </Link>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {["All", ...allTags].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 rounded-full text-xs uppercase tracking-wide transition-colors ${
                activeTag === tag
                  ? "bg-brand text-white shadow-none normal-case"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-none normal-case"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/ramblings/${post.slug}`}
              className="group"
            >
              <div className="relative p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand to-blue-800 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"/>
                
                <div className="relative z-10 pl-2">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-brand transition-colors duration-300">
                    {post.frontmatter.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {post.frontmatter.date}
                  </p>

                  {post.frontmatter.excerpt && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                      {post.frontmatter.excerpt}
                    </p>
                  )}
                  {post.frontmatter.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.frontmatter.tags.map((tag) => (
                        <span
                          key={`${post.slug}-${tag}`}
                          className="text-xs px-2 py-1 rounded-full bg-brand/10 text-brand"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center text-brand font-medium text-sm">
                    <span className="group-hover:mr-2 transition-all duration-300">
                      Read more
                    </span>
                    <svg
                      className="w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-brand/5 to-purple-600/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </Link>
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <p className="text-gray-600 dark:text-gray-300 mt-6">
            No posts found for this tag yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Ramblings;
