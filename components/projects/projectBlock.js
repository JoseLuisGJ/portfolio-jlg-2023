import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";

export default function ProjectBlock(props) {
  gsap.registerPlugin(ScrollTrigger);
 
  useEffect(() => {
    // animateUI();
    return () => {};
  }, []);



  const animateUI = () => {};
  return (
    <div
      className={`relative flex
      ${props.pushTop ? "pt-8 md:pt-28" : " "} 
      ${props.pushBottom ? "pb-20 md:pb-28" : " "}
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
              <div className={`max-w-5xl p-8 xl:p-8`}>
                <h3 className="text-lg reveal">{props.texts[0]}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5 reveal">
                  <p className="text-base font-extralight">{props.texts[1]}</p>
                  <p className="text-base font-extralight">{props.texts[2]}</p>
                </div>
                {props.images && (
                  <Image
                    className="mx-auto max-w-xl w-full relative z-10 top-24 -mt-16 reveal"
                    alt="Image project"
                    src={props.images[0]}
                  />
                )}
              </div>
            );
          case 2:
            // Image only
            return (
              <div className="max-w-5xl py-8 md:py-12 xl:py-10 w-full">
                <Image
                  className="mx-auto reveal"
                  alt="Image project"
                  src={props.images[0]}
                />
              </div>
            );
          case 3:
            // Title          // Title
            // Text + Image   // Image + Text
            return (
              <div className="max-w-5xl p-8 xl:p-0 lol ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5 reveal">
                  <div
                    className={`flex justify-center  flex-col ${
                      props.reverse ? "order-last" : ""
                    }`}
                  >
                    <h3 className="text-lg py-5">{props.texts[0]}</h3>
                    <p
                      className="text-base font-extralight"
                      dangerouslySetInnerHTML={{ __html: props.texts[1] }}
                    ></p>
                  </div>

                  <Image
                    className="relative mx-auto"
                    alt="Image project"
                    src={props.images[0]}
                  />
                </div>
              </div>
            );
          case 4:
            // Only title + text centered
            return (
              <div className="max-w-lg p-12 xl:p-14 reveal">
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
              <div className={`flex flex-col md:flex-row  ${props.offsetLeft ? "justify-start" : "justify-end"} w-full mb-48 h-auto `}>
            <div className={`${props.className} relative h-[65vh] md:h-screen w-full md:w-[48%]`}>
                {
                  props.images.map((image, index) => (
                    <Image
                      key={index}
                      data-speed={index * 0.4}
                      className={`absolute top-1/2 -translate-y-1/2 left-0 z-[7]  `}
                      alt={`Image project ${index + 1}`}
                      src={image}
                    />
                  ))
                }
              </div>
               
                <div className="relative md:absolute z-10 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 px-8 md:px-0 w-full max-w-5xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
                    {/* Empty column */}

                    <div
                      className={`reveal ${
                        props.offsetLeft ? "col-start-2" : ""
                      }`}
                    >
                      <h3 className="text-lg py-5">{props.texts[0]}</h3>
                      <p
                        className="text-base font-extralight"
                        dangerouslySetInnerHTML={{ __html: props.texts[1] }}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            );

          case 6:
            // Image only
            
            return (
              <div className={`${props.className} flex justify-center items-center w-full ${props.bigHeight ? "h-screen md:h-[240vh]" : "h-[65vh] md:h-screen"} `}>
                <div className="relative max-w-5xl w-full py-8 md:py-12 xl:py-10">
                {
                  props.images.map((image, index) => (
                    <Image
                      key={index}
                      data-speed={index * 0.4}
                      className={`absolute top-1/2 -translate-y-1/2 left-0 z-[${index+1}]`}
                      alt={`Image project ${index + 1}`}
                      src={image}
                    />
                  ))
                }
                </div>
              </div>
            );
            case 7:
              // Parallax image 2 ways
              const wrapperStyle = {
                perspective: '190px',
              };

              const contStyle ={
                transform: 'rotateX(3deg) rotateY(360deg)',
                transformStyle: 'preserve-3d'
              }
              return (
                <div className={`${props.className}  flex justify-center items-center w-full overflow-hidden ${props.bigHeight ? "h-screen md:h-[240vh]" : "h-[65vh] md:h-screen"} ` } style={wrapperStyle}>
                  <div className="relative w-full " style={contStyle}>
                  {
                    props.images.map((image, index) => (
                      <Image
                        key={index}
                        data-speed={index * 0.4}
                        className={`absolute top-1/2 -translate-y-1/2 left-0 z-[${index+1}]`}
                        alt={`Image project ${index + 1}`}
                        src={image}
                      />
                    ))
                  }
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
