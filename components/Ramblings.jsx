import React from "react";
import Link from "next/link";

const Ramblings = ({ posts }) => {
  return (
    <div id="ramblings" className="w-full md:h-screen px-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto">
        <p className="uppercase text-xl tracking-widest text-[#5651e9]">
          Ramblings
        </p>
        <p className="uppercase text-2xl py-4">My Thoughts and Musings</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <Link href={`/ramblings/${post.slug}`}>
                <div>
                  <h3 className="text-lg font-bold">{post.frontmatter.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{post.frontmatter.date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ramblings;
