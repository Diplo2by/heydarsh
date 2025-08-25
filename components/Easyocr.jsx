import Image from "next/image";
import React from "react";
import easy2Img from "../public/assets/projects/easy.png";
import { RiRadioButtonFill, RiGithubFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";


const Easyocr = () => {
  return (
    <div>
      <Head>
        <title>
          Projects - Chinese Character Recognition
        </title>
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src={easy2Img}
          alt="/"
          className="absolute z-1"
          //   layout="fill"
          //   objectFit="cover"
          fill="true" //prevent it from being cropped
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="py-2">Chinese Character Recognition</h2>
          <h3>Python / Easy OCR / Machine Learning </h3>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          {" "}
          {/*change Col span when adding contributors*/}
          <div className="p-2">
            <p className="text-center text-xl font-bold pb-2">Contributors</p>
            <div className="grid grid-cols-1 md:grid-cols-1">
              <div className="text-xl py-2 flex items-center">
                <RiGithubFill className="pr-1" />{" "}
                <Link href="https://github.com/adnandelta" target="_blank">
                  adnandelta
                </Link>
              </div>
              <div className=" text-xl py-2 flex items-center">
                <RiGithubFill className="pr-1" />{" "}
                <Link href="https://github.com/harshmehta14" target="_blank">
                  harshmehta14
                </Link>
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
            Chinese being one of the most spoken languages around the globe has
            over 1 billion native speakers, further, the Sino-Tibetan language
            family has evolved into various regional dialects spoken today. With
            well over 3000 characters in everyday use, the language poses an
            immense challenge to digitize it. Although various OCR tools are
            available in the market currently, they are unreliable and
            inconsistent The Chinese language structure being different than
            those of the Latin-derived languages makes it challenging to apply
            the same principles to build OCR around it. This sample size mainly
            consisted of handwritten brush strokes of Chinese characters We ran
            our algorithm mainly MNIST data set of digits and CASIA data set of
            over 7000 characters and each character having a sample size of 50+.
            Although we had to randomize and pick a subset of the CASIA data set
            due to time and Compute constraints. So far, our algorithm's OCR
            accuracy is at an acceptable rate only for digitally generated
            images, but these images are only available in the environment to
            such an extent. General real-life images have decent accuracy as of
            now but to push it to a further acceptable level of accuracy a
            higher level of data cleaning and pre-processing is required, and we
            have got it to work on only JPEG image format so far.
          </p>
          <a href="https://github.com/Diplo2by/Easy_CT" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tech Stack</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <div className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Easy OCR
              </div>
              <div className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </div>
              <div className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Matplotlib
              </div>
              <div className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> openCV{" "}
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

export default Easyocr;
