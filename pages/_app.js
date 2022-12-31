import '../styles/globals.css';
import { Poppins } from '@next/font/google';
import MainHeader from '../components/mainHeader';  

const poppins = Poppins({
  weight: ['100','200','300','400','500','600','700','800'],
  style:'normal',
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  
  return (
  <main className={poppins.className}>
    <MainHeader/>
    <Component {...pageProps} />
  </main>
  )
}

export default MyApp;
