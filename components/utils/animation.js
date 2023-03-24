import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import CSSPlugin from 'gsap/CSSPlugin';

const parallaxBlockImages = (target) => {
    let obj = document.querySelector(target);
    return gsap.from(`${target} [data-speed]`, {
      y: (i, el) => (1 * parseFloat(el.getAttribute("data-speed"))) * (obj.offsetHeight / 3),
      ease: "none",
      scrollTrigger: {
        trigger: obj,
        invalidateOnRefresh: true,
        scrub: 0,
        markers: false,
        start: "top bottom",
        end: "bottom center",
      }
    });
};

const parallaxTwoDirections = (target) => {
  let obj = document.querySelector(target);
  // CSSPlugin.defaultTransformPerspective = 1200;
  return gsap.to(`${target} img`, {
    y: (i, el) => (i==0 ? (obj.offsetWidth / 4): (obj.offsetWidth / 4)*-4),
    ease: "none",
    scrollTrigger: {
      trigger: obj,
      invalidateOnRefresh: true,
      scrub: 0,
      markers: false,
      start: "top bottom",
      end: "bottom top",
    }
  });
};

const revealWhenScroll = () => {
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
        toeggleActions: "play pause resume pause",
      },
    });
  });
};

export { parallaxBlockImages, parallaxTwoDirections, revealWhenScroll };
