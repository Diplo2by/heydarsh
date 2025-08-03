import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="px-4 md:px-0">
      <Head>
        <title>Darsh | Building Tech & Communities</title>
        <meta property="og:url" content="https://www.heydarsh.in/" />
        <meta name="description" content="Tap here to takeoff!" key="desc" />
        <meta name="og:description" content="Tap here to takeoff!" key="desc" />

        <meta
          property="og:title"
          content="Darsh | Building Tech & Communities"
        />

        <meta
          property="og:description"
          content="Tap here to takeoff!"
        />
        <meta property="og:image" content={'https://www.heydarsh.in/assets/p3updated.webp'} />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="HeyDarsh" />
        <link rel="manifest" href="/site.webmanifest" />

      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
