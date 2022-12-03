import React from "react";
import darsh_pic from "../public/assets/Darshan.jpg";
import Image from "next/image";
const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e9]">
            {" "}
            BIO
          </p>
          <p className="uppercase text-2xl py-4">But Who is Darsh exactly?</p>
          <p className="py-2 text-gray-600">
            Hello, I'm Darshan or Darsh or Vdarsh or Diplo depending on who you
            ask. I'm a third-year undergrad student at REVA University,
            Bengaluru. As a Computer Science major, I enjoy working in the
            fields of Data Science, AI/ML, and blockchain technologies. I am
            also up for tech fests, hackathons and code jams. I for one am a
            staunch supporter and proponent of FOSS tech and will try to include
            as many open-source resources in my projects as I can.
          </p>
          <p className="py-3 text-gray-600">
            My other interests include quizzing and debating, have a degree of
            experience in both of them. I also love to write, heck I even wrote
            content for a budding esports and gaming site. Moreover, I also
            curate content for a bunch of college clubs. Have an article or two
            published in the school magazine, so yeah I think we agree that I
            can do a bit of writing.
          </p>
          <p className="py-3 text-gray-600">
            I am also a huge fan of performing in general, be it podcasts, Radio
            shows or even Dumb Charades, be it extempore or Mad Ads, I'll whip
            up something on time and make it look more than presentable. My past
            wild rides made me love filmmaking and editing but wouldn't really
            call it one of my strong suits. I do have a history/Architectural
            documentary I made in 11th grade, three hours before the deadline
            while overdosing on Caffeine to show for it. To sum it all up, most
            of my effort goes into coming up with puns and alliterations. Not to
            mention broken humour and dank wit.
          </p>
          <p className="py-3 text-gray-600 underline cursor-pointer">
            Feel free to check out my past endeavours
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={darsh_pic} alt="Darshan's Picture"/>
        </div>
      </div>
    </div>
  );
};

export default About;
