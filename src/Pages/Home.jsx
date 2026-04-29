import React from 'react'
import BUGATTI from "../assets/BUGATTI.mp4"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { IoIosArrowRoundForward } from "react-icons/io";
import P1 from "../assets/P1.png"
import P2 from "../assets/P2.png"
import P3 from "../assets/P3.png"
import P4 from "../assets/P4.png"
import C1 from "../assets/C1.jpg"
import C2 from "../assets/C2.jpg"
import C3 from "../assets/C3.jpg"
import BG1 from "../assets/BG1.jpg"
import BG2 from "../assets/BG2.jpg"
import BG3 from "../assets/BG3.jpg"
import BG4 from "../assets/BG4.jpg"
import Driver from "../assets/Driver.jpg"
import Arrow from "../assets/Arrow.png"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUs from './AboutUs'
import AboutusComp from '../components/AboutusComp'

gsap.registerPlugin(ScrollTrigger);
const Home = () => {

    useGSAP(() => {
        let tl = gsap.timeline();
        tl.from(".h1", {
            opacity: 0,
            x: 200,
            delay: 2,
            duration: 1
        })
        tl.from(".btn", {
            opacity: 0,
            x: 20,
            duration: 1
        })
    })

   




    return (
        <>
            <main className='h-[100vh]  border relative pt-15 overflow-hidden'>
                <video src={BUGATTI}
                    autoPlay
                    muted
                    className='h-full w-screen absolute top-0 left-0 right-0 object-cover'
                >

                </video>

                <section className='absolute w-full h-full bg-black/40 flex flex-col md:flex-row-reverse min-h-fit '>
                    <div className='md:h-full h-[70%] md:w-[70%] w-full flex  min-h-fit'>
                        <div className='sm:w-full w-screen h-full  flex flex-col items-center justify-center  gap-6 '>
                            <h1 className='text-white lg:text-8xl  md:text-6xl text-5xl h1'>NOW DRIVE YOUR <br /> <span className='text-yellow-400 '>DREAM</span> CAR</h1>
                            <button className="relative overflow-hidden px-6 py-2 h-12 w-44 border text-white group">

                                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                                    Learn More
                                </span>

                                <span className="absolute left-0 top-0 h-full w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>

                            </button>
                        </div>
                    </div>
                    <div className='md:h-[100vh] h-[30%] md:w-[30%]  w-full flex  max-md:justify-center items-end pb-30  min-w-fit border-white '>
                        <h1 className='text-white md:px-40 text-2xl max-md:text-c text-nowrap'>PREMIUM DETAILING OF <br /> EVERY CAR</h1>
                    </div>
                </section>
            </main>

            <AboutusComp/>

            <article className='h-[100vh] gap-8 w-full bg-white flex flex-col justify-center items-center min-h-fit'>
                <h1 className='font-serif'>Our Services</h1>
                <h3 className='text-4xl  font-bold text-center'>EXPLORE OUR WIDE RANGE <br /> OF RENTAL Services</h3>
                <div className='h-[30%] w-[80%] flex justify-between md:mt-20 mt-5 flex-wrap  min-h-fit gap-4'>
                    <div className='flex h-[50%] md:w-[18%] w-[40%] rounded-md shadow-md p-4 flex-col border gap-4 border-gray-400 hover:scale-110 duration-150 shrink-0'>
                        <img src={P1} alt="" className='h-12 w-12' />
                        <h2 className='font-serif font-semibold'>Car Rental With Driver</h2>
                        <p className='font-light text-[15px]'>Enhance your rental experience <br /> with additional options</p>
                    </div>
                    <div className='flex h-[50%] md:w-[18%] w-[40%] rounded-md shadow-md p-4 flex-col border gap-4 border-gray-400 shrink-0'>
                        <img src={P2} alt="" className='h-12 w-12' />
                        <h2 className='font-serif font-semibold'>Business Car Rental</h2>
                        <p className='font-light text-[15px]'>Enhance your rental experience <br /> with additional options</p>
                    </div>
                    <div className='flex h-[50%] md:w-[18%] w-[40%] rounded-md shadow-md p-4 flex-col border gap-4 border-gray-400 shrink-0'>
                        <img src={P3} alt="" className='h-12 w-12' />
                        <h2 className='font-serif font-semibold'>Airport Transfer</h2>
                        <p className='font-light text-[15px]'>Enhance your rental experience <br /> with additional options</p>
                    </div>
                    <div className='flex h-[50%] md:w-[18%] w-[40%] rounded-md shadow-md p-4 flex-col border gap-4 border-gray-400 shrink-0'>
                        <img src={P4} alt="" className='h-12 w-12' />
                        <h2 className='font-serif font-semibold'>Chauffeur Services</h2>
                        <p className='font-light text-[15px]'>Enhance your rental experience <br /> with additional options</p>
                    </div>
                </div>
                <p className='font-serif text-[18px]'>Discover our range of car rental services designed to meet all your <br /> travel needs.From a diverse fleet of vechiles to flexible rental plans.</p>
                <button className='bg-black px-6 text-white rounded-md shadow-md py-2'>View All Services</button>
            </article>
            <article className='h-[60vh] bg-white flex items-center p-2 justify-between gap-2 '>
                <div className='h-[90%] w-[23%]  rounded-lg bg-cover bg-center bg-no-repeat p-4' style={{ backgroundImage: `url(${BG1})` }}>
                    <h1 className='text-white text-2xl'>SPORTS CAR</h1>
                </div>
                <div className='h-[90%] w-[23%]  rounded-lg bg-cover bg-center bg-no-repeat p-4' style={{ backgroundImage: `url(${BG2})` }}>
                    <h1 className='text-white text-2xl'>CONVERTIBLE CAR</h1>
                </div>
                <div className='h-[90%] w-[23%]  rounded-lg bg-cover bg-center bg-no-repeat p-4' style={{ backgroundImage: `url(${BG3})` }}>
                    <h1 className='text-white text-2xl'>SEDAN CAR</h1>
                </div>
                <div className='h-[90%] w-[23%]  rounded-lg bg-cover bg-center bg-no-repeat  p-4' style={{ backgroundImage: `url(${BG4})` }}>
                    <h1 className='text-white text-2xl'>LUXURY CAR</h1>
                </div>
            </article>

            <article className='h-[10vh] w-full bg-yellow-400 flex items-center gap-5 overflow-hidden'>
                <div className='flex gap-4 slide'>
                    <div className='flex items-center gap-2 shrink-0 '>
                        <h1 className=' font-semibold text-2xl'>Premium Car Care</h1>
                        <img src={Arrow} alt="" className='h-11 arrow' />
                    </div>
                    <div className='flex items-center gap-2 shrink-0 '>
                        <h1 className=' font-semibold text-2xl '>Premium Car Care</h1>
                        <img src={Arrow} alt="" className='h-11 arrow' />
                    </div>
                    <div className='flex items-center gap-2 shrink-0 '>
                        <h1 className=' font-semibold text-2xl'>Premium Car Care</h1>
                        <img src={Arrow} alt="" className='h-11 arrow' />
                    </div>
                    <div className='flex items-center gap-2 shrink-0 '>
                        <h1 className=' font-semibold text-2xl'>Premium Car Care</h1>
                        <img src={Arrow} alt="" className='h-11 arrow' />
                    </div>
                    <div className='flex items-center gap-2 shrink-0 '>
                        <h1 className=' font-semibold text-2xl'>Premium Car Care</h1>
                        <img src={Arrow} alt="" className='h-11 arrow' />
                    </div>
                    <div className='flex items-center gap-2 shrink-0 '>
                        <h1 className=' font-semibold text-2xl'>Premium Car Care</h1>
                        <img src={Arrow} alt="" className='h-11 arrow' />
                    </div>
                    <div className='flex items-center gap-2 shrink-0 '>
                        <h1 className=' font-semibold text-2xl'>Premium Car Care</h1>
                        <img src={Arrow} alt="" className='h-11 arrow' />
                    </div>
                    <div className='flex items-center gap-2 shrink-0 '>
                        <h1 className=' font-semibold text-2xl'>Premium Car Care</h1>
                        <img src={Arrow} alt="" className='h-11 arrow' />
                    </div>
                </div>
            </article>

            <article className='h-[80vh]  bg-white flex pt-20'>
                <section className='h-full w-[50%]  flex flex-col px-30 py-20 gap-3'>
                    <p className='roboto font-bold'>How it Work</p>
                    <h2 className='roboto text-3xl font-bold'>STREAMLINED PROCESSED FOR A <br /> HASSLE-FREE EXPERIENCE</h2>
                    <p className='roboto text-gray-400 text-[13px]'>our Streamlined process ensures a seamless car rental <br />experience from start to finish.With easy online booking,flexible <br />pick-up and drop-off options.</p>
                    <div className='flex justify-between items-center w-[80%] border-b pb-2 text-2xl font-semibold mt-8'><p>1.BROWSE AND SELECT</p> <IoIosArrowRoundForward /></div>
                    <div className='flex justify-between items-center w-[80%] border-b pb-2 text-2xl font-semibold'><p>2.BOOK AND CONFIRM</p> <IoIosArrowRoundForward /></div>
                    <div className='flex justify-between items-center w-[80%] border-b pb-2 text-2xl font-semibold'><p>3.BOOK AND ENJOY</p> <IoIosArrowRoundForward /></div>
                </section>
                <section className='flex items-center justify-center w-[50%] h-full'>
                    <img src={Driver} alt="" className='h-[80%] rounded-full' />

                </section>
            </article>

            <article className='h-[80vh] bg-black flex flex-col'>
                <section className='h-[40%] text-white w-full flex items-center justify-evenly'>
                    <span className='flex flex-col gap-2'>
                        <p className='text-[15px]'>WELCOME TO DRIVEX</p>
                        <h2 className='text-3xl'>THE ULTIMATE DRIVING EXPERIENCE</h2>
                    </span>
                    <span className='flex flex-col gap-3'>
                        <p className='text-[15px] opacity-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestiae nemo unde aliquid  <br />libero at recusandae reiciendis deserunt dicta? Provident dolores nostrum <br /> excepturi consectetur amet aspernatur maiores quia quo laboriosam id. Reiciendis id quo eaque odio esse delectus natus suscipit.</p>
                        <button className='px-4 py-2 border w-40 border-white'>READ MORE</button>
                    </span>
                </section>
                <section className='h-[60%] w-full flex items-center gap-3 justify-center'>
                    <div className='overflow-hidden'> <img src={C1} alt="" className='h-80 hover:scale-150 overflow-hidden transition-all duration-300' /></div>
                    <div className='overflow-hidden'><img src={C2} alt="" className='h-80 hover:scale-150 overflow-hidden transition-all duration-300' /></div>
                    <div className='overflow-hidden'><img src={C3} alt="" className='h-80 hover:scale-150 overflow-hidden transition-all duration-300' /></div>
                </section>
            </article>


        </>
    )
}

export default Home