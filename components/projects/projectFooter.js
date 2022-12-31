import styles from '../../styles/MainHeader.module.css';
import Link from 'next/link'
import Image from 'next/image';


export default function ProjectFooter(props) {
  return (
    <Link className='no-underline' href={`/projects/${props.url}`}>
      <div className='relative flex justify-center align-middle h-48 shadow-inner overflow-hidden'  style={{backgroundColor: props.backgroundColor}} >
        <div className='flex flex-col p-8 lg:p-0 justify-center z-[2] text-center pointer-events-none'>
          <h2 className='text-4xl mb-1'>{props.title}</h2>
          <p className='text-lg font-light'>Next project</p>
        </div>
        <Image fill className='object-cover opacity-0 hover:opacity-100 scale-125 hover:scale-100 transition-all ease-out duration-[1000ms] z-[1]' src={`/assets/${props.backgroundImage}`} alt='Project background image' />
      </div>
    </Link>
  );
}
