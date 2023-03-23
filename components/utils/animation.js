import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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

export { parallaxBlockImages, revealWhenScroll };
