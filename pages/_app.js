import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {Montserrat} from '@next/font/google'
import {Analytics} from '@vercel/analytics/react'
const montserrat = Montserrat({subsets:['latin']})

function MyApp({ Component, pageProps }) {
  return (<>
  <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily},'sans-serif';
        }
      `}</style>
  <Navbar/>
  <Component {...pageProps}/> 
  <Analytics/>
  </>)
}

export default MyApp
