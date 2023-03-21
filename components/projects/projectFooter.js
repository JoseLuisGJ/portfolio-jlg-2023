import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ProjectFooter(props) {
  const animationDuration = 1000;
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);  
  const handleClick = (e) => {
    e.preventDefault();
    setIsTransitioning(true);
    props.setMenuItemActive(props.idProject);
    // get href from the clicked link element and push it to the router with a delayed call of 1 second
    setTimeout(() => {
      router.push(`/projects/${props.url}`);
    }, animationDuration);
  };

  return (
    <a onClick={handleClick}  className={`fixed bottom-0 w-full ${isTransitioning ? "z-[2]" : "z-[-1]"} no-underline transition-all ease-in-out duration-[${animationDuration}ms] block overflow-hidden ${isTransitioning ? "h-full" : "h-48"}`} href="#">
      <div className='relative flex justify-center align-middle h-full overflow-hidden'  style={{backgroundColor: props.backgroundColor}} >
        <div className={`flex flex-col p-8 lg:p-0 justify-center z-[3] text-center pointer-events-none transition-all duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
          <h2 className='text-4xl mb-1'>{props.title}</h2>
          <p className='text-lg font-light'>Next project</p>
        </div>
        <div className={`absolute pointer-events-none w-full h-12 bg-gradient-to-b from-neutral-900 z-[3] duration-500 ${isTransitioning ? "opacity-0" : "opacity-50"}`}></div>
        <Image fill className={`object-cover ${isTransitioning ? "opacity-100 scale-100" : "opacity-0 hover:opacity-100 scale-125 hover:scale-100"} transition-all ease-out duration-[1000ms] z-[1]`} src={props.backgroundImage} alt='Project background image' />
      </div>
    </a>
  );
}
