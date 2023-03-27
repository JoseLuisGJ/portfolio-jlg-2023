import { useEffect, useRef } from "react";

import Head from "next/head";
// Animations
import {
  parallaxBlockImages,
  parallaxTwoDirections,
  revealWhenScroll,
} from "../../components/utils/animation";
// Project building blocks
import ProjectCover from "../../components/projects/projectCover";
import ProjectBlock from "../../components/projects/projectBlock";
import ProjectFooter from "../../components/projects/projectFooter";
// Images import
import globalOmniumCoverHero from "../../public/assets/global-omnium-cover-hero.png";
import globalOmniumCoverBackground from "../../public/assets/global-omnium-cover-background.jpg";
import globalOmniumHomepage from "../../public/assets/global-omnium-homepage.png";
import globalOmniumWeb1 from "../../public/assets/global-omnium-web-1.png";
import globalOmniumWeb2 from "../../public/assets/global-omnium-web-2.png";
import globalOmniumWeb3 from "../../public/assets/global-omnium-web-3.png";
import globalOmniumIllustration1 from "../../public/assets/global-omnium-illustration-1.png";
import globalOmniumIllustration2 from "../../public/assets/global-omnium-illustration-2.png";
import globalOmniumIllustration3 from "../../public/assets/global-omnium-illustration-3.png";
import globalOmniumAppIso1 from "../../public/assets/global-omnium-app-iso-1.png";
import globalOmniumAppIso2 from "../../public/assets/global-omnium-app-iso-2.png";
import globalOmniumAppIso3 from "../../public/assets/global-omnium-app-iso-3.png";
import globalOmniumLauncher1 from "../../public/assets/global-omnium-launcher-1.png";
import globalOmniumLauncher2 from "../../public/assets/global-omnium-launcher-2.png";
import globalOmniumLauncher3 from "../../public/assets/global-omnium-launcher-3.png";
import globalOmniumLauncher4 from "../../public/assets/global-omnium-launcher-4.png";
import globalOmniumExpo from "../../public/assets/global-omnium-expo.png";
import globalOmniumApp1 from "../../public/assets/global-omnium-app-1.png";
import globalOmniumApp2 from "../../public/assets/global-omnium-app-2.png";
import muchosolCoverBackground from "../../public/assets/muchosol-cover-background.jpg";

export default function GlobalOmnium(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    animateUI();
    return () => {};
  }, []);

  const animateUI = () => {
    parallaxBlockImages(".parallax-block-1");
    parallaxBlockImages(".parallax-block-2");
    parallaxBlockImages(".parallax-block-3");
    parallaxBlockImages(".parallax-block-4");
    parallaxTwoDirections(".parallax-block-5");
    revealWhenScroll();
  };

  return (
    <>
      <Head>
      <title>José Luis González - Portfolio - Global Omnium</title>
        <meta name="description" content="Projects and use cases working at Global Omnium as a Principal Product Designer and UX Engineer"/>
        <link rel="preload" href="/assets/global-omnium-cover-hero.png" as="image"/>
        <link rel="preload" href="/assets/global-omnium-cover-background.jpg" as="image"/>
      </Head>
      <div className={`mb-48`}>
        <ProjectCover
          title="Product"
          subtitle="Web, App & Interactive installations"
          role="Principal Product Designer<br/>UX Engineer"
          client="Global Omnium"
          heroImage={globalOmniumCoverHero}
          backgroundImage={globalOmniumCoverBackground}
          url="www.globalomnium.com"
          smallHeroImage
        />
        <ProjectBlock
          type={1}
          invertTextColor
          backgroundColor="#DFE4EB"
          images={[globalOmniumHomepage]}
          texts={[
            "Corporate Web & Virtual Office",
            "Aguas de Valencia group renewed in 2015 their corporate identity and at the same time all their digital channels as website, virtual office and launched the mobile APP management to facilitate clients with their connected services",
            "It is a unified platform where to access corporate information and client services focusing on user experience and usability using the latest technology.",
          ]}
        />
        <ProjectBlock
          className="parallax-block-1"
          bigHeight
          type={6}
          backgroundColor="#ffffff"
          images={[globalOmniumWeb1, globalOmniumWeb2, globalOmniumWeb3]}
        />
        <ProjectBlock
          className="parallax-block-2"
          type={6}
          backgroundColor="#B3D9E6"
          images={[
            globalOmniumIllustration1,
            globalOmniumIllustration2,
            globalOmniumIllustration3,
          ]}
        />
        <ProjectBlock
          invertTextColor
          offsetLeft
          type={5}
          className="parallax-block-3"
          backgroundColor="#ffffff"
          images={[
            globalOmniumAppIso1,
            globalOmniumAppIso2,
            globalOmniumAppIso3,
          ]}
          texts={[
            "Mobile APP",
            "APP is launched for the two main platforms IOS and Android. Users can make enquiries and manage their accounts comfortably adapting the user experience to mobile context.",
          ]}
        />
        <ProjectBlock
          className="parallax-block-5"
          type={7}
          backgroundColor="#EFEFEF"
          images={[
            globalOmniumApp1,
            globalOmniumApp2,
          ]}
        />
        <ProjectBlock
          pushBottom
          pushTop
          reverse
          type={3}
          backgroundColor="#02ABD2"
          images={[globalOmniumExpo]}
          texts={[
            "Interactive installations",
            "To commemorate the 125th anniversary of the Group an exhibition is available explaining the history and services provided by the group. Among other pieces there are several interactives where user can learn more about the evolution of the remote reading service in Valencia city among others.",
          ]}
        />
        <ProjectBlock
          invertTextColor
          offsetLeft
          type={5}
          className="parallax-block-4"
          backgroundColor="#ffffff"
          images={[
            globalOmniumLauncher1,
            globalOmniumLauncher2,
            globalOmniumLauncher3,
            globalOmniumLauncher4,
          ]}
          texts={[
            "Launcher",
            "Design and development of the internal group launcher, apps access, in-person monitoring, permissions management, employees management.",
          ]}
        />
      </div>
      <ProjectFooter
        {...props}
        backgroundColor="#22222E"
        backgroundImage={muchosolCoverBackground}
        title="Muchosol"
        url="muchosol"
      />
    </>
  );
}
