import Image from 'next/image';
import Link from 'next/link'
import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';

const ProjectsMenu = (props,ref) => {

    const router = useRouter();
    const [isTransitioning, setIsTransitioning] = useState(false);
   
    let menuItemHovered = null;
   
   
    
    // When the route changes
    useEffect(() => {
       // When start unmounting animation
        const transitionAnimationStart = async () => {
            // console.log('transitionAnimationStart');
            setIsTransitioning(true);
            gsap.to(".menuItem", {
                y: 20,
                opacity: 0,
                duration: 0.3,
                ease: "Expo.easeInOut",
                stagger: 0.1,
            });
            gsap.killTweensOf(menuItemHovered)
            gsap.to(menuItemHovered, {
                scale: 1,
                opacity: 1,
                duration: 0.3
            });
        };
        // When finish unmounting animation
        const transitionAnimationEnd = () => {
            // console.log('transitionAnimationEnd');
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

    // called once menu is opened and mounted clicking on the menu icon
    const unmountMenuFromIcon = () => {
        gsap.to(".menuItem", {
            y: 20,
            opacity: 0,
            duration: 0.3,
            ease: "Expo.easeInOut",
            stagger: 0.1,
        });
        gsap.killTweensOf(menuItemHovered)
        gsap.to(menuItemHovered, {
            scale: 1,
            opacity: 1,
            duration: 0.3
        });
        gsap.to('.menuWrapper', {
            opacity: 0,
            duration: 0.4,
            delay: 0.3,
            onComplete: () => {
                props.setMenuOpened(false);
            }
        });
    }
    useImperativeHandle(ref, () => ({
        unmountMenuFromIcon,
      }));



    const mountAnimatedUI = () => {
        // Mount animations
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
       
        menuItemHovered = elem;
        if (!isTransitioning) {
            gsap.fromTo(menuItemHovered, {
                opacity: 0
            }, {
                duration: 0.3,
                opacity: 1,
            });
            gsap.fromTo(menuItemHovered, {
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
        <div className='menuWrapper fixed flex justify-center align-middle top-0 left-0 w-screen h-screen z-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#9B817C] to-[#473941]'>
            <div className='flex flex-col p-8 lg:p-0 justify-center text-center z-40'>
                <ul className='space-y-2 md:space-y-4 text-4xl md:text-6xl -translate-y-6'>
                    <li className='menuItem mb-6 md:mb-12'>
                        <Link className={`text-xl md:text-2xl no-underline hover:opacity-100 ${props.menuItemActive == 0 ? "opacity-100 pointer-events-none" : "opacity-70"}`} href="/">Home</Link>
                    </li>
                    <li className='menuItem'>
                        <Link onMouseEnter={() => showBackground('.imageBackground1')} onMouseLeave={() => hiddeBackground('.imageBackground1')} className={`no-underline hover:opacity-100 ${props.menuItemActive == 1 ? "opacity-100 pointer-events-none" : "opacity-70"}`} href="/projects/newrelic">New Relic</Link>
                    </li>
                    <li className='menuItem'>
                        <Link onMouseEnter={() => showBackground('.imageBackground2')} onMouseLeave={() => hiddeBackground('.imageBackground2')} className={`no-underline hover:opacity-100 ${props.menuItemActive == 2 ? "opacity-100 pointer-events-none" : "opacity-70"}`} href="/projects/qatium">Qatium</Link>
                    </li>
                    <li className='menuItem'>
                        <Link onMouseEnter={() => showBackground('.imageBackground3')} onMouseLeave={() => hiddeBackground('.imageBackground3')} className={`no-underline hover:opacity-100 ${props.menuItemActive == 3 ? "opacity-100 pointer-events-none" : "opacity-70"}`} href="/projects/goaigua">GoAigua</Link>
                    </li>
                    <li className='menuItem'>
                        <Link onMouseEnter={() => showBackground('.imageBackground4')} onMouseLeave={() => hiddeBackground('.imageBackground4')} className={`no-underline hover:opacity-100 ${props.menuItemActive == 4 ? "opacity-100 pointer-events-none" : "opacity-70"}`} href="/projects/figmap">Figmap</Link>
                    </li>
                    <li className='menuItem'>
                        <Link onMouseEnter={() => showBackground('.imageBackground5')} onMouseLeave={() => hiddeBackground('.imageBackground5')} className={`no-underline hover:opacity-100 ${props.menuItemActive == 5 ? "opacity-100 pointer-events-none" : "opacity-70"}`} href="/projects/globalomnium">Global Omnium</Link>
                    </li>
                    <li className='menuItem'>
                        <Link onMouseEnter={() => showBackground('.imageBackground6')} onMouseLeave={() => hiddeBackground('.imageBackground6')} className={`no-underline hover:opacity-100 ${props.menuItemActive == 6 ? "opacity-100 pointer-events-none" : "opacity-70"}`} href="/projects/muchosol">Muchosol</Link>
                    </li>
                    <li className='menuItem'>
                        <Link onMouseEnter={() => showBackground('.imageBackground7')} onMouseLeave={() => hiddeBackground('.imageBackground7')} className={`no-underline hover:opacity-100 ${props.menuItemActive == 7 ? "opacity-100 pointer-events-none" : "opacity-70"}`} href="/projects/energysystem">Energy System</Link>
                    </li>
                </ul>
            </div>

            <Image fill className='imageBackground1 object-cover opacity-0 z-[1]' src={`/assets/newrelic-cover-background.jpg`} alt='Project background image' />
            <Image fill className='imageBackground2 object-cover opacity-0 z-[2]' src={`/assets/qatium-cover-background.jpg`} alt='Project background image' />
            <Image fill className='imageBackground3 object-cover opacity-0 z-[3]' src={`/assets/goaigua-cover-background.jpg`} alt='Project background image' />
            <Image fill className='imageBackground4 object-cover opacity-0 z-[4]' src={`/assets/figmap-cover-background.jpg`} alt='Project background image' />
            <Image fill className='imageBackground5 object-cover opacity-0 z-[5]' src={`/assets/global-omnium-cover-background.jpg`} alt='Project background image' />
            <Image fill className='imageBackground6 object-cover opacity-0 z-[6]' src={`/assets/muchosol-cover-background.jpg`} alt='Project background image' />
            <Image fill className='imageBackground7 object-cover opacity-0 z-[7]' src={`/assets/energy-system-cover-background.jpg`} alt='Project background image' />
        </div>
    );
}

export default forwardRef(ProjectsMenu);
