import { useEffect, useRef } from "react";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectCover from "../../components/projects/projectCover";
import ProjectBlock from "../../components/projects/projectBlock";
import ProjectFooter from "../../components/projects/projectFooter";

export default function Figmap() {
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
      <div className={`mb-48`}>
        <ProjectCover
          title="Figma Plugin"
          subtitle="Figmap"
          role="UX Designer/Engineer"
          client="Side project"
          heroImage="figmap-cover-hero.png"
          backgroundImage="figmap-cover-background.jpg"
          url="www.figmap.com"
        />
          <ProjectBlock
          type={1}
          invertTextColor
          backgroundColor="#DFE4EB"
          texts={[
            "The product",
            "As a part of a side project, Figmap is a Figma plugin which aims to solve the user problem when designers need to deal with maps and markers visualisations within Figma.",
            "There are few similar options out there but this one brings not also the capability of drawing custom visual maps but also manage map markers manually or in a bulk process fetching real data.",
          ]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          invertTextColor
          reverse
          type={3}
          backgroundColor="#ffffff"
          images={["figmap-logos-comp.png"]}
          texts={[
            "Challenges sought",
            "As I like to do working on side projects, I was practicing and playing around on how to use Figma API, Mapbox API, React Hooks and Typescript and measuring all the product analytics as I explain in this article.",
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
          type={3}
          backgroundColor="#3C3B59"
          images={["qatium-illustration-2.png"]}
          texts={[
            "Title",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales at leo id finibus. Etiam ac ligula tellus. In faucibus a dolor sed tincidunt. Proin mattis nisi sit amet tortor molestie, a sodales nulla rhoncus. Ut maximus congue elit sit amet lacinia. Vestibulum ut purus vel ",
          ]}
        />
      </div>
      <ProjectFooter
        backgroundColor="#22222E"
        backgroundImage="qatium-cover-background.jpg"
        title="Qatium"
        url="qatium"
      />
    </>
  );
}
