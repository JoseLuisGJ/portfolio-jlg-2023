import gsap from "gsap";
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ProjectCover(props) {

  const wrapperRef = useRef(null)
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

  const animateUI = () => {
    const duration = 0.5;
    const overlap = ">-0.4";
    const ease = "power2.out";
    var tl = gsap.timeline({defaults: {duration: duration, ease: ease}});
    tl.to(wrapperRef.current, {opacity:1, delay:0, duration:0.1});
    tl.from(titleRef.current, {y: 50, opacity:0, delay:0.5});
    tl.from(subtitleRef.current, {y: 50, opacity:0},overlap); 
    tl.from(roleTitleRef.current, {y: 50, opacity:0},overlap);
    tl.from(roleRef.current, {y: 50, opacity:0},overlap);
    tl.from(clientTitleRef.current, {y: 50, opacity:0},overlap);
    tl.from(clientRef.current, {y: 50, opacity:0},overlap);
    tl.from(urlRef.current, {y: 50, opacity:0},overlap);
    tl.from(imageRef.current, {y: 50, opacity:0, duration:0.6},">-0.6");
  }

  return (
    <div className='relative flex justify-center'>
      <div ref={wrapperRef} className='relative opacity-0 flex flex-col-reverse md:flex-row h-screen p-8 xl:p-0 justify-center z-[2] max-w-5xl'>
        <div className='basis-2/6 flex flex-col justify-center'>
          <h1 ref={titleRef}  className='text-4xl font-bold'>{props.title}</h1>
          <h2 ref={subtitleRef} className='text-2xl font-light mb-9'>{props.subtitle}</h2>
          <h3 ref={roleTitleRef} className='font-bold text-lg'>Role</h3>
          <span ref={roleRef} className='text-lg font-light mb-3'>{props.role}</span>
          <h3 ref={clientTitleRef} className='font-bold text-lg'>Client</h3>
          <span ref={clientRef} className='text-lg font-light mb-9'>{props.client}</span>
          <a ref={urlRef} href={`http://${props.url}`} target='_blank' rel="noreferrer">{props.url}</a>
        </div>
        <div ref={imageRef} className='basis-4/6 flex flex-col justify-center'>
          <Image priority className='' alt='Project hero image' src={props.heroImage} />
        </div>
      </div>
      <Image priority fill className='object-cover z-[1]' src={props.backgroundImage} alt='Project background image' />
    </div>
  );
}