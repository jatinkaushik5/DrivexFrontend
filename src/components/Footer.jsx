import React from 'react'

const Footer = () => {
  return (
    <footer className='  bg-slate-800  h-[40vh] flex flex-col   '>
        <div className='h-[80%] w-full flex justify-center px-19'>
            <div className='h-full w-[40%] text-white p-10 flex flex-col  gap-5 '>
                <h1 className='text-2xl'>DRIVE<span className='text-yellow-400'>X.</span></h1>
                <p className='text-[13px] roboto opacity-75'>Experience the ease and conveience of renting a car with DRIVEX.</p>
            </div>
            <div className='h-full w-[40%] text-white flex flex-col gap-2 p-10 '>
                <h1>LEGAL POLICY</h1>
                <p className='text-[13px] opacity-65'>Term & Condition</p>
                <p className='text-[13px] opacity-65'>Privacy Policy</p>
                <p className='text-[13px] opacity-65'>Legal Notice</p>
                <p className='text-[13px] opacity-65'>Accessibility</p>
            </div>
            <div className='h-full w-[40%] text-white p-10 flex flex-col gap-2 '>
                <h1>QUICK LINKS</h1>
                <p className='text-[13px] opacity-65'>Home</p>
                <p className='text-[13px] opacity-65'>About Us</p>
                <p className='text-[13px] opacity-65'>Car Type</p>
                <p className='text-[13px] opacity-65'>Service</p>
            </div>
        </div>
        <div className='flex items-center h-[20%]  justify-center'>
            <h4 className='text-white text-[13px] opacity-55'>2026 DRIVEX.All  Rights reserved By Jatin Kaushik</h4>
        </div>
    </footer>
  )
}

export default Footer