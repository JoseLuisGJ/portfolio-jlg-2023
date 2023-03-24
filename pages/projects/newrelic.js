import { useEffect, useRef } from "react";
import Head from "next/head";
// Animations
import {parallaxBlockImages,revealWhenScroll} from "../../components/utils/animation";
// Project building blocks
import ProjectCover from "../../components/projects/projectCover";
import ProjectBlock from "../../components/projects/projectBlock";
import ProjectFooter from "../../components/projects/projectFooter";
// Images import
import newrelicCoverHero from "../../public/assets/newrelic-cover-hero.png";
import newrelicCoverBackground from "../../public/assets/newrelic-cover-background.jpg";
import newrelicEntity1 from "../../public/assets/newrelic-entity-1.png";
import newrelicEntity2 from "../../public/assets/newrelic-entity-2.png";
import newrelicEntity3 from "../../public/assets/newrelic-entity-3.png";
import newrelicEntity4 from "../../public/assets/newrelic-entity-4.png";
import newrelicEntity5 from "../../public/assets/newrelic-entity-5.png";
import newrelicEntity6 from "../../public/assets/newrelic-entity-6.png";
import newrelicEntity7 from "../../public/assets/newrelic-entity-7.png";
import newrelicNavigation1 from "../../public/assets/newrelic-navigation-1.png";
import newrelicNavigation2 from "../../public/assets/newrelic-navigation-2.png";
import newrelicNavigation3 from "../../public/assets/newrelic-navigation-3.png";
import newrelicNavigation4 from "../../public/assets/newrelic-navigation-4.png";
import newrelicHomepage1 from "../../public/assets/newrelic-homepage-1.png";
import newrelicHomepage2 from "../../public/assets/newrelic-homepage-2.png";
import newrelicHomepage3 from "../../public/assets/newrelic-homepage-3.png";
import newrelicHomepage4 from "../../public/assets/newrelic-homepage-4.png";
import newrelicHomepage5 from "../../public/assets/newrelic-homepage-5.png";
import newrelicCapabilities1 from "../../public/assets/newrelic-capabilities-1.png";
import newrelicCapabilities2 from "../../public/assets/newrelic-capabilities-2.png";
import newrelicCapabilities3 from "../../public/assets/newrelic-capabilities-3.png";
import newrelicCapabilities4 from "../../public/assets/newrelic-capabilities-4.png";
import newrelicCapabilities5 from "../../public/assets/newrelic-capabilities-5.png";
import newrelicFigmaWorkflow1 from "../../public/assets/newrelic-figma-workflow-1.png";
import newrelicFigmaWorkflow2 from "../../public/assets/newrelic-figma-workflow-2.png";
import newrelicFigmaWorkflow3 from "../../public/assets/newrelic-figma-workflow-3.png";

import qatiumCoverBackground from "../../public/assets/qatium-cover-background.jpg";

export default function NewRelic(props) {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo(0, 0);
    animateUI();
    return () => {};
  }, []);

  const animateUI = () => {
    parallaxBlockImages(".parallax-block-1");
    parallaxBlockImages(".parallax-block-2");
    parallaxBlockImages(".parallax-block-3");
    parallaxBlockImages(".parallax-block-4");
    parallaxBlockImages(".parallax-block-5");
    revealWhenScroll();
  };

  return (
    <>
      <Head>
        <link rel="preload" href="/assets/newrelic-cover-hero.png" as="image" />
        <link rel="preload" href="/assets/newrelic-cover-background.jpg" as="image" />
        <link rel="preload" href="/assets/newrelic-entity-1.png" as="image" />
        <link rel="preload" href="/assets/newrelic-entity-2.png" as="image" />
        <link rel="preload" href="/assets/newrelic-entity-3.png" as="image" />
        <link rel="preload" href="/assets/newrelic-entity-4.png" as="image" />
        <link rel="preload" href="/assets/newrelic-entity-5.png" as="image" />
        <link rel="preload" href="/assets/newrelic-entity-6.png" as="image" />
        <link rel="preload" href="/assets/newrelic-entity-7.png" as="image" />
        <link rel="preload" href="/assets/newrelic-navigation-1.png" as="image" />
        <link rel="preload" href="/assets/newrelic-navigation-2.png" as="image" />
        <link rel="preload" href="/assets/newrelic-navigation-3.png" as="image" />
        <link rel="preload" href="/assets/newrelic-navigation-4.png" as="image" />
        <link rel="preload" href="/assets/newrelic-homepage-1.png" as="image" />
        <link rel="preload" href="/assets/newrelic-homepage-2.png" as="image" />
        <link rel="preload" href="/assets/newrelic-homepage-3.png" as="image" />
        <link rel="preload" href="/assets/newrelic-homepage-4.png" as="image" />
        <link rel="preload" href="/assets/newrelic-homepage-5.png" as="image" />
        <link rel="preload" href="/assets/newrelic-capabilities-1.png" as="image" />
        <link rel="preload" href="/assets/newrelic-capabilities-2.png" as="image" />
        <link rel="preload" href="/assets/newrelic-capabilities-3.png" as="image" />
        <link rel="preload" href="/assets/newrelic-capabilities-4.png" as="image" />
        <link rel="preload" href="/assets/newrelic-capabilities-5.png" as="image" />
        <link rel="preload" href="/assets/newrelic-figma-workflow-1.png" as="image" />
        <link rel="preload" href="/assets/newrelic-figma-workflow-2.png" as="image" />
        <link rel="preload" href="/assets/newrelic-figma-workflow-3.png" as="image" />
        <link rel="preload" href="/assets/qatium-cover-background.jpg" as="image" />

      </Head>
      <div className={`mb-48`} >
        <ProjectCover
          title="Product"
          subtitle="New Relic One"
          role="Senior Product Designer"
          client="New Relic"
          heroImage={newrelicCoverHero}
          backgroundImage={newrelicCoverBackground}
          url="www.newrelic.com"
        />
        <ProjectBlock
          type={1}
          pushTop
          pushBottom
          backgroundColor="#161C22"
          texts={[
            "The product",
            "New Relic is the observability leader product where the most of the Developers, DevOps, SRE and Business manager rely on. Self definied as the all-in-one observability solution to leverage engineering data to create a more perfect software.",
            "It let them monitor, debug, and improve their entire stack. Measuring performance getting analytics and getting useful insights throughout the full software developing lifecycle. ",
          ]}
        />
        <ProjectBlock
          offsetLeft
          type={5}
          className="parallax-block-1"
          backgroundColor="#022D3F"
          images={[newrelicEntity1, newrelicEntity2, newrelicEntity3, newrelicEntity4, newrelicEntity5, newrelicEntity6, newrelicEntity7]}
          texts={[
            "Entity foundations",
            "Unifying and consolidating the storytelling of entities as an artifact which emits and/or receives data represented visually as an hexagon shape around the whole product.<br/><br/>The high density view or honeycomb aims to show in a more visual way your entities and stand out the most relevant metrics and issues that can affect your system entity health.<br/><br/>Decreasing the cognitive load for non advanced users introducing the concept of entity and system health to make it more human understandable for those entities which are non performing properly or have deviations, having security issues, alarms alerting, and much more. Converging different sources that can affect it in just one concept.",
          ]}
        />
        <ProjectBlock
          offsetRight
          type={5}
          className="parallax-block-2"
          backgroundColor="#00344A"
          images={[newrelicNavigation1, newrelicNavigation4, newrelicNavigation2, newrelicNavigation3 ]}
          texts={[
            "Navigation revamp",
            "As a part of the team who revamped the new product navigation I was working on the initial research, early concepts and interactive probe of concepts which ended up conforming the new left navigation which was launched together with the new company rebranding.<br/><br/>The challenge was to find the most scalable approach for the plenty of verticals and solutions that the product has and be useful not only for advanced users but also for newbie ones and let customisation for those who need to make their own space based on their user profiling, SRE, developers, DevOps…",
          ]}
        />
        <ProjectBlock
          offsetLeft
          type={5}
          className="parallax-block-3"
          backgroundColor="#022D3F"
          images={[newrelicHomepage1, newrelicHomepage2, newrelicHomepage3, newrelicHomepage4, newrelicHomepage5]}
          texts={[
            "Homepage concept",
            "Design lead for the new product homepage in order to guide the users on what to do next based on user profiling, user maturity and data ingested. This project was kicked off making a design sprint where we realized that users need to be hand holded when they land into the product instead of overwhelming them with paygates. MPVs were tested and validated with user interviews.<br/><br/>It was a crossteam endeavor where observability, platform and growth teams were coordinated to obtain a scalable solution which could cover the different user needs on different user states and journeys, aiming to first ingest data, then use the different capabilities and last improve the observability coverage of the system.",
          ]}
        />
        <ProjectBlock
          offsetRight
          type={5}
          className="parallax-block-4"
          backgroundColor="#00344A"
          images={[newrelicCapabilities1,newrelicCapabilities2,newrelicCapabilities3,newrelicCapabilities4,newrelicCapabilities5]}
          texts={[
            "All capabilities consolidation",
            "New Relic has plenty of capabilities in order to troubleshoot, monitor and observe your system. In addition to this there are some curated custom and official applications which offer extra features as a part of the platform programmability and users can make their own ones.<br/><br/>This project was aiming to merge all the things that the product can do in just one place to show it at a glance. The challenge was to do it covering the needs of the different user journeys and being useful and intuitive for all of them.",
          ]}
        />
         <ProjectBlock
          offsetLeft
          type={5}
          className="parallax-block-5"
          backgroundColor="#022D3F"
          images={[newrelicFigmaWorkflow1,newrelicFigmaWorkflow2,newrelicFigmaWorkflow3]}
          texts={[
            "Figma standards",
            "Driving and supporting the DesignOps team in order to set up the Figma guidelines to get a common way to work and use the tool for all the product designers composed of around 120 people, content designers and ux researchers with a feature centric and scalable approach.<br/><br/>Going from file and cover templates, layer naming conventions, file structure location, control version and branching, documentation, flows, handover and collaboration… to automatisation like centralized source of truth connected to Confluence, layer naming linting or synchronized documentation.",
          ]}
        />
    
      </div>
      <ProjectFooter
        {...props}
        backgroundColor="#22222E"
        backgroundImage={qatiumCoverBackground}
        title="Qatium"
        url="qatium"
      />
    </>
  );
}
