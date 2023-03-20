import { useEffect, useRef } from "react";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectCover from "../../components/projects/projectCover";
import ProjectBlock from "../../components/projects/projectBlock";
import ProjectFooter from "../../components/projects/projectFooter";

export default function Qatium() {
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
      <div className={`mb-48 `}>
        <ProjectCover
          title="Product Design"
          subtitle="Qatium"
          role="Head of design"
          client="Qatium"
          heroImage="qatium-cover-hero.png"
          backgroundImage="qatium-cover-background.jpg"
          url="www.qatium.com"
        />
        <ProjectBlock
          type={1}
          backgroundColor="#3C3B59"
          images={["qatium-illustration-1.png"]}
          texts={[
            "The product",
            "Qatium is disruptive water management system which breaks the traditional workflows and ways to work in the industry. It democratises the access to that service to any kind of city, govern or management company no matter the data, knowledge or budget they have.",
            "Its AI model, and ways to infer and ingest relevant data throughout different geospatial resources filling that gap and unleashing the potential of serve better water quality service to the citizens, save water leaks extra costs and be ready to solve the inevitable water scarcity.",
          ]}
        />
        <ProjectBlock
          pushTop
          type={3}
          backgroundColor="#22222E"
          images={["qatium-illustration-2.png"]}
          texts={[
            "Startup mindset",
            "From creating different probe of concepts and MVPs either making designs or coding experiences being the first and unique Product Designer at the company to consolidating and leading a small product design team compound by UX Researchers, Product Designers and Frontend UI. Driving branding and product market fit definition and service design using Design Thinking, UX Lean and Agile methodologies.",
          ]}
        />
        <ProjectBlock
          pushTop
          type={2}
          backgroundColor="#22222E"
          images={["qatium-mockup-1.png"]}
        />
        <ProjectBlock
          type={4}
          backgroundColor="#22222E"
          texts={[
            "In context data visualisation",
            "Advanced and very experiential data visualisation design using interactive maps, charts, GIS Data in maps and KPI's dashboards all in context.",
          ]}
        />
        <ProjectBlock
          type={2}
          backgroundColor="#22222E"
          images={["qatium-mockup-2.png"]}
        />
        <ProjectBlock
          pushBottom
          type={2}
          backgroundColor="#22222E"
          images={["qatium-mockup-3.png"]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          offsetLeft
          type={5}
          backgroundColor="#3C3B59"
          images={["qatium-ds-tokens.png"]}
          texts={[
            "Qube Design System ",
            "Definition and implementation of the Design System for design and dev teams managing documentation, design tokens, components, assets, layouts and typography. ",
          ]}
        />
        <ProjectBlock
          type={2}
          backgroundColor="#22222E"
          images={["qatium-ds-components.png"]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          reverse
          type={3}
          backgroundColor="#3C3B59"
          images={["qatium-roadmap.png"]}
          texts={[
            "Public roadmap",
            "Public and collaborative product roadmap based on users and partners requests and company suggestions where users can vote and be part of it.",
          ]}
        />
      </div>
      <ProjectFooter
        backgroundColor="#22222E"
        backgroundImage="goaigua-cover-background.jpg"
        title="GoAigua"
        url="goaigua"
      />
    </>
  );
}
