import '../styles/globals.css';
import Head from 'next/head';
import { Poppins } from '@next/font/google';
import MainHeader from '../components/mainHeader';
import ProjectsMenu from '../components/projectsMenu';
import {AppWrapper} from '../components/appContext';
import gsap from "gsap";
import {ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {ScrollSmoother } from "gsap/dist/ScrollSmoother.min.js";
import { SmootherContext } from "../SmootherContext";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";
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

  let [smoother, setSmoother] = useState();
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = ScrollSmoother.create({
      smooth: 1,
      normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
      ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
      effects: true,
      preventDefault: true
    });

    setSmoother(smoother);
  }, []);


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
        <SmootherContext.Provider value={smoother}>
          <AppWrapper>
            <Component setMenuItemActive={setMenuItemActive} {...pageProps} />
          </AppWrapper>
        </SmootherContext.Provider>
        
      </main>
    </>

  )
}

export default MyApp;
