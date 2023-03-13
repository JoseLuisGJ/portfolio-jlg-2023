import Image from 'next/image';
import Link from 'next/link'
import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from 'react';

export default function ProjectsMenu(props) {

    const imageBackground0 = useRef(null);
    const imageBackground1 = useRef(null);
    const imageBackground2 = useRef(null);
    const imageBackground3 = useRef(null);

    const router = useRouter();
    const [isTransitioning, setIsTransitioning] = useState(false);
   
    let menuItemActive = null;
    
    useEffect(() => {

        const transitionAnimationStart = async () => {
            console.log('transitionAnimationStart');
            setIsTransitioning(true);
            gsap.to(".menuItem", {
                y: 20,
                opacity: 0,
                duration: 0.3,
                ease: "Expo.easeInOut",
                stagger: 0.1,
            });
            gsap.killTweensOf(menuItemActive)
            gsap.to(menuItemActive, {
                scale: 1,
                opacity: 1,
                duration: 0.3
            });
        };
        const transitionAnimationEnd = () => {
            console.log('transitionAnimationEnd');
            gsap.to('.menuWrapper', {
                opacity: 0,
                duration: 0.4,
                onComplete: () => {
                    props.setMenuOpened(false);
                }
            });
            setIsTransitioning(false);
        };

        router.events.on("routeChangeStart", transitionAnimationStart);
        router.events.on("routeChangeComplete", transitionAnimationEnd);
        router.events.on("routeChangeError", transitionAnimationEnd);

        return () => {
            router.events.off("routeChangeStart", transitionAnimationStart);
            router.events.off("routeChangeComplete", transitionAnimationEnd);
            router.events.off("routeChangeError", transitionAnimationEnd);
        };
    }, [router]);


    useEffect(() => {
        mountAnimatedUI();
        return () => {
        
        }
    }, []);

    const mountAnimatedUI = () => {
        gsap.from(".menuWrapper", {
            opacity: 0,
            duration: 0.3
        });
        gsap.from(".menuItem", {
            y: 50,
            opacity: 0,
            duration: 0.3,
            stagger: 0.1 // 0.1 seconds between when each ".box" element starts animating
        });
    }

    const showBackground = (elem) => {
       
        menuItemActive = elem;
        if (!isTransitioning) {
            gsap.fromTo(menuItemActive, {
                opacity: 0
            }, {
                duration: 0.3,
                opacity: 1,
            });
            gsap.fromTo(menuItemActive, {
                scale: 1.2
            }, {
                scale: 1,
                duration: 5
            });
        }

    }
    const hiddeBackground = (elem) => {
        if (!isTransitioning) {
            gsap.to(elem, {
                opacity: 0,
                duration: 0.5
            });
        }
    }

    return (
        <div className='menuWrapper fixed flex justify-center align-middle top-0 left-0 w-screen h-screen bg-gradient-to-tr from-yellow-700 via-yellow-600 to-yellow-300 z-10'>
            <div className='flex flex-col p-8 lg:p-0 justify-center text-center z-[10]'>
                <ul className='space-y-4 text-6xl'>
                    <li className='menuItem'>
                        <Link onMouseEnter={() => showBackground('.imageBackground1')} onMouseLeave={() => hiddeBackground('.imageBackground1')} className='no-underline opacity-80 hover:opacity-100' href="/projects/qatium">Qatium</Link>
                    </li>
                    <li className='menuItem'>
                        <Link onMouseEnter={() => showBackground('.imageBackground2')} onMouseLeave={() => hiddeBackground('.imageBackground2')} className='no-underline opacity-80 hover:opacity-100' href="/projects/goaigua">GoAigua</Link>
                    </li>
                    <li className='menuItem'>
                        <Link onMouseEnter={() => showBackground('.imageBackground3')} onMouseLeave={() => hiddeBackground('.imageBackground3')} className='no-underline opacity-80 hover:opacity-100' href="/projects/figmap">Figmap</Link>
                    </li>
                </ul>
            </div>

            <Image fill className='imageBackground1 object-cover opacity-0 z-[1]' src={`/assets/qatium-cover-background.jpg`} alt='Project background image' />
            <Image fill className='imageBackground2 object-cover opacity-0 z-[2]' src={`/assets/idrica-cover-background.jpg`} alt='Project background image' />
            <Image fill className='imageBackground3 object-cover opacity-0 z-[3]' src={`/assets/figmap-cover-background.jpg`} alt='Project background image' />
        </div>
    );
}
