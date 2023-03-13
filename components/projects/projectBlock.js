import styles from '../../styles/Projects.module.css';
import Link from 'next/link'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
import { useEffect, useRef } from 'react';


export default function ProjectBlock(props) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    // animateUI();
    return () => {

    }


  }, []);

  const animateUI = () => {
   
  }
  return (
    <div className={`relative flex justify-center py-10  ${props.pushTop ? 'pt-28':''} ${props.pushBottom ? 'pb-28':''}`}  style={{backgroundColor: props.backgroundColor}}> 
      {(() => {
        switch (props.type) {
          case 1:
            return (
              <div className='max-w-6xl p-8 xl:p-0'>
                <h3 className='text-lg reveal'>{props.texts[0]}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-lg font-extralight py-5 reveal">
                  <p>{props.texts[1]}</p>
                  <p>{props.texts[2]}</p>
                </div>
                <Image className='mx-auto relative z-10 top-24 -mt-16 reveal' alt='Image project 1' src={`/assets/${props.images[0]}`} width={650} height={501} />
              </div>
            );
          case 2:
            return (
              <div className='p-8 xl:p-0 onlyImage'>
                 <Image className='mx-auto reveal' alt='Image project 1' src={`/assets/${props.images[0]}`} width={1200} height={801} />
              </div>
             
            );
          case 3:
            return (
              <div className='max-w-6xl -mb-16 p-8 xl:p-0 lol '>
                <h3 className='text-lg reveal'>{props.texts[0]}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-lg font-extralight py-5 reveal">
                  <p>{props.texts[1]}</p>
                  <Image className='relative mx-auto lg:-top-32 reveal' alt='Image project 1' src={`/assets/${props.images[0]}`} width={600} height={501} />
                </div>
              </div>
            );
          default:
            return null;
        }
      })()}


    </div>
  );
}
