import styles from '../styles/MainHeader.module.css';
import Image from 'next/image';
import Link from 'next/link'


export default function MainHeader(props) {

  const toggleClickMenu = () => {
    if(props.menuOpened == false){
      props.setMenuOpened(true);
    }else{
      
      props.siblingFunction();
      



    }
  }
  return (
    <nav className='fixed top-6 left-7 z-20 w-full' >
      {/* logo */}
      {/* <Link onClick={() => props.setMenuOpened(false)} className='absolute left-0' href="/">
        <Image className='' src="/assets/logo-jl.svg" width={29} height={36} alt="Logo" />
      </Link> */}
      {/* Hambuerguer menu */}
      <a className='absolute right-16' href='#' onClick={ toggleClickMenu }>
        <div className=" space-y-2 ">
          <span className={`block h-0.5 ${props.menuOpened ? 'w-0':'w-8'} bg-white transition-all ease-out duration-[300ms]`}></span>
          <span className={`block h-0.5 ${props.menuOpened ? 'w-8':'w-8'} bg-white`}></span>
          <span className={`block h-0.5 ${props.menuOpened ? 'w-0':'w-5'} bg-white transition-all ease-out duration-[300ms]`}></span>
        </div>
      </a>
    

    </nav>
  );
}
