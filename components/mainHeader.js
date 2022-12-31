import styles from '../styles/MainHeader.module.css';
import Image from 'next/image';
import Link from 'next/link'


export default function MainHeader() {
  return (
    <nav className='fixed top-6 left-7 z-10 w-full' >
      <Link className='absolute left-0' href="/">
        <Image className='' src="/assets/logo-jl.svg" width={29} height={36} alt="Logo"/>
      </Link>
  
      <ul className="flex absolute right-10">
        <li className="mr-6">
          <Link className=' text-white line-through' href="/">Home</Link> 
        </li>
        <li className="mr-6">
          <Link className='text-white  hover:text-gray-200 ' href="/menu">Projects</Link>
        </li>
        <li className="mr-6">
          <Link className='text-white  hover:text-gray-200 ' href="/aboutme">About me</Link>
        </li>

      </ul>
    </nav> 
  );
}
