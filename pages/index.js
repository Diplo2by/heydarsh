import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
  return (
    <div>
      <Head>
        <title>Darsh | WEB3 & ML</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  )
}
