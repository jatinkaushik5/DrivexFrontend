import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Footer from './components/Footer'
import AboutUs from './Pages/AboutUs'

const App = () => {
  return (
    <>
    <main className='w-full relative h-auto overflow-hidden'>
    <Navbar/>
    {/* <AboutUs/> */}
    <Home/>
    {/* <Footer/> */}
    </main>
    </>
  )
}

export default App