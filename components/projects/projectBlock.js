import styles from "../../styles/Projects.module.css";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ProjectBlock(props) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    // animateUI();
    return () => {};
  }, []);

  const animateUI = () => {};
  return (
    <div
      className={`relative flex py-10
      ${props.pushTop ? "pt-28" : " "} 
      ${props.pushBottom ? "pb-28" : " "}
      ${props.offsetLeft ? "justify-start" : ""}
      ${props.offsetRight ? "justify-end" : ""}
      ${!props.offsetLeft && !props.offsetRight ? "justify-center " : " "}
      ${props.invertTextColor ? "text-gray-900 " : "text-white "}
      `}
      style={{ backgroundColor: props.backgroundColor }}
    >
      {(() => {
        switch (props.type) {
          // Title
          // Text + Text
          // Image
          case 1:
            return (
              <div
                className={`max-w-5xl p-8 xl:p-0`}
              >
                <h3 className="text-lg reveal">{props.texts[0]}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5 reveal">
                  <p className="text-base font-extralight">{props.texts[1]}</p>
                  <p className="text-base font-extralight">{props.texts[2]}</p>
                </div>
                {props.images && (
                  <Image
                    className="mx-auto relative z-10 top-24 -mt-16 reveal"
                    alt="Image project 1"
                    src={`/assets/${props.images[0]}`}
                    width={650}
                    height={501}
                  />
                )}
              </div>
            );
          case 2:
            // Image only
            return (
              <div className="p-4 md:p-8 xl:p-0 w-full">
                <Image
                  className="mx-auto reveal"
                  alt="Image project 1"
                  src={`/assets/${props.images[0]}`}
                  width={1200}
                  height={801}
                />
              </div>
            );
          case 3:
            // Title          // Title
            // Text + Image   // Image + Text
            return (
              <div className="max-w-5xl -mb-16 p-8 xl:p-0 lol ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5 reveal">
                  <div
                    className={`flex justify-center  flex-col ${
                      props.reverse ? "order-last" : ""
                    }`}
                  >
                    <h3 className="text-lg py-5">{props.texts[0]}</h3>
                    <p className="text-base font-extralight">
                      {props.texts[1]}
                    </p>
                  </div>

                  <Image
                    className="relative mx-auto"
                    alt="Image project 1"
                    src={`/assets/${props.images[0]}`}
                    width={600}
                    height={501}
                  />
                </div>
              </div>
            );
          case 4:
            // Only title + text centered
            return (
              <div className="max-w-lg p-8 xl:p-0 reveal">
                <h3 className="text-lg text-center py-5">{props.texts[0]}</h3>
                <p className="text-base text-center font-extralight">
                  {props.texts[1]}
                </p>
              </div>
            );
          case 5:
            // Title                           // Title
            // Text + Image (offseted right)   // Image (offseted left) + Text
            return (
              <div className="">
                <div className="relative h-auto md:h-screen w-auto">
                  <Image
                    className="relative h-auto md:h-full w-auto"
                    alt="Image project 1"
                    src={`/assets/${props.images[0]}`}
                    width={600}
                    height={501}
                  />
                </div>
                <div className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full max-w-5xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Empty column */}

                    <div
                      className={`reveal ${
                        props.offsetLeft ? "col-start-2" : ""
                      }`}
                    >
                      <h3 className="text-lg py-5">{props.texts[0]}</h3>
                      <p className="text-base font-extralight">
                        {props.texts[1]}
                      </p>
                    </div>
                  </div>
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
