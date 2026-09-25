import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { Poppins } from "@next/font/google";
import MainHeader from "../components/mainHeader";
import ProjectsMenu from "../components/projectsMenu";
import { useState, useEffect, useRef } from "react";
import App from "next/app";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getVisibleProjects } from "../data/projects";
import { hasAccessCookie } from "../lib/access";
import { PrivateAccessContext } from "../components/privateAccess";



const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps, unlocked }) {
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
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
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

        {getVisibleProjects(unlocked).map((project) => (
          <link key={project.slug} rel="preload" href={project.backgroundImage} as="image"/>
        ))}
      </Head>
      <Script beforeInteractive src="/newrelic.agent.js" />

      <PrivateAccessContext.Provider value={Boolean(unlocked)}>
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
      </PrivateAccessContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  let unlocked = false;

  if (appContext.ctx.req) {
    unlocked = hasAccessCookie(appContext.ctx.req.headers.cookie || "");
  } else {
    const response = await fetch("/api/access");
    const data = await response.json();
    unlocked = Boolean(data.unlocked);
  }

  return { ...appProps, unlocked };
};

export default MyApp;
