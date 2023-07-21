import Image from "next/image";
import React from "react";
import lvlupImg from "../public/assets/projects/lvlup.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const lvlup = () => {
    return (
        <div>
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image
                    src={lvlupImg}
                    alt="/"
                    className="absolute z-1"
                    fill='true'
                    style={{ objectFit: "cover" }}
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
                    <h2 className="py-2">Website for LvL UP Creators</h2>
                    <h3> Next Js / Tailwind CSS / Vercel</h3>
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
                        "LVL Up Creators" is an innovative and responsive website,
                        meticulously crafted using cutting-edge web technologies: Next.js and Tailwind CSS.
                        As a platform dedicated to empowering creators, it showcases a wide array of talents working with the agency.
                        Seamlessly hosted on Vercel, this website boasts lightning-fast performance,
                        ensuring visitors can explore captivating content and connect with passionate creators without any delays.
                        With its sleek design, intuitive navigation, and responsive layout, "LVL Up Creators" serves as a virtual hub
                        that attracts Creators, Brands and More.
                    </p>
                    <a href="https://github.com/Diplo2by/creatorspill" target="_blank">
                        <button className="px-8 py-2 mt-4 mr-8">Code</button>
                    </a>
                    <a href="https://www.lvlupcreators.com/" target="_blank">
                        <button className="px-8 py-2 mt-4 mr-8">Website</button>
                    </a>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Tech Stack</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <div className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Next JS
                            </div>
                            <div className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
                            </div>
                            <div className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Vercel
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

export default lvlup;
