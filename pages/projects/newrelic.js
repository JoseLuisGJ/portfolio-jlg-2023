import { useEffect, useRef } from "react";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectCover from "../../components/projects/projectCover";
import ProjectBlock from "../../components/projects/projectBlock";
import ProjectFooter from "../../components/projects/projectFooter";
// Images import
import newrelicCoverHero from "../../public/assets/newrelic-cover-hero.png";
import newrelicCoverBackground from "../../public/assets/newrelic-cover-background.jpg";
import newrelicIsomockups1 from "../../public/assets/newrelic-isomockups-1.png";
import newrelicIsomockups2 from "../../public/assets/newrelic-isomockups-2.png";
import newrelicIsomockups3 from "../../public/assets/newrelic-isomockups-3.png";
import newrelicIsomockups4 from "../../public/assets/newrelic-isomockups-4.png";
import newrelicFigmaWorkflow from "../../public/assets/newrelic-figma-workflow.png";
import qatiumCoverBackground from "../../public/assets/qatium-cover-background.jpg";


export default function NewRelic(props) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    // scroll to top on page load
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
        <link rel="preload" href="/assets/newrelic-cover-hero.png" as="image" />
        <link rel="preload" href="/assets/newrelic-cover-background.jpg" as="image" />
        <link rel="preload" href="/assets/newrelic-isomockups-1.png" as="image" />
        <link rel="preload" href="/assets/newrelic-isomockups-2.png" as="image" />
        <link rel="preload" href="/assets/newrelic-isomockups-3.png" as="image" />
        <link rel="preload" href="/assets/newrelic-isomockups-4.png" as="image" />
        <link rel="preload" href="/assets/newrelic-figma-workflow.png" as="image" />
      </Head>
      <div className={`mb-48 bg-[#22222E]`} >
        <ProjectCover
          title="Product Design"
          subtitle="New Relic"
          role="Senior Product Designer"
          client="New Relic"
          heroImage={newrelicCoverHero}
          backgroundImage={newrelicCoverBackground}
          url="www.newrelic.com"
        />
        <ProjectBlock
          pushTop
          pushBottom
          offsetLeft
          type={5}
          backgroundColor="#022D3F"
          images={[newrelicIsomockups1]}
          texts={[
            "Entity foundations",
            "Unifying and consolidating the storytelling of entities as an artifact which emits and/or receives data represented visually as an hexagon around the whole product.<br/><br/>The high density view or honeycomb aims to show in a more visual way your entities and stand out the most relevant metrics and issues that can affect your system entity health.<br/><br/>Flattering the cognitive load for non advanced users introducing the concept of entity and system health to make it more human readable for those entities which are non performing properly or have deviations, having security issues, alarms alerting, and much more. Converging different sources that can affect it in just one concept.",
          ]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          offsetRight
          type={5}
          backgroundColor="#00344A"
          images={[newrelicIsomockups2]}
          texts={[
            "Navigation revamp",
            "As a part of the team who revamped the new product navigation I was working on the initial research, early concepts and interactive probe of concepts which ended up conforming the new left navigation which was launched together with the new company rebranding.<br/><br/>The challenge was to find the most scalable approach for the plenty of verticals and solutions that the product has and be useful not only for advanced users but also for newbie ones and let customisation for those who need to make their own space based on their user profiling, SRE, developers, DevOps…",
          ]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          offsetLeft
          type={5}
          backgroundColor="#022D3F"
          images={[newrelicIsomockups3]}
          texts={[
            "Homepage concept",
            "Design lead for the new product homepage in order to guide the users on what to do next based on user profiling, user maturity and data ingested.This project was kicked of making a design sprint were we realized that users need to be hand holded when they land into the product instead of overwhelming them with paygates. MPVs were tested and validated with user interviews.<br/><br/>It was a crossteam endeavor where overstability, platform and growth teams were coordinated to obtain a scalable solution which could cover the different user needs on different user states and journeys, aiming for first ingest data, then use the different capabilities and last improve the observability coverage of the users.",
          ]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          offsetRight
          type={5}
          backgroundColor="#00344A"
          images={[newrelicIsomockups4]}
          texts={[
            "All capabilities consolidation",
            "New Relic has plenty of capabilities in order to troubleshoot, monitor and observe your system. In addition to this there are some curated custom and official applications which offer extra features as a part of the platform programmability and users can make their own ones.<br/><br/>This project was aiming to merge all the things that the product can do in just one place to show it at a glance. The challenge was to do it covering the needs of the different user journeys and being useful and intuitive for all of them.",
          ]}
        />
         <ProjectBlock
          pushTop
          pushBottom
          offsetLeft
          type={5}
          backgroundColor="#022D3F"
          images={[newrelicFigmaWorkflow]}
          texts={[
            "Figma standards",
            "Driving and setting up the Figma guidelines in order to get a common way to work and use the tool for all the product designers, content designers and ux researchers with a feature centric and scalable approach.<br/><br/>Going from file and cover templates, layer naming conventions, file structure location, control version and branching, documentation, flows, handover and collaboration… to automatisation like centralised source of truth connected to Confluence, layer naming linting or synchronised documentation.",
          ]}
        />
      </div>
      <ProjectFooter
        {...props}
        idProject="2"
        backgroundColor="#22222E"
        backgroundImage={qatiumCoverBackground}
        title="Qatium"
        url="qatium"
      />
    </>
  );
}
