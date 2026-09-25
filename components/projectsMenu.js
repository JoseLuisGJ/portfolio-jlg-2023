import Image from 'next/image';
import Link from 'next/link'
import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { browserName } from 'react-device-detect';
import { getVisibleProjects } from '../data/projects';
import { usePrivateAccess } from './privateAccess';


const ProjectsMenu = (props,ref) => {

    const router = useRouter();
    const unlocked = usePrivateAccess();
    const visibleProjects = getVisibleProjects(unlocked);
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
                opacity: 0,
            }, {
                duration: 0.3,
                opacity: 1,
            });
            // Flicker effect on Chrome
            if(browserName !== "Chrome"){
                gsap.fromTo(menuItemHovered, {
                    scale: 1.2,
                    rotation: 0.01
                }, {
                    scale: 1,
                    rotation: 0.01,
                    duration: 5
                });
            }
           
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
        <div className='menuWrapper fixed flex justify-center align-middle top-0 left-0 w-screen h-screen z-20 gradient-background'>
            <div className='flex flex-col p-8 lg:p-0 justify-center text-center z-40'>
                <ul className='space-y-2 md:space-y-4 text-4xl md:text-6xl -translate-y-6'>
                    <li className='menuItem mb-6 md:mb-12'>
                        <Link className={`text-xl md:text-2xl no-underline hover:opacity-100 ${router.pathname === "/" ? "opacity-100 pointer-events-none" : "opacity-70"}`} href="/">Home</Link>
                    </li>
                    {visibleProjects.map((project) => (
                        <li className='menuItem' key={project.slug}>
                            <Link onMouseEnter={() => showBackground(`.project-bg-${project.slug}`)} onMouseLeave={() => hiddeBackground(`.project-bg-${project.slug}`)} className={`no-underline hover:opacity-100 ${router.pathname === `/projects/${project.slug}` ? "opacity-100 pointer-events-none" : "opacity-70"}`} href={`/projects/${project.slug}`}>{project.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {visibleProjects.map((project, index) => (
                <Image key={project.slug} fill style={{ zIndex: index + 1 }} className={`project-bg-${project.slug} hide-back object-cover opacity-0`} src={project.backgroundImage} alt={`Project ${project.title} background image`} />
            ))}
        </div>
    );
}

export default forwardRef(ProjectsMenu);
