import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {Montserrat} from '@next/font/google'

const montserrat = Montserrat({subsets:['latin']})

function MyApp({ Component, pageProps }) {
  return (<>
  <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
  <Navbar/>
  <Component {...pageProps}/> 
  </>)
}

export default MyApp
