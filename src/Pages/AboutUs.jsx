import React from 'react'
import Interior from "../assets/Interior.jpg"
import AboutusComp from '../components/AboutusComp'

const AboutUs = () => {
  return (
    <>
    <article className='h-[35vh] pt-15 bg-black bg-center bg-cover bg-no-repeat relative' style={{backgroundImage:`url(${Interior})`}}>
        <div className='h-full w-full absolute top-0 left-0 bg-gray-800/50'>

        </div>
    </article>
    <AboutusComp/>
    </>
  )
}

export default AboutUs