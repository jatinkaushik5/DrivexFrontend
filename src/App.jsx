import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Footer from './components/Footer'
import AboutUs from './Pages/AboutUs'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { Route, Routes } from 'react-router-dom'

const App = () => {
  
 
  return (
    <>
    <main className='w-full relative h-auto overflow-hidden'>
    <Navbar/>


    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/about'} element={<AboutUs/>}/>
    </Routes>
    <Footer/>
{/* 
    SmallNav */}
    {/* <header className='h-screen w-full bg-black fixed top-0 left-0 z-50 flex flex-col items-center justify-between' >
       <h1 className='text-white main text-2xl '> DRIVE <span className='text-yellow-400'>X.</span></h1>
         <nav className='flex text-white gap-7  text-[18px] flex-col '>
            <p className='cursor-pointer hover:text-yellow-400 snav transition-all duration-300' >Home</p>
            <p className='cursor-pointer hover:text-yellow-400 snav transition-all duration-300'>About Us</p>
            <p className='cursor-pointer hover:text-yellow-400 snav transition-all duration-300'>Service</p>
            <p className='cursor-pointer hover:text-yellow-400 snav transition-all duration-300'>Cars</p>
            <p className='cursor-pointer hover:text-yellow-400 snav transition-all duration-300'>Contact</p>
        </nav>

          <button className='text-white text-nowrap border px-7 py-2 '>GET A QUOTE</button>
    </header> */}
    </main>
    </>
  )
}

export default App