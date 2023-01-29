import Link from "next/link";

export default function Custom500() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
	<h1 className="text-9xl font-extrabold text-white tracking-widest">500</h1>
	<div className="bg-[#5651e9] px-2 text-sm rounded rotate-12 absolute">
		INTERNAL SERVER ERROR
	</div>
	<button className="mt-5">
      <Link
        className="relative inline-block text-sm font-medium text-[#5651e9] group active:text-indigo-500 focus:outline-none focus:ring" href='/'
      >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#5651e9] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
          Go Home
        </span>
      </Link>
    </button>
</div>
  );
}
