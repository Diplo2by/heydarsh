import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";
const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-wide text-gray-600 dark:text-gray-300">
            LET'S connect & collaborate
          </p>
          <h1 className="py-4 text-gray-700 dark:text-gray-200">
            Hey! I'm <span className="text-[#5651e9]"> DARSH</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-gray-200">I Build Tech & Communities</h1>
          <p className="py-4 text-gray-600 dark:text-gray-300 max-w-[85%] m-auto text-justify md:text-center">
            I am your friendly neighborhood tech bro. I happen to be quite
            innovative and can hack up solutions for challenges in tech or
            communication. Over the years, I have habituated myself with
            learning a new thing or two every single day. My strength lies in my
            interpersonal skills built hosting, organizing and attending several
            events. If you came across this site there's a good chance it was
            through those events.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://github.com/Diplo2by" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:contactdarshanv@gmail.com" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                <BiMailSend />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/vdarshh/" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                <FaLinkedin />
              </div>
            </a>
            <a
              href="/assets/resume/resume.pdf"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                <IoMdDocument />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
