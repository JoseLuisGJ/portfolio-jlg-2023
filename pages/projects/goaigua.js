import { useEffect, useRef } from "react";

import Head from "next/head";
// Animations
import {parallaxBlockImages,revealWhenScroll} from "../../components/utils/animation";
// Project building blocks
import ProjectCover from "../../components/projects/projectCover";
import ProjectBlock from "../../components/projects/projectBlock";
import ProjectFooter from "../../components/projects/projectFooter";
// Images import
import goaiguaCoverHero from "../../public/assets/goaigua-cover-hero.png";
import goaiguaCoverBackground from "../../public/assets/goaigua-cover-background.jpg";
import goaiguaResponsive1 from "../../public/assets/goaigua-responsive-1.png";
import goaiguaResponsive2 from "../../public/assets/goaigua-responsive-2.png";
import goaiguaEars1 from "../../public/assets/goaigua-ears-1.png";
import goaiguaEars2 from "../../public/assets/goaigua-ears-2.png";
import goaiguaEars3 from "../../public/assets/goaigua-ears-3.png";
import goaiguaPlatform1 from "../../public/assets/goaigua-platform-1.png";
import goaiguaPlatform2 from "../../public/assets/goaigua-platform-2.png";
import goaiguaAiguaDs1 from "../../public/assets/goaigua-aigua-ds-1.png";
import goaiguaAiguaDs2 from "../../public/assets/goaigua-aigua-ds-2.png";
import goaiguaAiguaDs3 from "../../public/assets/goaigua-aigua-ds-3.png";
import goaiguaAiguaDsComponents1 from "../../public/assets/goaigua-aigua-ds-components-1.png";
import goaiguaAiguaDsComponents2 from "../../public/assets/goaigua-aigua-ds-components-2.png";
import goaiguaAiguaDsComponents3 from "../../public/assets/goaigua-aigua-ds-components-3.png";
import goaiguaAiguaDsComponents4 from "../../public/assets/goaigua-aigua-ds-components-4.png";
import figmapCoverBackground from "../../public/assets/figmap-cover-background.jpg";


export default function GoAigua(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    animateUI();
    return () => {};
  }, []);

  const animateUI = () => {
    parallaxBlockImages(".parallax-block-1")
    parallaxBlockImages(".parallax-block-2")
    parallaxBlockImages(".parallax-block-3")
    parallaxBlockImages(".parallax-block-4")
    parallaxBlockImages(".parallax-block-5")
    revealWhenScroll();
  };

  return (
    <>
      <Head>
      <title>José Luis González - Portfolio - Goaigua</title>
        <meta name="description" content="Projects and use cases working at Idrica making Goaigua as a Principal Product Designer and UX Engineer"/>
        <link rel="preload" href="/assets/goaigua-cover-hero.png" as="image" />
        <link rel="preload" href="/assets/goaigua-cover-background.jpg" as="image" />
      </Head>
      <div className={`mb-48`}>
        <ProjectCover
          title="Product"
          subtitle="GoAigua"
          role="Principal Product Designer<br/>UX Engineer"
          client="Idrica"
          heroImage={goaiguaCoverHero}
          backgroundImage={goaiguaCoverBackground}
          url="www.idrica.com"
        />
        <ProjectBlock
          type={1}
          invertTextColor
          backgroundColor="#DFE4EB"
         
          texts={[
            "The product",
            "Idrica is leading the digital transformation of the water industry, delivering services and the technological solution GoAigua to manage the entire water cycle.",
            "This software suite lets the expert users to manage  vertical areas like water leaks, water quality, billing, meter insights, digital twin, work orders, customer portal among others.",
          ]}
        />
        <ProjectBlock
          className="parallax-block-1"
          type={6}
          backgroundColor="#DFE4EB"
          images={[goaiguaResponsive1, goaiguaResponsive2]}
        />
        
        <ProjectBlock
          type={4}
          invertTextColor
          backgroundColor="#ffffff"
          texts={[
            "Building a consistent and scalable platform",
            "The company had several isolated water solutions which were gathered and unified and a centralized water platform compound by different verticals. The challenge as a main designer was to give consistency and a common experience to all the platform, managing technical boundaries, inconsistent user interfaces and setting up common patterns",
          ]}
        />
        <ProjectBlock
        
          offsetLeft
          type={5}
          className="parallax-block-2"
          backgroundColor="#284879"
          images={[goaiguaEars1, goaiguaEars2, goaiguaEars3]}
          texts={[
            "From individual contributor to management ",
            "My role as a Principal Product Designer and UX engineer was to work side by side with each individual product team and marketing to deliver tailored solutions aiming for a common experience for the final users.<br/><br/>Once the platform got traction I was in charge of consolidating the first dedicated product design team of the company. Mentoring and setting up the guidelines on design wise.",
          ]}
        />
        <ProjectBlock
          type={6}
          className="parallax-block-3"
          backgroundColor="#DFE4EB"
          images={[goaiguaPlatform1, goaiguaPlatform2]}
        />
        <ProjectBlock
      
          offsetRight
          type={5}
          className="parallax-block-4"
          backgroundColor="#284879"
          images={[goaiguaAiguaDs1, goaiguaAiguaDs2, goaiguaAiguaDs3]}
          texts={[
            "Aigua Design System ",
            "Making of a horizontal design system based on Atomic Design approach for all the platform products. Consolidation of all interaction patterns, design tokens, layouts, components and CSS architecture. ",
          ]}
        />
        <ProjectBlock
          type={6}
          className="parallax-block-5"
          backgroundColor="#DFE4EB"
          images={[goaiguaAiguaDsComponents1, goaiguaAiguaDsComponents2, goaiguaAiguaDsComponents3, goaiguaAiguaDsComponents4]}
        />
      </div>
      <ProjectFooter
       {...props}
        backgroundColor="#22222E"
        backgroundImage={figmapCoverBackground}
        title="Figmap"
        url="figmap"
      />
    </>
  );
}
