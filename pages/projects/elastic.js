import { useEffect } from "react";
import Head from "next/head";
// Animations
import {parallaxBlockImages,revealWhenScroll, revealFromCenter} from "../../components/utils/animation";
// Project building blocks
import ProjectCover from "../../components/projects/projectCover";
import ProjectBlock from "../../components/projects/projectBlock";
import ProjectFooter from "../../components/projects/projectFooter";
// Images import
import elasticCoverHero from "../../public/assets/elastic-cover-hero.png";
import elasticCoverHero0 from "../../public/assets/elastic-cover-hero.png";
import elasticCoverHero1 from "../../public/assets/elastic-cover-hero-1.png";
import elasticCoverHero2 from "../../public/assets/elastic-cover-hero-2.png";
import elasticCoverHero3 from "../../public/assets/elastic-cover-hero-3.png";
import elasticCoverBackground from "../../public/assets/elastic-cover-background.jpg";

import elasticConnectors1 from "../../public/assets/elastic-connectors-1.png";
import elasticConnectors2 from "../../public/assets/elastic-connectors-2.png";
import elasticConnectors3 from "../../public/assets/elastic-connectors-3.png";
import elasticConnectors4 from "../../public/assets/elastic-connectors-4.png";

import elasticCrawler1 from "../../public/assets/elastic-crawler-1.png";
import elasticCrawler2 from "../../public/assets/elastic-crawler-2.png";
import elasticCrawler3 from "../../public/assets/elastic-crawler-3.png";
import elasticCrawler4 from "../../public/assets/elastic-crawler-4.png";
import elasticCrawler5 from "../../public/assets/elastic-crawler-5.png";
import elasticQueryRules1 from "../../public/assets/elastic-query-rules-1.png";
import elasticQueryRules2 from "../../public/assets/elastic-query-rules-2.png";
import elasticAiComponents1 from "../../public/assets/elastic-ai-components-1.png";
import elasticAiComponents2 from "../../public/assets/elastic-ai-components-2.png";
import elasticAiComponents3 from "../../public/assets/elastic-ai-components-3.png";
import elasticEui1 from "../../public/assets/elastic-eui-1.png";
import elasticEui2 from "../../public/assets/elastic-eui-2.png";
import elasticEui3 from "../../public/assets/elastic-eui-3.png";
import elasticEui4 from "../../public/assets/elastic-eui-4.png";
import elasticEui5 from "../../public/assets/elastic-eui-5.png";
import elasticFigma1 from "../../public/assets/elastic-figma-1.png";
import elasticFigma2 from "../../public/assets/elastic-figma-2.png";
import elasticFigma3 from "../../public/assets/elastic-figma-3.png";
import elasticFigma4 from "../../public/assets/elastic-figma-4.png";
import elasticFigma5 from "../../public/assets/elastic-figma-5.png";
import elasticFigma6 from "../../public/assets/elastic-figma-6.png";

import newRelicCoverBackground from "../../public/assets/newrelic-cover-background.jpg";

export default function Elastic(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    animateUI();
    return () => {};
  }, []);

  const animateUI = () => {
    revealFromCenter(".reveal-hero-1");
    parallaxBlockImages(".parallax-block-1");
    parallaxBlockImages(".parallax-block-2");
    parallaxBlockImages(".parallax-block-3");
    parallaxBlockImages(".parallax-block-4");
    parallaxBlockImages(".parallax-block-5");
    parallaxBlockImages(".parallax-block-6");
    revealWhenScroll();
  };

  return (
    <>
      <Head>
        <title>José Luis González - Portfolio - Elastic</title>
        <meta name="description" content="Projects and use cases working at Elastic as a Senior UX Designer/Engineer"/>
        <link rel="preload" href="/assets/elastic-cover-hero-1.png" as="image" />
        <link rel="preload" href="/assets/elastic-cover-hero-0.png" as="image" />
        <link rel="preload" href="/assets/elastic-cover-hero-2.png" as="image" />
        <link rel="preload" href="/assets/elastic-cover-hero-3.png" as="image" />
        <link rel="preload" href="/assets/elastic-cover-background.jpg" as="image" />
      </Head>
      <div className={`mb-48`} >
        <ProjectCover
          title="Product Design"
          subtitle="Elastic"
          role="Senior UX Designer/Engineer"
          client="Elastic"
          heroImage={elasticCoverHero}
          heroImages={[elasticCoverHero0,elasticCoverHero1, elasticCoverHero2, elasticCoverHero3]}
          className="reveal-hero-1"
          backgroundImage={elasticCoverBackground}
          url="www.elastic.co"
        />
        <ProjectBlock
          type={1}
          pushTop
          pushBottom
          backgroundColor="#0F192B"
          texts={[
            "The product",
            "Elastic is the Search AI Company, offering solutions across three verticals — Search, Observability, and Security — helping businesses find answers that matter and accelerate time to insight from their data.",
            "It's an open source company: Kibana, the main UI, and its related design system, EUI, are both publicly available.\nI started out as part of the Search team, and later transitioned to the Platform and Design System team.",
          ]}
        />
        <ProjectBlock
          offsetLeft
          type={5}
          className="parallax-block-1"
          backgroundColor="#0F192B"
          images={[elasticConnectors1, elasticConnectors2, elasticConnectors3, elasticConnectors4]}
          texts={[
            "Content connectors",
            "Ingesting data through content connectors is one of the core workflows for bringing data into Elastic from the third-party services where it lives.<br/><br/>This can happen either through the Kibana UI or programmatically via the API, with both paths feeding into the same underlying index. The challenge was designing a UI that exposed the full technical capabilities available through the API, without overwhelming less experienced users.<br/><br/>Throughout this workflow, users could freely switch between the UI, the Kibana terminal, or their own API calls at any point. The UI remained fully reactive, reflecting status changes in real time regardless of whether the deployment was local or cloud-based.",
          ]}
        />

        <ProjectBlock
          offsetRight
          invertTextColor
          type={5}
          className="parallax-block-2"
          backgroundColor="#F1F4F8"
          images={[elasticQueryRules1, elasticQueryRules2]}
          texts={[
            "Query rules",
            "Design and front-end implementation of this search feature; business logic to search through query rules — letting users filter and prioritize results, pin or hide specific documents across indices, and fine-tune relevance for search or RAG systems with custom query parameters in the retrieval pipeline.<br/><br/>The Kibana UI and its API Console were always available side by side, letting users run API calls directly or follow the same process through the UI — teaching them how to do it programmatically along the way.",
          ]}
        />

        <ProjectBlock
          offsetLeft
          type={5}
          className="parallax-block-3"
          backgroundColor="#0F192B"
          images={[elasticCrawler1, elasticCrawler2, elasticCrawler3, elasticCrawler4, elasticCrawler5]}
          texts={[
            "Web crawler",
            "Another way of getting data into Elastic is by crawling a website — scraping content from a public domain to keep an index in sync with that information.<br/><br/>For this project, I designed a UI to manage all the existing capabilities of the Crawler CLI tool, covering how to fetch, filter, schedule, and transform the information coming from a website.<br/><br/>The challenge was translating a tool built for technical, command-line users into an interface that felt approachable, without hiding the depth and flexibility the CLI already offered. Users could define crawl rules, set up scheduled runs, and preview how content would be extracted and transformed before it was indexed.",
          ]}
        />
        <ProjectBlock
          invertTextColor
          offsetRight
          type={5}
          className="parallax-block-5"
          backgroundColor="#F1F4F8"
          images={[elasticEui1, elasticEui2, elasticEui3, elasticEui4, elasticEui5]}
          texts={[
            "EUI Design System",
            "As part of the EUI Design System team, I improved several of the most widely used components, including Buttons, Button Groups, Split Buttons, Tables, Flyouts, and Icons, among others — modernizing the UI and bringing consistency in line with the broader changes applied across the design system for the Borealis theme. <br/><br/>Code parity is one of the main drivers for the team, meaning the architecture should stay as close as possible between Figma and code. This led me to contribute on both fronts.<br/><br/>I also contributed to improving the architecture of the iconography system, making it more scalable, easier to find, and visually refreshed.",
          ]}
        />
        <ProjectBlock
          offsetLeft
          type={5}
          className="parallax-block-6"
          backgroundColor="#0F192B"
          images={[elasticFigma1, elasticFigma2, elasticFigma3, elasticFigma4, elasticFigma5, elasticFigma6]}
          texts={[
            "Figma EUI plugins",
            "I also built a few Figma plugin resources to improve the workflow for both designers and engineers working in Figma.<br/><br/>Code Formatter is an internal plugin that works with a Code component to format, indent, and colorize any code snippet, automatically detecting the language and cutting down the manual work of building code blocks during the design phase.<br/><br/>Design Tokens Sync is another internal plugin that syncs design tokens from our GitHub repo into Figma. In the other direction, it creates a GitHub PR to push changes back and track them, keeping code as the single source of truth.",
          ]}
        />
        <ProjectBlock
          invertTextColor
          offsetRight
          type={5}
          className="parallax-block-4"
          backgroundColor="#F1F4F8"
          images={[elasticAiComponents1, elasticAiComponents2, elasticAiComponents3]}
          texts={[
            "AI components",
            "Leading the AI Components project, aimed at ensuring visual and behavioral consistency across the Kibana UI whenever a component surfaces or reinforces an AI capability.<br/><br/>This involved creating a set of new product-level components that wrap existing EUI components, applying consistent gradients, content patterns, and visual resources — so that AI-powered moments feel unified and recognizable across the product, regardless of where they appear.",
          ]}
        />
       
       
      </div>
      <ProjectFooter
        {...props}
        backgroundColor="#0F192B"
        backgroundImage={newRelicCoverBackground}
        title="New Relic"
        url="newrelic"
      />
    </>
  );
}
