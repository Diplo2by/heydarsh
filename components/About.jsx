import React from "react";
import darsh_pic from "../public/assets/darsh3.jpeg";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div id ='about' className="w-full md:h-screen px-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e9]">
            BIO
          </p>
          <p className="uppercase text-2xl py-4">But Who is Darsh exactly?</p>
          <p className="py-2 text-gray-600 dark:text-gray-300 text-justify">
            Hello, I'm Darshan or Darsh or Vdarsh or Diplo depending on who you
            ask. I'm a B.Tech undergrad from REVA University,
            Bengaluru. As a CompSci major, I enjoy working in the
            fields of Data Science, AI/ML, and blockchain technologies. I am
            also up for tech fests, hackathons and code jams. I for one am a
            staunch supporter and proponent of FOSS tech and will try to include
            as many open-source resources in my projects as I can.
          </p>
          <p className="py-3 text-gray-600 dark:text-gray-300 text-justify">
            My other interests include quizzing and debating, have a degree of
            experience in both of them. I also love to write, heck I even wrote
            content for a budding esports and gaming site. Moreover, I also
            curate content for a bunch of college clubs. Have an article or two
            published in the school magazine, so yeah I think we agree that I
            can do a bit of writing.
          </p>
          <p className="py-3 text-gray-600 dark:text-gray-300 text-justify">
            I am also a huge fan of performing in general, be it podcasts, Radio
            shows Dumb Charades, be it extempore or or even Mad Ads, I'll whip
            up something on time and make it look more than presentable. My past
            wild rides made me love filmmaking and editing but wouldn't really
            call it one of my strong suits. I do have a history/Architectural
            documentary I made in 11th grade, three hours before the deadline
            while overdosing on Caffeine to show for it. To sum it all up, most
            of my effort goes into coming up with puns and alliterations. Not to
            mention broken humour and dank wit.
          </p>
          <Link href='/#projects'>
          <p className="py-3 text-gray-600 dark:text-gray-300 underline cursor-pointer">
            Feel free to check out my past endeavours
          </p>
          </Link>
          
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={darsh_pic} alt="Darshan's Picture"/>
        </div>
      </div>
    </div>
  );
};

export default About;
