import React from 'react'
import logo from '../images/logo.png'
import  '../styles/header.css'
import Menhover from './Menhover'
import { Link } from 'react-router-dom'
import Womenhover from './Womenhover'
import Kidshover from './Kidshover'
import HomeLivinghover from './HomeLivinghover'
import Beautyhover from './Beautyhover'



export default function Header() {
  return (
   <div>
    <header className='fixed w-[100%] top-[0] left-[0] shadow-md z-10'>
    <div className="flex h-[80px] font-sans shadow-black bg-white" >
        <div className='w-[10%] flex justify-center items-center'>
            <Link to='/'><img className='h-[40px]' src={logo}/></Link></div>
        <div className='w-[50%]  flex row items-center'>
            <div className='px-[18px] cursor-pointer'>
                <a className='font-bold text-[13px] menhoverdropdown'>MEN<Menhover/></a></div>
            <div className='px-[18px] cursor-pointer'>
                <a className='font-bold text-[13px] womenhoverdropdown'>WOMEN<Womenhover/></a></div>
            <div className='px-[18px] cursor-pointer'>
                <a className='font-bold text-[13px] kidshoverdropdown'>KIDS<Kidshover/></a></div>
            <div className='px-[18px] cursor-pointer'>
                <a className='font-bold text-[13px] homelivinghoverdropdown'>HOME AND LIVING<HomeLivinghover/></a></div>
            <div className='px-[18px] cursor-pointer'>
                <a className='font-bold text-[13px] beautyhoverdropdown'>BEAUTY<Beautyhover/></a></div>
            <div className='px-[18px] cursor-pointer'>
                <a className='font-bold text-[13px]'>STUDIO</a></div>
        </div>
        <div className='w-[25%]  flex justify-center items-center relative'>
            <div className='absolute left-[10px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</div>
            <input className='h-[50%] w-[100%] bg-[#F5F5F6] rounded pl-[40px] focus:bg-[white] focus:outline-none focus:border-[2px]' type='text' placeholder='search for products,brands and more'/>
        </div>
        <div className='w-[15%]   flex row items-center'>
            <div className=' group flex-1 flex-col'>
                <div className='flex justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 stroke-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </div>
                <div  className=' flex justify-center'>
               
                <p className='font-bold text-[12px] text-black'>Profile 
                    <div className=' dropdown w-[300px] h-[430px] bg-white absolute top-20 right-[20px] font-sans text-[13px] shadow-md cursor-default '>
                    <div className='bg-white h-[20px] w-[145px] rounded ml-[80px] mt-[-22px]'></div>
                        <div className='bg-[#ff3f6c] h-[4px] w-[65px] rounded ml-[120px] mt-[-3px]'></div>
                        <h1 className='pl-[15px] pt-[20px] text-gray-700'>Welcome</h1>
                        <p className='pl-[15px] text-gray-500 font-semibold hover:cursor-default hover:text-gray-500'>To access account and manage orders</p>
                        <Link to="/login"><button type="button" className='text-[#ff3f6c] font-bold h-[40px] w-[140px] border-[1px] ml-[15px] mt-[12px] hover:border-[#ff3f6c] cursor-pointer border-gray-400 font-sans rounded'>LOGIN / SIGNUP</button></Link>
                        <hr className='mt-[18px] mx-[15px]'/>
                    
                        <p className='pl-[15px] pt-[15px] text-gray-500 font-semibold hover:cursor-pointer hover:text-gray-700 hover:font-bold'>Orders</p>
                        <p className='pl-[15px] mt-[4px] text-gray-500 font-semibold hover:cursor-pointer hover:text-gray-700 hover:font-bold'>Wishlist</p>
                        <p className='pl-[15px] mt-[4px] text-gray-500 font-semibold hover:cursor-pointer hover:text-gray-700 hover:font-bold'>Gift Cards</p>
                        <p className='pl-[15px] mt-[4px] text-gray-500 font-semibold hover:cursor-pointer hover:text-gray-700 hover:font-bold'>Contact Us</p>
                        <p className='pl-[15px] mt-[4px] text-gray-500 font-semibold hover:cursor-pointer hover:text-gray-700 hover:font-bold'>Myntra Insider</p>
                        <span className='absolute text-white italic text-[10px] border-[1px] border-[#ff3f6c] bg-[#ff3f6c] ml-[115px] mt-[-15px] cursor-pointer '>New</span>
                        <hr className='mt-[10px] mx-[15px]'/>
                        <p className='pl-[15px] pt-[15px] text-gray-500 font-semibold hover:cursor-pointer hover:text-gray-700 hover:font-bold'>Myntra Credit</p>
                        <p className='pl-[15px] mt-[4px] text-gray-500 font-semibold hover:cursor-pointer hover:text-gray-700 hover:font-bold'>Coupons</p>
                        <p className='pl-[15px] mt-[4px] text-gray-500 font-semibold hover:cursor-pointer hover:text-gray-700 hover:font-bold'>Saved Cards</p>
                        <p className='pl-[15px] mt-[4px] text-gray-500 font-semibold hover:cursor-pointer hover:text-gray-700 hover:font-bold'>Saved VPA</p>
                        <p className='pl-[15px] mt-[4px] text-gray-500 font-semibold hover:cursor-pointer hover:text-gray-700 hover:font-bold'>Saved Addresses</p>
                       
                    </div>
                </p>
                </div>
            </div>
           <div className="flex-1 flex-col">
                <div className='flex justify-center'><Link to="/wishlist"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5  stroke-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg></Link>
            </div>
                <div className='flex justify-center'><Link to="/wishlist"><p className='font-bold text-[12px] text-black'>Wishlist</p></Link></div>
            </div>
           <div className='flex-1 flex-col'> 
                <div className='flex justify-center'> <Link to="/bag"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 stroke-1">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg></Link>
            </div>
            <div className='flex justify-center'><Link to="/bag"><p className='font-bold text-[12px]  text-black'>Bag</p></Link></div>
            </div>
        </div>
    </div>
    </header>
   </div>
  )
}
