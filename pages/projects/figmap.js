import { useEffect, useRef } from "react";

import Image from "next/image";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectCover from "../../components/projects/projectCover";
import ProjectBlock from "../../components/projects/projectBlock";
import ProjectFooter from "../../components/projects/projectFooter";

export default function Figmap(props) {
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
        <link rel="preload" href="/assets/figmap-cover-hero.png" as="image" />
        <link rel="preload" href="/assets/figmap-cover-background.jpg" as="image" />
        <link rel="preload" href="/assets/figmap-logos-comp.png" as="image" />
        <link rel="preload" href="/assets/figmap-community-list.png" as="image" />
        <link rel="preload" href="/assets/figmap-icon-figma.png" as="image" />
        <link rel="preload" href="/assets/figmap-icon-like.png" as="image" />
        <link rel="preload" href="/assets/figmap-icon-installs.png" as="image" />
        <link rel="preload" href="/assets/figmap-icon-mau.png" as="image" />
      </Head>
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
            "As I like to do working on side projects, I was practicing and playing around on how to use Figma API, Mapbox API, React Hooks and Typescript and measuring all the product analytics as I explain in this <a href='https://medium.com/design-bootcamp/how-to-get-analytics-and-observe-your-figma-plugin-behavior-7ca522fc8238' target='_blank'>article.</a>",
          ]}
        />
        <ProjectBlock
          type={6}
          backgroundColor="#6A9BB1"
          texts={[
            "Challenges sought",
            "As I like to do working on side projects, I was practicing and playing around on how to use Figma API, Mapbox API, React Hooks and Typescript and measuring all the product analytics as I explain in this <a href='https://medium.com/design-bootcamp/how-to-get-analytics-and-observe-your-figma-plugin-behavior-7ca522fc8238' target='_blank'>article.</a>",
          ]}
          images={["figmap-community-list.png"]}
        />
        {/* Custom Figmap block  */}
        <div
          className={`relative flex justify-center`}
          style={{ backgroundColor: "#6A9BB1" }}
        >
          <div className="max-w-5xl px-8 xl:px-0 flex flex-col items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-12 md:py-28 max-w-4xl reveal">
              <div className="flex flex-col items-center text-white">
                <Image
                  className="pb-8"
                  src={`/assets/figmap-icon-figma.png`}
                  alt="Like icon"
                  width={54}
                  height={54}
                />
                <h4 className="text-2xl md:text-4xl font-bold">Works on</h4>
                <h6 className="text-lg md:text-2xl font-regular">Figma & FigJam</h6>
              </div>
              <div className="flex flex-col items-center text-white">
                <Image
                  className="pb-8"
                  src={`/assets/figmap-icon-like.png`}
                  alt="Like icon"
                  width={54}
                  height={54}
                />
                <h4 className="text-2xl md:text-4xl font-bold">222</h4>
                <h6 className="text-lg md:text-2xl font-regular">Likes</h6>
              </div>
              <div className="flex flex-col items-center text-white">
                <Image
                  className="pb-8"
                  src={`/assets/figmap-icon-installs.png`}
                  alt="Like icon"
                  width={54}
                  height={54}
                />
                <h4 className="text-2xl md:text-4xl font-bold">27k</h4>
                <h6 className="text-lg md:text-2xl font-regular">Used by</h6>
              </div>
              <div className="flex flex-col items-center text-white">
                <Image
                  className="pb-8"
                  src={`/assets/figmap-icon-mau.png`}
                  alt="Like icon"
                  width={54}
                  height={54}
                />
                <h4 className="text-2xl md:text-4xl font-bold">12k</h4>
                <h6 className="text-lg md:text-2xl font-regular">MAU</h6>
              </div>
            </div>

            <Image
              className="mx-auto relative   reveal"
              alt="Image project 1"
              src={`/assets/figmap-community-list.png`}
              width={1111}
              height={586}
            />
          </div>
        </div>
      </div>
      <ProjectFooter
        {...props}
        idProject="1"
        backgroundColor="#22222E"
        backgroundImage="qatium-cover-background.jpg"
        title="Qatium"
        url="qatium"
      />
    </>
  );
}
