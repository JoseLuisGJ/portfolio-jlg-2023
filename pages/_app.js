import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { Poppins } from "@next/font/google";
import MainHeader from "../components/mainHeader";
import ProjectsMenu from "../components/projectsMenu";
import { useState, useEffect, useRef } from "react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getEnabledProjects } from "../data/projects";



const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  const [menuOpened, setMenuOpened] = useState(false);
  const prevShouldRenderMenu = useRef();
  const childRef = useRef(null);

  useEffect(() => {
    prevShouldRenderMenu.current = menuOpened;
  }, [menuOpened]);



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

        {getEnabledProjects().map((project) => (
          <link key={project.slug} rel="preload" href={project.backgroundImage.src} as="image"/>
        ))}
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
