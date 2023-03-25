import { useEffect} from "react";
import Head from "next/head";
// Animations
import {parallaxBlockImages,revealWhenScroll} from "../../components/utils/animation";
// Project building blocks
import ProjectCover from "../../components/projects/projectCover";
import ProjectBlock from "../../components/projects/projectBlock";
import ProjectFooter from "../../components/projects/projectFooter";
// Images import
import MuchosolCoverHero from "../../public/assets/muchosol-cover-hero.png";
import MuchosolCoverBackground from "../../public/assets/muchosol-cover-background.jpg";
import MuchosolHomepage from "../../public/assets/muchosol-homepage.png";
import MuchosolWeb1 from "../../public/assets/muchosol-web-1.png";
import MuchosolWeb2 from "../../public/assets/muchosol-web-2.png";
import MuchosolWeb3 from "../../public/assets/muchosol-web-3.png";
import MuchosolIsometric1 from "../../public/assets/muchosol-isometric-1.png";
import MuchosolIsometric2 from "../../public/assets/muchosol-isometric-2.png";
import MuchosolIsometric3 from "../../public/assets/muchosol-isometric-3.png";
import MuchosolIsometric4 from "../../public/assets/muchosol-isometric-4.png";
import newrelicCoverBackground from "../../public/assets/newrelic-cover-background.jpg";

export default function Muchosol(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    animateUI();
    return () => {};
  }, []);

  const animateUI = () => {
    parallaxBlockImages(".parallax-block-1");
    parallaxBlockImages(".parallax-block-2");
    revealWhenScroll();
  };

  return (
    <>
      <Head>
        <link rel="preload" href="/assets/muchosol-cover-hero.png" as="image"/>
        <link rel="preload" href="/assets/muchosol-cover-background.jpg" as="image"/>
        <link rel="preload" href="/assets/muchosol-homepage.png" as="image"/>
        <link rel="preload" href="/assets/muchosol-web-1.png" as="image"/>
        <link rel="preload" href="/assets/muchosol-web-2.png" as="image"/>
        <link rel="preload" href="/assets/muchosol-web-3.png" as="image"/>
        <link rel="preload" href="/assets/muchosol-isometric-1.png" as="image"/>
        <link rel="preload" href="/assets/muchosol-isometric-2.png" as="image"/>
        <link rel="preload" href="/assets/muchosol-isometric-3.png" as="image"/>
        <link rel="preload" href="/assets/muchosol-isometric-4.png" as="image"/>
        <link rel="preload" href="/assets/newrelic-cover-background.jpg" as="image"/>
      </Head>
      <div className={`mb-48`}>
        <ProjectCover
          title="Product"
          subtitle="Muchosol"
          role="Principal Product Designer"
          client="Avantio"
          heroImage={MuchosolCoverHero}
          backgroundImage={MuchosolCoverBackground}
          url="www.muchosol.es"
          smallHeroImage
        />
        <ProjectBlock
          type={1}
          invertTextColor
          backgroundColor="#F8F8F8"
          images={[MuchosolHomepage]}
          texts={[
            "UX Audit & UI Design",
            "Muchosol is a Company leading in rental of apartments, villas and holiday homes and specialized in sun and beach destinations. In a new phase of expansion the interface was redesigned, improving the user experience and conversion of contracted services.",
            "This platform has many service facilities, providers, destinations and information displayed in a user friendly way guiding the user easily to use any of the services available.",
          ]}
        />
        <ProjectBlock
          className="parallax-block-1"
          bigHeight
          type={6}
          backgroundColor="#ffffff"
          images={[MuchosolWeb1, MuchosolWeb2, MuchosolWeb3]}
        />
       
        <ProjectBlock
          invertTextColor
          offsetLeft
          type={5}
          className="parallax-block-2"
          backgroundColor="#ACC4D5"
          images={[
            MuchosolIsometric1,
            MuchosolIsometric2,
            MuchosolIsometric3,
            MuchosolIsometric4,
          ]}
          texts={[
            "Centralized Web App platform",
            "This platform must be accessible from anywhere and at any time including holiday areas and requires a large study of adaptation to Responsive Design.",
          ]}
        />
      </div>
      <ProjectFooter
        {...props}
        backgroundColor="#22222E"
        backgroundImage={newrelicCoverBackground}
        title="New Relic"
        url="newrelic"
      />
    </>
  );
}
