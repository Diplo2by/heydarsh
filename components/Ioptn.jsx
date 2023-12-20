import Image from "next/image";
import React from "react";
import IoptnImg from "../public/assets/projects/ioptn.png";
import { RiRadioButtonFill, RiGithubFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const Easyocr = () => {
    return (
        <div>
            <Head>
                <title>
                    Ioptn Portal
                </title>
            </Head>
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image
                    src={IoptnImg}
                    alt="/"
                    className="absolute z-1"
                    style={{ objectFit: "contain" }}
                    fill="true" //prevent it from being cropped
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
                    <h2 className="py-2">IOPTN Portal</h2>
                    <h3>Next.Js / Hardhat </h3>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    {" "}
                    {/*change Col span when adding contributors*/}
                    <div className="p-2">
                        <p className="text-center text-xl font-bold pb-2">Contributors</p>
                        <div className="grid grid-cols-1 md:grid-cols-1">
                            <div className="text-gray-600 text-xl py-2 flex items-center">
                                <RiGithubFill className="pr-1" />{" "}
                                <Link href="https://github.com/Mr-DJ" target="_blank">
                                    Samuel Jonathan
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
                    The Indian Organ Procurement and Transplantation Network (IOPTN) is a unique public-private partnership that links all professionals involved 
                    in the Indian donation and transplantation system. It is a decentralized solution designed to facilitate a tamper-proof and robust organ transplantation procedure. 
                    In addition to this, IOPTN provides monitoring features such as organ bank and patient waiting list pages. T
                    he platform also displays the most recent transactions on the homepage.
                    The allocation procedure is accelerated by a matching algorithm that provides a prioritized list of leading contenders for the organ based on the best match criteria. 
                    We offer a "sign-in" functionality, and we have also implemented role-based authentication for admins, doctors, users, and other relevant stakeholders.

                    </p>
                    <a href="https://ioptn.vercel.app/" target="_blank">
                        <button className="px-8 py-2 mt-4 mr-8">Website</button>
                    </a>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Next Js</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <div className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Hardhat
                            </div>
                            <div className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Metamask
                            </div>
                            <div className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Matplotlib
                            </div>
                            <div className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
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
