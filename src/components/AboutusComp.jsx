import React from 'react'
import BMW from "../assets/BMW.jpg"
import V1 from "../assets/V1.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import V2 from "../assets/V2.png"
const AboutusComp = () => {

     useGSAP(() => {
            let tl = gsap.timeline();
            gsap.from(".bmw", {
                opacity: 0,
                duration: 1.99,
                x: -400,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".bmw",
                    start: "top 50%",              // 👈 must be here
                    toggleActions: "play reverse play reverse",
                    // markers: true,
                }
            })
        })

           useGSAP(() => {

        gsap.from(".content", {
            opacity: 0,
            duration: 1.99,
            x: 400,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".bmw",
                start: "top 50%",              // 👈 must be here
                toggleActions: "play reverse play reverse",
                // markers: true,
            }
        })


    })

  return (
                <article className='md:h-[90vh] h-[110vh]   border bg-black flex md:flex-row flex-col cont '>
                    <section className='md:h-full h-[40%] md:w-[50%] w-full border flex items-center justify-center '>
                        <img src={BMW} alt="" className=' h-[90%] w-[80%] border bmw ' />
                    </section>
                    <section className='md:h-full h-[60%] md:w-[50%] w-full  flex flex-col md:p-20 p-10 md:gap-10 gap-5 '>
                        <h1 className='text-white md:text-5xl text-3xl   content'>YOUR TRUSTED PARTNER <br /> IN RELIABLE CAR RENTAL</h1>
                        <p className='text-white content opacity-40 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, minima. Voluptatum, <br /> ducimus! Molestiae, doloribus accusantium.</p>
                        <div className='flex flex-col gap-5 content' >
                            <div className='flex gap-8'>
                                <img src={V2} alt="" className='md:h-20 h-12' />
                                <span className='flex flex-col text-white'>
                                    <h3 className='md:text-4xl text-2xl'>Brake Check & Services</h3>
                                    <p className='md:text-[14px] text-[11px] opacity-50 font-serif'>Gallery simply dummy text lorem ipsum is of the   is a type of </p>
                                </span>
                            </div>
                            <div className='flex gap-8'>
                                <img src={V1} alt="" className='md:h-20 h-12' />
                                <span className='flex flex-col text-white'>
                                    <h3 className='md:text-4xl text-2xl'>Online Appointment</h3>
                                    <p className='md:text-[14px] text-[11px] font-serif'>Gallery simply dummy text lorem ipsum is of the   is a type of </p>
                                </span>
                            </div>
                        </div>
                    </section>
                </article>
  )
}

export default AboutusComp