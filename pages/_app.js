import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { Poppins } from "@next/font/google";
import MainHeader from "../components/mainHeader";
import ProjectsMenu from "../components/projectsMenu";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';



const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  const [menuOpened, setMenuOpened] = useState(false);
  const prevShouldRenderMenu = useRef();
  const childRef = useRef(null);
  const [menuItemActive, setMenuItemActive] = useState(0);
  const router = useRouter();

  useEffect(() => {
    prevShouldRenderMenu.current = menuOpened;
  }, [menuOpened]);



  useEffect(() => {
    if(!router.isReady) return;
    if (router.asPath === "/") {
      setMenuItemActive(0);
    } else if (router.asPath === "/projects/newrelic") {
      setMenuItemActive(1);
    } else if (router.asPath === "/projects/qatium") {
      setMenuItemActive(2);
    } else if (router.asPath === "/projects/goaigua") {
      setMenuItemActive(3);
    } else if (router.asPath === "/projects/figmap") {
      setMenuItemActive(4);
    } else if (router.asPath === "/projects/globalomnium") {
      setMenuItemActive(5);
    } else if (router.asPath === "/projects/muchosol") {
      setMenuItemActive(6);
    } else if (router.asPath === "/projects/energysystem") {
      setMenuItemActive(7);
    }
  }, [router.isReady, router.query]);


  const siblingFunction = () => {
    if (childRef.current) {
      childRef.current.unmountMenuFromIcon();
    }
  };

  return (
    <>
      <Head>
        <title>José Luis González - Portfolio - Product Designer and Code Lover</title>
        <meta name="description" content="José Luis González Jiménez portfolio, product designer, UX engineer, frontend developer. Last projects and use cases working on former companies like New Relic, Qatium, Idrica, GoAigua, Nectar Estudio "/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
        <meta property="og:title" content="José Luis González - Portfolio - Product Designer and Code Lover"/>
        <meta property="og:site_name" content="Jose Luis González | Portfolio"/>
        <meta property="og:url" content="https://www.joseluis.design"/>
        <meta property="og:description" content="José Luis González Jiménez portfolio, product designer, UX engineer, frontend developer. Last projects and use cases working on former companies like New Relic, Qatium, Idrica, GoAigua, Nectar Estudio "/>
        <meta property="og:type" content="profile"/>
        <meta property="og:image" content="https://www.joseluis.design/jose-luis-gonzalez-portfolio-og-image.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image:alt" content="José Luis González - Portfolio website"/>
        <meta name="twitter:title" content="José Luis González - Portfolio - Product Designer and Code Lover"/>
        <meta name="twitter:description" content="José Luis González Jiménez portfolio, product designer, UX engineer, frontend developer. Last projects and use cases working on former companies like New Relic, Qatium, Idrica, GoAigua, Nectar Estudio."/>
        <meta name="twitter:image" content="https://www.joseluis.design/jose-luis-gonzalez-portfolio-og-image.jpg"/>
        <link rel="icon" href="favicon.ico" />

        <link rel="preload" href="/assets/newrelic-cover-background.jpg" as="image"/>
        <link rel="preload" href="/assets/qatium-cover-background.jpg" as="image"/>
        <link rel="preload" href="/assets/goaigua-cover-background.jpg" as="image"/>
        <link rel="preload" href="/assets/figmap-cover-background.jpg" as="image"/>
        <link rel="preload" href="/assets/global-omnium-cover-background.jpg" as="image"/>
        <link rel="preload" href="/assets/muchosol-cover-background.jpg" as="image"/>
        <link rel="preload" href="/assets/energy-system-cover-background.jpg" as="image"/>
      </Head>
      <Script beforeInteractive src="/newrelic.agent.js" />

      <main className={poppins.className}>
        <MainHeader
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
          siblingFunction={siblingFunction}
        />
        {menuOpened && (
          <ProjectsMenu
            ref={childRef}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
            menuItemActive={menuItemActive}
          />
        )}
        <Component
          {...pageProps}
        />
        <Analytics />
        <SpeedInsights />
      </main>
    </>
  );
}

export default MyApp;
