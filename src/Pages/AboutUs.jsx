import React, { useState } from 'react'
import Interior from "../assets/Interior.jpg"
import { IoIosArrowForward } from "react-icons/io";
import AboutusComp from '../components/AboutusComp'
import Vision from "../assets/Vision.avif";
import Vision2 from "../assets/Vision2.jpg";
import Vision3 from "../assets/Vision3.jpg";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import Garrage from "../assets/Garrage.mp4"
import E1 from "../assets/E1.jpg"
import E2 from "../assets/E2.jpg"
import E3 from "../assets/E3.jpg"
import E4 from "../assets/E4.jpg"

const AboutUs = () => {
  const [active, setactive] = useState(1);

  useGSAP(()=>{
    let tl=gsap.timeline();
    tl.from(".bullet",{
      x:-500,
      stagger:0.33
    })

    gsap.from("img",{
      opacity:0
    })
  },[active])
  
  const onbj1={
    para:"Our Vision",
    heading:"Excellence in Rental Service and  Customer Satisfaction",
    points:["Simple and fast car booking","Customer-first service experience","Safe and reliable vehicles","Smart and modern mobility solutions"],
    img:Vision
  }
  const onbj2={
    para:"Our Mission",
    heading:"Make it specific, action-oriented, and a bit measurable if possible.",
    points:["Ensure high-quality, well-maintained vehicles for every journey","Provide transparent pricing with no hidden fees","Build long-term customer trust through reliability and consistency"],
    img:Vision2
  }
  const onbj3={
    para:"Our Approach",
    heading:"This is where you differentiate yourself from competitors. Be concrete.",
    points:["Customer support (24/7, fast response times)","Feedback-driven improvement","Easy online booking in just a few clicks"],
    img:Vision3
  }
  const[mainobject,setmainobject]=useState(onbj1);

  function Activation(inp){
    setactive(inp);
    if(inp===1){
      setmainobject(onbj1);
    }
    else if(inp===2){
      setmainobject(onbj2);
    }
    else{
      setmainobject(onbj3);
    }
  }
  return (
    <>
      <article className='h-[45vh] pt-15 bg-black bg-center bg-cover bg-no-repeat relative' style={{ backgroundImage: `url(${Interior})` }}>
        <div className='h-full w-full absolute top-0 left-0 bg-gray-800/50 flex items-end'>
          <div className='flex text-white justify-between w-full md:p-10 p-2 '>
            <h2 className='text-[clamp(0.4rem,3vw,1.5rem)] font-bold'>ABOUT US</h2>
            <p className='flex items-center'>Home<IoIosArrowForward />About</p>
          </div>
        </div>
      </article>

      <AboutusComp />
      <main className='h-[110vh] w-full flex flex-col'>
        <section className='h-[40%] w-full  flex justify-center flex-col items-center'>
          <p className='text-[12px] roboto font-semibold'>VISSION MISSION</p>
          <h2 className='text-[clamp(1rem,5vw,2.5rem)] text-center font-bold roboto'>DRIVING EXCELLENCE AND <br />INNOVATION IN CAR <br />RENTAL SERVICES</h2>
          <div className='h-[20%] flex items-center rounded-4xl bg-gray-300 md:w-[45%] w-[80%] justify-between px-2'>
            <button className={` rounded-4xl roboto cursor-pointer ${active == 1 ? "bg-black" : "bg-white"} h-[80%] text-[clamp(0.4rem,2.5vw,1rem)] w-[30%] ${active == 1 ? "text-white" : "text-black"}`} onClick={() => Activation(1)}>Our Vision</button>
            <button className={` rounded-4xl roboto cursor-pointer ${active == 2 ? "bg-black" : "bg-white"} h-[80%] text-[clamp(0.4rem,2.5vw,1rem)] w-[30%] ${active == 2 ? "text-white" : "text-black"}`} onClick={() => Activation(2)}>Our Mission</button>
            <button className={` rounded-4xl roboto cursor-pointer ${active == 3 ? "bg-black" : "bg-white"} h-[80%] text-[clamp(0.4rem,2.5vw,1rem)] w-[30%] ${active == 3 ? "text-white" : "text-black"}`} onClick={() => Activation(3)}>Our Approach </button>

          </div>
        </section>

        <section className='h-[60%] w-full flex'>
          <div className='h-full w-[50%]  flex flex-col gap-2  md:p-10 p-2'>
            <p className='roboto text-[14px] font-medium'>{mainobject.para}</p>
            <h3 className='text-[clamp(1rem,3vw,1.8rem)] roboto font-bold'>{mainobject.heading}</h3>
           <div className=' space-y-2 lg:px-30 lg:py-20 max-md:py-10 max-md:px-8 '>
            <ul className='space-y-2 list-disc'>
              {mainobject.points.map((o)=>(
                <li className='bullet text-[clamp(0.7rem,2vw,1.2rem)]'>{o}</li>
              ))}
            </ul>
           </div>
          </div>

          <div className='h-full w-[50%] flex md:items-center justify-center'>
            <img src={mainobject.img} alt="" className='lg:h-[90%] max-md:h-[70%] img'  />
          </div>
        </section>
      </main>
      <article className='h-[70vh] bg-slate-800 flex lg:flex-row max-md:flex-col-reverse min-h-fit'>
        <section className='lg:h-full max-lg:h-[60%] lg:w-[55%] max-md:w-full flex flex-col  md:p-20 gap-4 text-white min-h-fit max-md:p-5 '>
          <p className='text-[clamp(10px,2vw,15px)]'>Why Choose us </p>
          <h1 className='text-[clamp(1.3rem,3vw,2rem)]'>UNMATCHED QUALITY AND SERVICE FOR YOUR NEEDS</h1>
          <p className='text-[clamp(10px,2vw,15px)] opacity-85 roboto'>Car Dealeris the most enticing ,creative ,modern and multipurpose auto delaer Premium <br /> WordPress Theme.Suitable for   Any Car dealer websites,bussiness or corporate websits.</p>
        <div className='space-y-2.5 h-[60%]  mt-10'>
            <div className='flex h-[50%] gap-4  '>
            <img src={img1} alt="" className='h-20' />
            <span className='space-y-1.5'>
              <p>EXTENSIVE FLEET OPTIONS</p>
              <p className='text-[clamp(10px,2vw,15px)] opacity-55 roboto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente aut consequatur, praesentium itaque nesciunt doloremque.</p>
            </span>
          </div>
           <div className='flex h-[50%] gap-7 '>
            <img src={img2} alt="" className='h-15' />
            <span className='space-y-1.5'>
              <p>EXTENSIVE FLEET OPTIONS</p>
               <p className='text-[clamp(10px,2vw,15px)] opacity-55 roboto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente aut consequatur, praesentium itaque nesciunt doloremque.</p>
            </span>
          </div>
        </div>
        </section>
        <section className='lg:h-full max-md:h-[40%] lg:w-[45%] flex items-center justify-center max-md:pt-5 min-h-fit'>
          <video src={Garrage} autoPlay  loop muted></video>
        </section>
      </article>

      <article className='h-[90vh] bg-white flex flex-col items-center pt-10 border '>
        <h1 className='roboto text-[clamp(0.4rem,2vw,1rem)] font-medium'>Our Experienced Drivers</h1>
        <h2 className='text-[clamp(1rem,3vw,2rem)] text-center roboto font-bold'>ENSURING YOUR SAFETY <br />AND COMFORT ON EVERY <br />JOURNEY</h2>
        <div className='h-[30%] w-[80%]  grid grid-cols-4 gap-7 mt-4'>
          <div className='flex flex-col  col-span-1'>
            <img src={E1} alt="" className='h-96' />
            <span className='flex flex-col items-center'>
              <p className='roboto font-medium'>Mille James</p>
              <p className='roboto text-[clamp(0.4rem,2vw,0.8rem)] font-bold opacity-55'>Senior Chauffer</p>
            </span>
          </div>
          <div className='flex flex-col  col-span-1'>
            <img src={E2} alt="" className='h-96' />
            <span className='flex flex-col items-center'>
              <p className='roboto font-medium'>Taylor Smith</p>
              <p className='roboto text-[clamp(0.4rem,2vw,0.8rem)] font-bold opacity-55'>City Tour Guide</p>
            </span>
          </div>
          <div className='flex flex-col  col-span-1'>
            <img src={E3} alt="" className='h-96' />
            <span className='flex flex-col items-center'>
              <p className='roboto font-medium'>Jordan Drown</p>
              <p className='roboto text-[clamp(0.4rem,2vw,0.8rem)] font-bold opacity-55'>Distance Driver</p>
            </span>
          </div>
          <div className='flex flex-col  col-span-1'>
            <img src={E4} alt="" className='h-96' />
            <span className='flex flex-col items-center'>
              <p className='roboto font-medium'>Davis Casey</p>
              <p className='roboto text-[clamp(0.4rem,2vw,0.8rem)] font-bold opacity-55'>Senior Chauffer</p>
            </span>
          </div>
        </div>
      </article>
    </>
  )
}

export default AboutUs