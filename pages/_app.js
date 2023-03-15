import '../styles/globals.css';
import Head from 'next/head';
import { Poppins } from '@next/font/google';
import MainHeader from '../components/mainHeader';
import ProjectsMenu from '../components/projectsMenu';
import {AppWrapper} from '../components/appContext';
import { useState, useEffect, useRef } from 'react';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: 'normal',
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {

  const [menuOpened, setMenuOpened] = useState(false);
  // const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
  const prevShouldRenderMenu = useRef();
  const childRef = useRef(null);
  const [menuItemActive, setMenuItemActive] = useState(0);


  const animateUnmountMenu = () => {
    const timer = setTimeout(() => console.log("Hello, World!"), 3000);
    clearTimeout(timer);
  }

  useEffect(() => {
    prevShouldRenderMenu.current = menuOpened;
    console.log('prev:' + prevShouldRenderMenu.current);
    console.log('current:' + menuOpened);
  }, [menuOpened]);

  const siblingFunction = () => {
    console.log("Sibling function called!");
    if (childRef.current) {
      childRef.current.unmountMenuFromIcon();
    }

  };



  return (
    <>
      <Head>
        <title>José Luis González | Portfolio</title>
        <meta name="description" content="José Luis González portfolio, product designer & code lover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={poppins.className}>
        {/* <div className='absolute z-50'>Now: {menuOpened}, before: {prevShouldRenderMenu.current}</div> */}
      
        <MainHeader menuOpened={menuOpened} setMenuOpened={setMenuOpened} siblingFunction={siblingFunction} />
        {
          menuOpened && <ProjectsMenu ref={childRef} menuOpened={menuOpened} setMenuOpened={setMenuOpened}  menuItemActive={menuItemActive} setMenuItemActive={setMenuItemActive}/>
        }
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
        
      </main>
    </>

  )
}

export default MyApp;
