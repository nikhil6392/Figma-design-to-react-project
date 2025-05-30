import React from 'react'
import logo from './assets/logo.png'
import { FiArrowRight } from 'react-icons/fi';
import Customer from './assets/customer.png'
import Profile1 from './assets/profile1.png'
import Profile2 from './assets/profile2.png'
import Profile3 from './assets/profile3.png'
import Profile4 from './assets/profile4.png'


const LandingPage = () => {
  return (
    <div>
      <div className='h-screen bg-gradient-to-r from-blue-950 via-blue-700 to-blue-950'>
         <nav className="flex items-center p-4 text-white">
             <img 
                src={logo} 
                alt="Logo" 
                className="h-12 w-auto mt-[44px] ml-[100px]"
             />

        
           <ul className="flex space-x-6 ml-auto">
             <li><a href="/" className="text-white">Home</a></li>
             <li><a href="/services" className="text-white">Services</a></li>
             <li><a href="/aboutUs" className="text-white">About us</a></li>
             <li><a href="/blog" className="text-white">Blog</a></li>
            <li><a href="/getEstimate" className="text-white ">Get estimate</a></li>
           </ul>
          <span className="ml-6 space-x-4">
          <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200">
           Borrower Portal
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700">
             Company Portal
          </button>
         </span>
         </nav>
        <div className='p-10 flex flex-col md:flex-row items-center relative'>
          <div className='md:w-2/3 space-y-6'>
            <h1 className='text-6xl font-bold text-white'>Learn how we are <span className='mx-2 text-red-700'>Different</span> from other lenders.<span className='block h-2 w-10 bg-red-700 mt-6'></span></h1>
            <p className='text-2xl font-normal text-gray-300'>Get your loan Quickly and efficiently.</p>
            <div className='flex space-x-4'>
            <button className="bg-white px-0 py-0 rounded-md hover:bg-gray-200 transition flex items-center border border-gray-300"
            >
             <span className="bg-red-500 text-white px-4 py-2 rounded-l-md">Apply Now</span>
             <span className="bg-white text-black px-4 py-2 rounded-r-md border-l border-gray-300">
             <FiArrowRight className="text-black" />
             </span>
            </button>
           
      </div>
        
      <div className='flex items-center gap-3 mt-6'>
         <div className='flex -space-x-2'>
          <img src={Profile1} alt = "User" className='w-10 h-10 rounded-full border-2 border-white'/>
          <img src= {Profile2} alt = "User" className='w-10 h-10 rounded-full border-2 border-white'/>
          <img src= {Profile3} alt = "User" className='w-10 h-10 rounded-full border-2 border-white'/>
          <img src= {Profile4} alt = "User" className='w-10 h-10 rounded-full border-2 border-white'/>
        </div>
        <div className='flex flex-col items-start '>
        <span className='text-xl font-semibold leading-tight text-white'>320K</span>
        <span className='text-xl font-semibold leading-tight text-gray-300'>Active users</span>
        </div>
      </div>
      <div className="relative w-full h-full">
    </div>
    <img 
    src={Customer} 
    alt="Customer" 
    className="absolute left-[50%] top-[70%] translate-x-[-50%] translate-y-[-50%] w-[325px] h-auto"/>
    </div>
    <div className="relative flex-1 flex flex-col items-start space-y-6 ml-16">
          <div className="relative flex flex-col space-y-6 ">
            <div className="flex items-center space-x-3 bg-white text-black p-4 rounded-lg shadow-md">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-500 text-xl font-bold">📊</span>
              <span>2M+ Business Owners</span>
            </div>
            <div className="flex items-center space-x-3 bg-white text-black p-4 rounded-lg shadow-md">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-blue-500 text-xl font-bold">🌎</span>
              <span>10+ Countries Supported</span>
            </div>
            <div className="flex items-center space-x-3 bg-white text-black p-4 rounded-lg shadow-md">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-green-500 text-xl font-bold">⭐</span>
              <span>4.9 Ratings by Customers</span>
            </div>
            <div className="flex items-center space-x-3 bg-white text-black p-4 rounded-lg shadow-md">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-blue-700 text-xl font-bold">💰</span>
              <span>Residential & Commercial Loan</span>
            </div>
          </div>
        </div>
      
    </div>
    
    </div>
    </div>
  )
}

export default LandingPage
