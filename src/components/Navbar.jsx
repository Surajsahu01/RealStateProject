import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
    const[showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(()=>{
        if(setShowMobileMenu){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }return()=>{
            document.body.style.overflow = 'auto'
        }

    },[showMobileMenu])
  return (
    <div className='absolute top-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-6 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />
            <ul className=' hidden md:flex gap-7 text-white'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400 '>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Testimonials" className='cursor-pointer hover:text-gray-400 '>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>
                Sign up
            </button>
            <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>

        {/* ---------Mobile View ------ */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a onClick={() => setShowMobileMenu(false)}  href="#Header" className='px-3 py-2 rounded-full'>Home</a>
                <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-3 py-2 rounded-full'>About</a>
                <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='px-3 py-2 rounded-full'>Project</a>
                <a onClick={() => setShowMobileMenu(false)} href="#Testimonial" className='px-3 py-2 rounded-full'>Testimonial</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar