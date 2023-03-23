// Nextjs
import Image from 'next/image';
import Head from 'next/head';
// ThreeJS hero animation
import GlitchBoy from '../components/home/glichBoy';
// Animation
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// React
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {

  const h1Ref = useRef(null);
  const h1SpanRef = useRef(null);
  const h2Ref = useRef(null);
  const arrowRef = useRef(null);
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
    gsap.set(backgroundRef.current, {
      filter: "brightness(1)",
    });

    gsap.set(glitchBoyRef.current, {
      filter: "blur(0px) brightness(1)",
      y: 0,
    });
    // gsap.set(arrowRef.current, {
    //   opacity: 0
    // });
    // Init animations

    gsap.fromTo(
      h1Ref.current,
      { duration: 0.8, opacity: 0, x: 90 },
      { opacity: 1, x: 0, delay: 0.7 }
    );
    gsap.fromTo(
      h2Ref.current,
      { duration: 0.8, opacity: 0, x: -90 },
      { opacity: 1, x: 0, delay: 1.2 }
    );

    // gsap.to(arrowRef.current, { duration: 1.5, opacity: 1, delay: 2 });
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
    // Parallel animations with H1
    // gsap.to(h1SpanRef.current, { 
    //   y: -210,
    //   scrollTrigger: {
    //     trigger: h1SpanRef.current, 
    //     start: "top center",
    //     end: "top top",
    //     scrub: true,
    //     markers: false
    //   }
    // });
    gsap.to(arrowRef.current, { 
      autoAlpha: 0,
      scrollTrigger: {
        trigger: ".about", 
        start: "top bottom",
        end: "+=300",
        scrub: true,
        toggleActions: "play none none reverse",
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
      <Head>
        <link rel="preload" href="/assets/qatium-cover-background.jpg" as="image" />
        <link rel="preload" href="/assets/goaigua-cover-background.jpg" as="image" />
        <link rel="preload" href="/assets/figmap-cover-background.jpg" as="image" />
      </Head>
      <div className="w-full overflow-x-hidden">
        <div className="relative h-screen w-full flex items-end justify-center">
          <h1 ref={h1Ref}  className='absolute top-8 md:top-[35%] left-6 md:left-[calc(40%-14rem)] z-[3] text-5xl md:text-5xl lg:text-6xl font-thin' >
            <span className='block' ref={h1SpanRef}> Hello! I&apos;m{" "}<br/>
              <span className='font-normal' id="text-shuffle">José Luis<br/>González </span></span>
          </h1>
          <div className=' absolute z-[5] h-screen w-screen'>
          </div>
          <div ref={glitchBoyRef} className={`fixed z-[2] h-screen w-screen`}>
            <GlitchBoy />
          </div>
          <h2 ref={h2Ref} className='absolute top-48 md:top-[70%] left-6 md:left-[calc(50%+6rem)] lg:left-[calc(50%+8rem)] text-2xl lg:text-3xl font-thin z-[2] md:z-[1]'>
            <span className='hidden md:block'>Product<br/>designer &<br/> Code lover</span>
            <span className='block md:hidden'>Product designer<br/>& Code lover</span>
          </h2>
          <a ref={arrowRef} href='#about' className='absolute z-[8] bottom-32 md:bottom-6 left-1/2 transform -translate-x-1/2' ><Image className='' src="/assets/down-arrow.svg" width={31} height={31} alt="Down arrow" /></a>
        </div>
        <div id="about" className='about absolute h-auto md:h-screen w-full flex z-[6] justify-center'>
          <div className='flex justify-center flex-col content-center center max-w-4xl p-8'>
            <h1 className='text-center text-4xl lg:text-6xl py-2 md:py-5 reveal'>About me</h1>
            <h3 className='text-center text-2xl lg:text-3xl font-extralight py-5 reveal'>I&apos;ve <b>20 years</b> of professional experience, based in <b>Valencia</b>. Nowadays I work as a <b>Senior UX Designer/Engineer</b> at <a href='http://www.elastic.co' target="_blank" rel="noreferrer">Elastic</a>, making delightful develover tools.</h3>
            <p className='text-center  text-lg lg:text-xl py-5 font-extralight reveal'>Formerly <a href='http://www.newrelic.com' target="_blank" rel="noreferrer">New Relic</a>, <a href='http://www.qatium.com' target="_blank" rel="noreferrer">Qatium</a>, <a href='http://www.idrica.com' target="_blank" rel="noreferrer">Idrica</a>, <a href='http://www.globalomnium.com' target="_blank" rel="noreferrer">Global Omnium</a>, <a href='http://www.nectarestudio.com' target="_blank" rel="noreferrer">Nectar Estudio</a> among others.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base lg:text-lg font-extralight py-5 reveal">
              <div>I cofounded and worked at <a href='http://www.nectarestudio.com' target="_blank" rel="noreferrer">Nectar Estudio</a> during 8 years. Since then I was collaborating with agencies and companies like <a href='https://www.serviceplan.es/' target="_blank" rel="noreferrer">Publips</a>, <a href='https://marketing4ecommerce.net/la-historica-agencia-shackleton-pasa-a-ser-accenture-song/' target="_blank" rel="noreferrer">Shackleton Digital</a>, <a href='http://www.avantio.com' target="_blank" rel="noreferrer">Avantio</a>, <a href='http://www.energysystem.com' target="_blank" rel="noreferrer">Energy System</a>. Obteining some awards and recognitions by <a href='https://www.awwwards.com/' target="_blank" rel="noreferrer">AWWWARDS</a>, <a href='https://www.thefwa.com/' target="_blank" rel="noreferrer">FWA</a>, <a href='https://premiosadcv.com/' target="_blank" rel="noreferrer">ADCV</a>, <a href='https://www.adg-fad.org/' target="_blank" rel="noreferrer">Laus</a> and <a href='https://festivallalluna.com/' target="_blank" rel="noreferrer">La Lluna</a>.</div>
              <div>Teaching was also and important part of my career. I led the <a href='https://www.esat.es/estudios/postgrado-especializado-en-diseno-y-desarrollo-web-front-end/' target="_blank" rel="noreferrer">ID3 post degree</a> in <a href='http://www.esat.es' target="_blank" rel="noreferrer">ESAT</a>. Where I also taught UX/UI and web frontend development in the New Media Arts 2.0 degree during 12 years. Sharing knowledgement with the future generations.</div>
            </div>
            <div>
              <ul className="flex justify-center py-5 ">
                <li className="mr-6">
                  <a href='mailto:hola@joseluis.design' target="_blank" rel="noreferrer">
                    <Image className='' src="/assets/email-icon.svg" width={29} height={21} alt="email" />
                  </a>
                </li>
                <li className="mr-6">
                  <a href='https://www.linkedin.com/in/joseluisgj/' target="_blank" rel="noreferrer">
                    <Image className='' src="/assets/linkdin-icon.svg" width={21} height={21} alt="Linkdin" />
                  </a>
                </li>
                <li className="mr-6">
                  <a href='https://twitter.com/jose_luis_gj' target="_blank" rel="noreferrer">
                    <Image className='' src="/assets/twitter-icon.svg" width={27} height={21} alt="Twitter" />
                  </a>
                </li>
                <li className="mr-6">
                  <a href='https://github.com/ergum' target="_blank" rel="noreferrer">
                    <Image className='' src="/assets/github-icon.svg" width={22} height={21} alt="Github" />
                  </a>
                </li>
                <li className="mr-6">
                  <a href='https://medium.com/@joseluisgj' target="_blank" rel="noreferrer">
                    <Image className='' src="/assets/medium-icon.svg" width={21} height={21} alt="Medium" />
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
