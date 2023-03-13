
import Image from 'next/image';
import GlitchBoy from '../components/home/glichBoy';
// import { motion } from "framer-motion";
import gsap from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from '../styles/Home.module.css';
import { useEffect, useRef, useState } from 'react';

export default function Home() {



  const h1Ref = useRef(null);
  const h1SpanRef = useRef(null);
  const h2Ref = useRef(null);
  const glitchBoyRef = useRef(null);
  const backgroundRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    animateUI();
    return () => {

    }


  }, []);


 

  const animateUI = () => {
    // Sets
    gsap.set(h1SpanRef.current, {
      y: 0
    });
    gsap.set(backgroundRef.current, {
      filter: "brightness(1)",
    });
    gsap.set(h1Ref.current, {
      x: -200
    });
    gsap.set(glitchBoyRef.current, {
      filter: "blur(0px) brightness(1)",
      y: 0,
    });
    // Init animations
    gsap.from(h1Ref.current, { duration: 0.8, opacity: 0, x: -90, delay: 0.7 });
    gsap.from(h2Ref.current, { duration: 0.8, opacity: 0, x: 120, delay: 1.2 });
    // Scroll animations
    gsap.to(glitchBoyRef.current, {
      filter: "blur(10px) brightness(0.6)",
      scale: 1.1,
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "top top",
        scrub: true,
        markers: false
      }
    });
    gsap.to(backgroundRef.current, {
      filter: "brightness(0.6)",
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "top top",
        scrub: true,
        markers: false
      }
    });
    gsap.to(h1SpanRef.current, { 
      y: -210,
      scrollTrigger: {
        trigger: h1SpanRef.current, 
        start: "top center",
        end: "top top",
        scrub: true,
        markers: false
      }
    });


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
          toggleActions: 'play pause resume pause'
        }
      });
    })


  }

  return (
    <>
      <div className={styles.container}>
      

        <div className={styles.main}>
          <h1 ref={h1Ref}  className='text-6xl font-thin' >
            <span className='block' ref={h1SpanRef}> Hello! I'm{" "}
              <span className='font-normal' id="text-shuffle">José Luis González </span></span>
          </h1>
          <div className=' absolute z-[5] h-screen w-screen'>
          </div>
          <div ref={glitchBoyRef} className={`${styles.glitchBoyRef} fixed z-[2] h-screen w-screen`}>
            <GlitchBoy />
          </div>
          <h2 ref={h2Ref}  className='text-3xl font-thin'>Product designer & Code lover
          </h2>
        </div>
        <div className='about absolute h-screen w-screen flex z-[6] justify-center'>
          <div className='flex justify-center flex-col content-center center max-w-4xl'>
            <h1 className='text-center text-6xl py-5 reveal'>About me</h1>
            <h3 className='text-center text-3xl font-extralight py-5 reveal'>I've <b>19 years</b> of professional digital experience, based in <b>Valencia</b>. Nowadays I work as a <b>Senior Product Designer</b> at <a href='http://www.newrelic.com' target="_blank">New Relic</a>, making a better internet for the love of software! </h3>
            <p className='text-center text-xl py-5 font-extralight reveal'>Formerly <a href='http://www.qatium.com' target="_blank">Qatium</a>, <a href='http://www.idrica.com' target="_blank">Idrica</a>, <a href='http://www.globalomnium.com' target="_blank">Global Omnium</a>, <a href='http://www.nectarestudio.com' target="_blank">Nectar Estudio</a> among others.</p>
            <div className="grid grid-cols-2 gap-4 text-lg font-extralight py-5 reveal">
              <div>I cofounded and worked at <a href='http://www.nectarestudio.com' target="_blank">Nectar Estudio</a> during 8 years. Since then I was collaborating with agencies and companies like <a href='https://www.serviceplan.es/' target="_blank">Publips</a>, <a href='https://marketing4ecommerce.net/la-historica-agencia-shackleton-pasa-a-ser-accenture-song/' target="_blank">Shackleton Digital</a>, <a href='http://www.avantio.com' target="_blank">Avantio</a>, <a href='http://www.energysystem.com' target="_blank">Energy System</a>. Obteining some awards and recognitions by <a href='https://www.awwwards.com/' target="_blank">AWWWARDS</a>, <a href='https://www.thefwa.com/' target="_blank">FWA</a>, <a href='https://premiosadcv.com/' target="_blank">ADCV</a>, <a href='https://www.adg-fad.org/' target="_blank">Laus</a> and <a href='https://festivallalluna.com/' target="_blank">La Lluna</a>.</div>
              <div>Teaching was also and important part of my career. I led the <a href='https://www.esat.es/estudios/postgrado-especializado-en-diseno-y-desarrollo-web-front-end/' target="_blank">ID3 post degree</a> in <a href='http://www.esat.es' target="_blank">ESAT</a>. Where I also taught UX//UI and web frontend development in the New Media Arts 2.0 degree during 12 years. Sharing knowledgement with the future generations.</div>
            </div>
            <div>
              <ul className="flex justify-center py-5">
                <li className="mr-6">
                  <a href='mailto:hola@joseluis.design' target="_blank">
                    <Image className='' src="/assets/email-icon.svg" width={29} height={21} alt="email" />
                  </a>
                </li>
                <li className="mr-6">
                  <a href='https://www.linkedin.com/in/joseluisgj/' target="_blank">
                    <Image className='' src="/assets/linkdin-icon.svg" width={21} height={21} alt="Linkdin" />
                  </a>
                </li>
                <li className="mr-6">
                  <a href='https://twitter.com/jose_luis_gj' target="_blank">
                    <Image className='' src="/assets/twitter-icon.svg" width={21} height={21} alt="Twitter" />
                  </a>
                </li>
                <li className="mr-6">
                  <a href='https://github.com/ergum' target="_blank">
                    <Image className='' src="/assets/github-icon.svg" width={21} height={21} alt="Github" />
                  </a>
                </li>

              </ul>
            </div>
          </div>

        </div>

      </div>
      <div ref={backgroundRef} className={styles.background}></div>
    </>
  );
}
