import Head from "next/head";
import About from "../components/About";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import pwImg from "../public/assets/preview.png"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Darsh | WEB3 & ML</title>
        <meta property="og:url" content="heydarsh.co" />
        <meta name="description" content="Tap here to takeoff!" key="desc" />
        <meta
          property="og:title"
          content="Darsh | WEB3 & ML"
        />
        
        <meta
          property="og:description"
          content="Tap here to takeoff!"
        />
        <meta property="og:image" content={pwImg} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
