import { useEffect, useRef } from "react";

import Image from "next/image";
import Head from "next/head";
// Animations
import {revealWhenScroll,revealFromCenter} from "../../components/utils/animation";
// Project building blocks
import ProjectCover from "../../components/projects/projectCover";
import ProjectBlock from "../../components/projects/projectBlock";
import ProjectFooter from "../../components/projects/projectFooter";
// Images import
import figmapCoverHero from "../../public/assets/figmap-cover-hero.png";
import figmapCoverHero1 from "../../public/assets/figmap-cover-hero-1.png";
import figmapCoverHero2 from "../../public/assets/figmap-cover-hero-2.png";
import figmapCoverHero3 from "../../public/assets/figmap-cover-hero-3.png";

import figmapCoverBackground from "../../public/assets/figmap-cover-background.jpg";
import figmapLogosComp from "../../public/assets/figmap-logos-comp.png";
import figmapCommunityList from "../../public/assets/figmap-community-list.png";
import figmapIconFigma from "../../public/assets/figmap-icon-figma.png";
import figmapIconLike from "../../public/assets/figmap-icon-like.png";
import figmapIconInstalls from "../../public/assets/figmap-icon-installs.png";
import figmapIconMau from "../../public/assets/figmap-icon-mau.png";
import globalOmniumCoverBackground from "../../public/assets/global-omnium-cover-background.jpg";

export default function Figmap(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    animateUI();
    return () => {};
  }, []);

  const animateUI = () => {
    revealFromCenter(".reveal-hero-1");
    revealWhenScroll();
  };

  return (
    <>
      <Head>
      <title>José Luis González - Portfolio - Figmap</title>
        <meta name="description" content="Side project making the Figmap plugin for Figmap"/>
        <link rel="preload" href="/assets/figmap-cover-hero-1.png" as="image" />
        <link rel="preload" href="/assets/figmap-cover-hero-2.png" as="image" />
        <link rel="preload" href="/assets/figmap-cover-hero-3.png" as="image" />
        <link rel="preload" href="/assets/figmap-cover-background.jpg" as="image" />
      </Head>
      <div className={`mb-48`}>
        <ProjectCover
          title="Product"
          subtitle="Figmap"
          role="UX Designer/Engineer"
          client="Side project"
          heroImage={figmapCoverHero}
          heroImages={[figmapCoverHero1, figmapCoverHero2, figmapCoverHero3]}
          className="reveal-hero-1"
          backgroundImage={figmapCoverBackground}
          url="bit.ly/3ZgsYgJ"
        />
        <ProjectBlock
          type={1}
          invertTextColor
          backgroundColor="#DFE4EB"
          texts={[
            "The product",
            "Made as a side project, Figmap is a Figma plugin which aims to solve the user problem when designers need to deal with maps and markers visualizations within Figma.",
            "There are few similar options out there but this one brings not only the capability of drawing custom visual maps but also manage map markers manually or in a bulk process fetching real data.",
          ]}
        />
        <ProjectBlock
          pushTop
          pushBottom
          invertTextColor
          reverse
          type={3}
          backgroundColor="#ffffff"
          images={[figmapLogosComp]}
          texts={[
            "Challenges sought",
            "As I like to do working on side projects, I was learning, practicing and playing around few still uncharted subjects such a how to use Figma API, Mapbox API, React Hooks and Typescript and measuring all the product analytics as I explain in this <a href='https://medium.com/design-bootcamp/how-to-get-analytics-and-observe-your-figma-plugin-behavior-7ca522fc8238' target='_blank'>article.</a>",
          ]}
        />
 
        {/* Custom Figmap block  */}
        <div
          className={`relative flex justify-center overflow-hidden`}
          style={{ backgroundColor: "#6A9BB1" }}
        >
          <div className="max-w-5xl px-8 xl:px-0 flex flex-col items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-12 md:py-28 max-w-4xl reveal">
              <div className="flex flex-col items-center text-white">
                <Image
                  className="pb-8"
                  src={figmapIconFigma}
                  alt="Figma icon"
                  width={54}
                  height={54}
                />
                <h4 className="text-2xl md:text-4xl font-bold">Works on</h4>
                <h6 className="text-lg md:text-2xl font-regular">Figma & FigJam</h6>
              </div>
              <div className="flex flex-col items-center text-white">
                <Image
                  className="pb-8"
                  src={figmapIconLike}
                  alt="Like icon"
                  width={54}
                  height={54}
                />
                <h4 className="text-2xl md:text-4xl font-bold">441</h4>
                <h6 className="text-lg md:text-2xl font-regular">Likes</h6>
              </div>
              <div className="flex flex-col items-center text-white">
                <Image
                  className="pb-8"
                  src={figmapIconInstalls}
                  alt="Installs icon"
                  width={54}
                  height={54}
                />
                <h4 className="text-2xl md:text-4xl font-bold">+110k</h4>
                <h6 className="text-lg md:text-2xl font-regular">Used by</h6>
              </div>
              <div className="flex flex-col items-center text-white">
                <Image
                  className="pb-8"
                  src={figmapIconMau}
                  alt="MAU icon"
                  width={54}
                  height={54}
                />
                <h4 className="text-2xl md:text-4xl font-bold">15k</h4>
                <h6 className="text-lg md:text-2xl font-regular">MAU</h6>
              </div>
            </div>

            <Image
              className="mx-auto relative reveal"
              alt="Image project"
              src={figmapCommunityList}
              width={1111}
              height={586}
            />
          </div>
        </div>
      </div>
      <ProjectFooter
        {...props}
        backgroundColor="#22222E"
        backgroundImage={globalOmniumCoverBackground}
        title="Global Omnium"
        url="globalomnium"
      />
    </>
  );
}
