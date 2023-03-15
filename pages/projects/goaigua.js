import { useEffect, useRef } from 'react';

import Image from 'next/image';
import styles from '../../styles/Qatium.module.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectCover from '../../components/projects/projectCover';
import ProjectBlock from '../../components/projects/projectBlock';
import ProjectFooter from '../../components/projects/projectFooter';

export default function GoAigua() {

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    window.scrollTo(0, 0);
    animateUI();
    return () => {

    }

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
          toeggleActions: 'play pause resume pause'
        }
      });
    });

  }

  return (
    <>
      <div className={`${styles.main} `}>
        <ProjectCover
          title='Product Design'
          subtitle='Qatium'
          role='Head of design'
          client='Qatium'
          heroImage='qatium-cover-hero.png'
          backgroundImage='idrica-cover-background.jpg'
          url='www.qatium.com'
        />
        <ProjectBlock type={1} backgroundColor='#3C3B59' images={['qatium-illustration-1.png']} texts={['Title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales at leo id finibus. Etiam ac ligula tellus. In faucibus a dolor sed tincidunt. Proin mattis nisi sit amet tortor molestie, a sodales nulla rhoncus. Ut maximus congue elit sit amet lacinia. Vestibulum ut purus vel ', 'mauris euismod fermentum. Curabitur tristique urna vulputate, gravida est a, luctus eros. Proin aliquet tincidunt mattis. Integer vehicula nibh in purus sodales, vitae tincidunt ipsum condimentum.']} />
        <ProjectBlock pushTop type={2} backgroundColor='#22222E' images={['qatium-mockup-1.png']} />
        <ProjectBlock type={2} backgroundColor='#22222E' images={['qatium-mockup-2.png']} />
        <ProjectBlock pushBottom type={2} backgroundColor='#22222E' images={['qatium-mockup-3.png']} />
        <ProjectBlock type={3} backgroundColor='#3C3B59' images={['qatium-illustration-2.png']} texts={['Title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales at leo id finibus. Etiam ac ligula tellus. In faucibus a dolor sed tincidunt. Proin mattis nisi sit amet tortor molestie, a sodales nulla rhoncus. Ut maximus congue elit sit amet lacinia. Vestibulum ut purus vel ']} />
      </div>
      <ProjectFooter backgroundColor='#22222E' backgroundImage='idrica-cover-background.jpg' title='GoAigua' url='goaigua' />
    </>

  );
}
