import React from "react";
import Link from "next/link";

const Ramblings = ({ posts }) => {
  return (
    <div
      id="ramblings"
      className="w-full md:h-screen px-2 flex items-center md:py-16 py-24"
    >
      <div className="max-w-[1240px] m-auto w-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e9]">
          Ramblings
        </p>
        <p className="uppercase text-2xl py-4">My Thoughts and Musings</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/ramblings/${post.slug}`}
              className="group"
            >
              <div className="relative p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#5651e9] to-blue-800 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"/>
                
                <div className="relative z-10 pl-2">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#5651e9] transition-colors duration-300">
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

                  <div className="flex items-center text-[#5651e9] font-medium text-sm">
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

                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#5651e9]/5 to-purple-600/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ramblings;
