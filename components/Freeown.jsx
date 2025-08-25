import Image from "next/image";
import React from "react";
import freeownImg from "../public/assets/projects/freeown.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const Freeown = () => {
  return (
    <div>
      <Head>
        <title>Projects - FreeOwn</title>
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src={freeownImg}
          alt="/"
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="py-2">FreeOwn</h2>
          <h3>Solidity / Next Js / Hardhat </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 lg:mx-0 mx-5">
          <p className="uppercase text-xl tracking-widest text-[#5651e9]">
            PROJECT
          </p>
          <h2>Overview</h2>
          <br />
          <p>
            In the current generation 'Digital goods' are getting more
            recognition and value because of the vast improvement in technology
            and of so many people being connected to the Internet. People can do
            a lot number of transactions on the internet because of its security
            and privacy provided by using Crypto currencies these days. One of
            the popular spots used by crypto currency users is on NFT's. This
            NFT market website hosts NFT's of top demands on sale. The users can
            choose the NFT they are interested in and purchase it anytime with
            the respective crypto currencies they prefer for the transaction
            like Bitcoin, Dogecoin, Ethereum etc The NFT market keeps refreshing
            frequently to provide the users with Latest trending NFT's that are
            available. The purchasing of NFT is made simpler with our 'payment
            page' ensuring smooth and fast transaction
          </p>
          <a href="https://github.com/Diplo2by/freeown" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tech Stack</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <div className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Solidity
              </div>
              <div className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Flutter
              </div>
              <div className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> WEB3dart
              </div>
              <div className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Metamask{" "}
              </div>
              <div className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Infura{" "}
              </div>
              <div className=" py-2 flex items-center">
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

export default Freeown;
