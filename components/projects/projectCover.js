import styles from '../../styles/Projects.module.css';
import Link from 'next/link'
import gsap from "gsap";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'

export default function ProjectCover(props) {

   // state for the array of lines found after running Splitting
   const [lines, setLines] = useState([])
 

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const roleTitleRef = useRef(null);
  const roleRef = useRef(null);
  const clientTitleRef = useRef(null);
  const clientRef = useRef(null);
  const urlRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    animateUI();
    return () => {

    }

  }, []);

  // should fire anytime splitRef is changed (onload splitRef won't exist)
  useEffect(() => {
    splitTheWords()
  }, [titleRef])

  const splitTheWords = () => {
    // double checking we actually have a reference (and the value is not null)
    if (titleRef) {
      // run the SplittingJS magic here, using 'lines' as the splitting technique
      let split_res = Splitting({
        by: 'chars',  
      })
      // finding the first block of text and its lines - then assigning it to our state defined above
      setLines(split_res[0].words)
      console.log(`Split text into ${lines} lines`)
      console.log(split_res)
    }
  }

  const animateUI = () => {
    const duration = 0.5;
    const overlap = ">-0.4";
    const ease = "power2.out";
    var tl = gsap.timeline({defaults: {duration: duration, ease: ease}});
   
    tl.from(titleRef.current, {y: 50, opacity:0});
    tl.from(subtitleRef.current, {y: 50, opacity:0},overlap); 
    tl.from(roleTitleRef.current, {y: 50, opacity:0},overlap);
    tl.from(roleRef.current, {y: 50, opacity:0},overlap);
    tl.from(clientTitleRef.current, {y: 50, opacity:0},overlap);
    tl.from(clientRef.current, {y: 50, opacity:0},overlap);
    tl.from(urlRef.current, {y: 50, opacity:0},overlap);
    tl.from(imageRef.current, {y: 50, opacity:0, duration:0.6},">-0.6");

    gsap.from(".text-4xl .char", { 
      duration: 2, 
      delay: 0,
      opacity: 0,
      stagger: 0.02, 
      y: 20, 
      ease:"power2.out"
    });
  }

  return (
    <div className='relative flex justify-center'>
      <div className='relative flex flex-col-reverse md:flex-row h-screen p-8 lg:p-0 justify-center z-[2] max-w-6xl'>
        <div className='basis-2/6 flex flex-col justify-center'>
          <h1 ref={titleRef}  data-splitting='true' className='text-4xl font-bold'>{props.title}</h1>
          <h2 ref={subtitleRef} className='text-2xl font-light mb-9'>{props.subtitle}</h2>
          <h3 ref={roleTitleRef} className='font-bold text-lg'>Role</h3>
          <span ref={roleRef} className='text-lg font-light mb-3'>{props.role}</span>
          <h3 ref={clientTitleRef} className='font-bold text-lg'>Client</h3>
          <span ref={clientRef} className='text-lg font-light mb-9'>{props.client}</span>
          <a ref={urlRef} href={`http://${props.url}`} target='_blank'>{props.url}</a>
        </div>
        <div ref={imageRef} className='basis-4/6 flex flex-col justify-center'>
          <Image  className='' alt='Project hero image' src={`/assets/${props.heroImage}`} width={780} height={512} />
        </div>
      </div>
      <Image fill className='object-cover z-[1]' src={`/assets/${props.backgroundImage}`} alt='Project background image' />
    </div>
  );
}
