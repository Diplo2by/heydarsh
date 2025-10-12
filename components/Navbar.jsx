import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoMdDocument } from "react-icons/io";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { useRouter } from "next/router";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      id="navbar"
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3] dark:bg-gray-900 dark:shadow-gray-700"
          : "fixed w-full h-20 z-[100] bg-[#ecf0f3] dark:bg-gray-900"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/assets/darshlogo.png"
            alt="/"
            width="80"
            height="60"
            className="2xl:p-0 pt-6 pl-3 dark:invert"
          />
        </Link>
        <div>
          <ul className="hidden md:flex items-center">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b text-gray-700 dark:text-gray-300 hover:text-[#5651e9] dark:hover:text-[#7c78ff] transition-colors duration-300">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b text-gray-700 dark:text-gray-300 hover:text-[#5651e9] dark:hover:text-[#7c78ff] transition-colors duration-300">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b text-gray-700 dark:text-gray-300 hover:text-[#5651e9] dark:hover:text-[#7c78ff] transition-colors duration-300">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b text-gray-700 dark:text-gray-300 hover:text-[#5651e9] dark:hover:text-[#7c78ff] transition-colors duration-300">
                Projects
              </li>
            </Link>
            <Link href="/ramblings">
              <li className="ml-10 text-sm uppercase hover:border-b text-gray-700 dark:text-gray-300 hover:text-[#5651e9] dark:hover:text-[#7c78ff] transition-colors duration-300">
                Ramblings
              </li>
            </Link>
            <li className="ml-10">
              <ThemeSwitcher />
            </li>
          </ul>
          <div
            onClick={handleNav}
            className="absolute right-5 md:hidden text-gray-700 dark:text-gray-300"
          >
            <AiOutlineMenu size={20} />
          </div>
        </div>

        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 dark:bg-black/80"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-gray-800 p-10 ease-in duration-500"
                : "fixed left-[-100%] p-10 ease-in duration-300"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Image
                  src="/assets/darshlogo.png"
                  alt="/"
                  width="100"
                  height="100"
                  className="dark:invert"
                />
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 bg-white dark:bg-gray-700 p-3 cursor-pointer text-gray-700 dark:text-gray-300 hover:scale-105 transition-transform duration-300"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 dark:border-gray-600 my-4">
                <p className="w-[85%] md:w-[90%] py-4 font-semibold text-gray-700 dark:text-gray-300">
                  To Infinity And Beyond!
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-gray-700 dark:text-gray-300 hover:text-[#5651e9] dark:hover:text-[#7c78ff] transition-colors duration-300"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-gray-700 dark:text-gray-300 hover:text-[#5651e9] dark:hover:text-[#7c78ff] transition-colors duration-300"
                  >
                    About
                  </li>
                </Link>
                <Link href="#skills">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-gray-700 dark:text-gray-300 hover:text-[#5651e9] dark:hover:text-[#7c78ff] transition-colors duration-300"
                  >
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-gray-700 dark:text-gray-300 hover:text-[#5651e9] dark:hover:text-[#7c78ff] transition-colors duration-300"
                  >
                    Projects
                  </li>
                </Link>
                <Link href="/ramblings">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-gray-700 dark:text-gray-300 hover:text-[#5651e9] dark:hover:text-[#7c78ff] transition-colors duration-300"
                  >
                    Ramblings
                  </li>
                </Link>
                <li>
                  <div className="border-t border-gray-300 dark:border-gray-600 mt-4 pt-4">
                    <ThemeSwitcher />
                  </div>
                </li>
              </ul>
              <div className="pt-32">
                <p className="uppercase tracking-widest text-[#5651ef] dark:text-[#7c78ff]">
                  Hit Me up!
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <a href="https://github.com/Diplo2by" target="_blank">
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 bg-white dark:bg-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-gray-700 dark:text-gray-300 hover:text-[#5651e9] dark:hover:text-[#7c78ff]">
                      <FaGithub />
                    </div>
                  </a>

                  <a href="mailto:contactdarshanv@gmail.com" target="_blank">
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 bg-white dark:bg-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-gray-700 dark:text-gray-300 hover:text-[#5651e9] dark:hover:text-[#7c78ff]">
                      <BiMailSend />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vdarshh/"
                    target="_blank"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 bg-white dark:bg-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-gray-700 dark:text-gray-300 hover:text-[#5651e9] dark:hover:text-[#7c78ff]">
                      <FaLinkedin />
                    </div>
                  </a>
                  <a href="/assets/resume/resume.pdf" target="_blank">
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 bg-white dark:bg-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-gray-700 dark:text-gray-300 hover:text-[#5651e9] dark:hover:text-[#7c78ff]">
                      <IoMdDocument />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
