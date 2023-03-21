import { useEffect, useRef } from "react";

import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectCover from "../../components/projects/projectCover";
import ProjectBlock from "../../components/projects/projectBlock";
import ProjectFooter from "../../components/projects/projectFooter";
// Images import
import goaiguaCoverHero from "../../public/assets/goaigua-cover-hero.png";
import goaiguaCoverBackground from "../../public/assets/goaigua-cover-background.jpg";
import goaiguaMockupDesktopMobil from "../../public/assets/goaigua-mockup-desktop-mobil.png";
import goaiguaMockup1 from "../../public/assets/goaigua-mockups-1.png";
import goaiguaMockup2 from "../../public/assets/goaigua-mockups-2.png";
import goaiguaMockup3 from "../../public/assets/goaigua-mockups-3.png";
import goaiguaMockup4 from "../../public/assets/goaigua-mockups-4.png";
import figmapCoverBackground from "../../public/assets/figmap-cover-background.jpg";


export default function GoAigua(props) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    window.scrollTo(0, 0);
    animateUI();
    return () => {};
  }, []);

  const animateUI = () => {
    gsap.utils.toArray(".reveal").forEach((elem) => {
      gsap.from(elem, {
        y: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: elem,
          start: "top 75%",
          end: "top top",
          scrub: false,
          markers: false,
          toeggleActions: "play pause resume pause",
        },
      });
    });
  };

  return (
    <>
      <Head>
        <link rel="preload" href="/assets/goaigua-cover-hero.png" as="image" />
        <link rel="preload" href="/assets/goaigua-cover-background.jpg" as="image" />
        <link rel="preload" href="/assets/goaigua-mockup-desktop-mobil.png" as="image" />
        <link rel="preload" href="/assets/goaigua-mockups-1.png" as="image" />
        <link rel="preload" href="/assets/goaigua-mockups-2.png" as="image" />
        <link rel="preload" href="/assets/goaigua-mockups-3.png" as="image" />
        <link rel="preload" href="/assets/goaigua-mockups-4.png" as="image" />
      </Head>
      <div className={`mb-48`}>
        <ProjectCover
          title="Product Design"
          subtitle="GoAigua"
          role="Principal Prodouct Designer"
          client="Idrica"
          heroImage={goaiguaCoverHero}
          backgroundImage={goaiguaCoverBackground}
          url="www.idrica.com"
        />
        <ProjectBlock
          type={1}
          invertTextColor
          backgroundColor="#DFE4EB"
          images={[goaiguaMockupDesktopMobil]}
          texts={[
            "The product",
            "Idrica is leading the digital transformation of the water industry, delivering services and the technological solution GoAigua to manage the entire water cycle.",
            "This software suit lets the expert users to manage  vertical areas like water leaks, water quality, billing, meter insights, digital twin, work orders, customer portal among others..",
          ]}
        />
        <ProjectBlock
          type={4}
          invertTextColor
          backgroundColor="#ffffff"
          texts={[
            "Building a robust software suit",
            "The company had several isolated water solutions which were gathered and unified and a centralizad water platform compound by different verticals. The challenge as a main designer was to give consistency and a common experience to all the platform, managing technical boundaries, inconsistent user interfaces and setting up common patterns.",
          ]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          offsetLeft
          type={5}
          backgroundColor="#284879"
          images={[goaiguaMockup1]}
          texts={[
            "From individual contributor to management ",
            "My role as a Principal Designer and UX engineer was to work side by side with each individual product team and marketing to deliver tailored solutions aiming for a common experience for the final users.<br/>Once the platform got traction I was in charge of consolidating the first dedicated product design team of the company. Mentoring and setting up the guidelines on design wise.",
          ]}
        />
        <ProjectBlock
          type={2}
          backgroundColor="#DFE4EB"
          images={[goaiguaMockup2]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          offsetRight
          type={5}
          backgroundColor="#284879"
          images={[goaiguaMockup3]}
          texts={[
            "Aigua Design System ",
            "Making of a horizontal design system based on Atomic Design approach for all the platform products. Consolidation of all interaction patterns, design tokens, layouts, components and CSS architecture. ",
          ]}
        />
        <ProjectBlock
          type={2}
          backgroundColor="#DFE4EB"
          images={[goaiguaMockup4]}
        />
      </div>
      <ProjectFooter
       {...props}
        idProject="4"
        backgroundColor="#22222E"
        backgroundImage={figmapCoverBackground}
        title="Figmap"
        url="figmap"
      />
    </>
  );
}
