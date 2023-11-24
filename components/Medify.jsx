import Image from "next/image";
import React from "react";
import medifyImg from "../public/assets/projects/medify.png";
import { RiRadioButtonFill, RiGithubFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const Medify = () => {
  return (
    <div>
      <Head>
        <title>
          Projects - Medify
        </title>
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src={medifyImg}
          alt="/"
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="py-2">Medify App</h2>
          <h3>Solidity / Flutter / Blockchain </h3>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4"> {/*change Col span when adding contributors*/}
          <div className="p-2">
            <p className="text-center text-xl font-bold pb-2">Contributors</p>
            <div className="grid grid-cols-1 md:grid-cols-1">
              <div className="text-gray-600 text-xl py-2 flex items-center">
                <RiGithubFill className="pr-1" /> <Link href='https://github.com/adnandelta' target='_blank'>adnandelta</Link>
              </div>
              <div className="text-gray-600 text-xl py-2 flex items-center">
                <RiGithubFill className="pr-1" /> <Link href='https://github.com/harshmehta14' target='_blank'>harshmehta14</Link>
              </div>
              <div className="text-gray-600 text-xl py-2 flex items-center">
                <RiGithubFill className="pr-1" /> <Link href='https://github.com/noobcoder-10' target='_blank'>noobcoder-10</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:mx-0 mx-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e9]">
            PROJECT
          </p>
          <h2>Overview</h2>
          <br />
          <p>
            An app that stores a person's medical information on blockchain so
            that medical personnel can access it in an emergency and take
            appropriate action. In India, around 4,72,606 accidents occur each
            year, with 50 percent of lives saved if competent medical assistance
            is provided. This software accomplishes exactly that; in addition to
            providing medical history, it also informs the patient's relatives.
            Not only is this software essential for saving lives in an emergency
            situation, but it also provides the user with privacy and confidence
            when sharing his medical records because it is based on blockchain
            technology. When a person's medical history is shared with the
            medical team, the chances of administering the necessary
            prescription to save lives increase.
          </p>
          <a href="https://github.com/Diplo2by/Medify" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a href="https://www.youtube.com/watch?v=k5ESGH4OW4M" target="_blank">
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tech Stack</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <div className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Solidity
              </div>
              <div className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Flutter
              </div>
              <div className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> WEB3dart
              </div>
              <div className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Metamask{" "}
              </div>
              <div className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Infura{" "}
              </div>
              <div className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Pinata{" "}
              </div>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Medify;
