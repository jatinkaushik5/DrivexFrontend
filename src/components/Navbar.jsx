import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from 'react'




const Navbar = () => {
    useGSAP(()=>{
    let tl=gsap.timeline();

    tl.from(".head",{
        x:-40,
        duration:0.55
    })

    tl.from(".nav",{
        opacity:0,
        y:10,
        duration:0.33,
        stagger:0.33,
         clearProps: "all",

    })
})

  return (
    <>
    <header className='bg-black  w-full fixed z-10 top-0 left-0 right-0 opacity-85 flex justify-between items-center  px-12  h-15 '>
       <div className='flex  w-full gap-10 items-center'>
         <h1 className='text-white text-2xl head'> DRIVE <span className='text-yellow-400'>X.</span></h1>
        <nav className='flex text-white gap-7  text-[18px] max-md:hidden'>
            <p className='cursor-pointer hover:text-yellow-400 nav transition-all duration-300' >Home</p>
            <p className='cursor-pointer hover:text-yellow-400 nav transition-all duration-300'>About Us</p>
            <p className='cursor-pointer hover:text-yellow-400 nav transition-all duration-300'>Service</p>
            <p className='cursor-pointer hover:text-yellow-400 nav transition-all duration-300'>Cars</p>
            <p className='cursor-pointer hover:text-yellow-400 nav transition-all duration-300'>Contact</p>
        </nav>
       </div>
        <button className='text-white text-nowrap border px-7 py-2 max-md:hidden'>GET A QUOTE</button>
    </header>
    </>
  )
}

export default Navbar