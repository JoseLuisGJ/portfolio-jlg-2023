
export default function MainHeader(props) {

  const toggleClickMenu = (e) => {
    e.preventDefault();
    if(props.menuOpened == false){
      props.setMenuOpened(true);
    }else{
      props.siblingFunction();
    }
  }
  return (
    <nav className='fixed top-6 left-7 z-30 w-full' >
      <a className='absolute right-16' href='#' onClick={toggleClickMenu }>
        <div className=" space-y-2 ">
          <span className={`block h-0.5 ${props.menuOpened ? 'w-0':'w-8'} bg-white transition-all ease-out duration-[300ms]`}></span>
          <span className={`block h-0.5 ${props.menuOpened ? 'w-8':'w-8'} bg-white`}></span>
          <span className={`block h-0.5 ${props.menuOpened ? 'w-0':'w-5'} bg-white transition-all ease-out duration-[300ms]`}></span>
        </div>
      </a>
    </nav>
  );
}
