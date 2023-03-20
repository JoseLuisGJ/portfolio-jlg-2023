import Link from 'next/link'
import Image from 'next/image';


export default function ProjectFooter(props) {
  return (
    <Link className={`fixed bottom-0 w-full z-[-1] no-underline footer block overflow-hidden h-48`} href={`/projects/${props.url}`}>
      <div className='relative flex justify-center align-middle h-48 overflow-hidden'  style={{backgroundColor: props.backgroundColor}} >
        <div className='flex flex-col p-8 lg:p-0 justify-center z-[3] text-center pointer-events-none'>
          <h2 className='text-4xl mb-1'>{props.title}</h2>
          <p className='text-lg font-light'>Next project</p>
        </div>
        <div className='absolute pointer-events-none w-full h-12 bg-gradient-to-b from-neutral-900 opacity-75 z-[3]'></div>
        <Image fill className='object-cover opacity-0 hover:opacity-100 scale-125 hover:scale-100 transition-all ease-out duration-[1000ms] z-[1]' src={`/assets/${props.backgroundImage}`} alt='Project background image' />
      </div>
    </Link>
  );
}
