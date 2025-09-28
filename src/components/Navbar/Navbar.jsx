import React from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { TbMenu2,TbMenu3 } from "react-icons/tb";
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);
   

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
     
    useEffect(()=>{
        
      const handleScroll = () =>{
            setIsScrolled(window.scrollY > 10);
      }
      window.addEventListener('scroll',handleScroll);
      return () => {
        window.removeEventListener('scroll',handleScroll);
      }
    },[])

  return (
    <header className={`bg-white fixed w-full top-0 right-0 left-0 z-50 ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.5)]': ''}`}>
      <nav className='max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center  '>
        {/* Logo */}
        <Link to="/" className='text-3xl font-bold'>Gr<span className='text-orange-500 uppercase'>o</span>cify</Link>

        {/* Destop menu */}
        <ul className='md:flex items-center gap-x-15  hidden'>
          <li>
            <Link to="/" className='font-semibold tracking-wider text-orange-600'>Home</Link>
          </li>
          <li>
            <Link to="/" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-600'>About Us</Link>
          </li>
          <li>
            <Link to="/" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-600'>Process</Link>
          </li>
          <li>
            <Link to="/" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-600'>Contact Us</Link>
          </li>
        </ul>


        {/* nav action */}

        <div className='flex items-center gap-6 '>


          {/* input field */}
          <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
            <input type="text" name="text" id="text" placeholder=' Search...' autoComplete='off' className='flex-1 h-[5vh]  px-3 focus:outline-none' />
            <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-2xl'>
              <IoMdSearch />
            </button>
          </div>

          <Link to="/" className='text-zinc-800 text-2xl'>
            <GoHeartFill />

          </Link>
          <a href="#" className='text-zinc-800 text-2xl'>
            <HiMiniShoppingBag />
          </a>
           
           {/* Hamburger */}
          <a href="#" className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
          { showMenu ? <TbMenu3 /> :<TbMenu2 /> }
          </a>
        </div>
       
       {/* mobile menue */}

       <ul className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-lg p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full tranfsform -translate-x-1/2  tansition-all duration-500 ${showMenu ? 'left-1/2' : ""} `}>
          <li>
            <a href="#" className='font-semibold tracking-wider text-orange-600'>Home</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-600'>About Us</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-600'>Process</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-600'>Contact Us</a>
          </li>
          <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
            <input type="text" name="text" id="text" placeholder=' Search...' autoComplete='off' className='flex-1 h-[5vh]  px-3 focus:outline-none' />
            <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-2xl'>
              <IoMdSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

