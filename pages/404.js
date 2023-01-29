import Link from "next/link";

export default function Custom404() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-9xl font-extrabold tracking-widest text-[#5651e9]">
          404
        </h1>
        <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">
          Oh no somebody stole that page :(
        </p>
        <p className="md:text-lg lg:text-xl text-gray-600 mt-8">
          Have you tried checking the URL again?{" "}
        </p>
        <Link
          href="/"
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-12 rounded transition duration-150"
          title="Return Home"
        >
          <span>Take me where the wind goes</span>
        </Link>
      </div>
    </div>
  );
}
