import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import wishlist from '../images/wishlist.png'
export default function Wishlist() {
  return (
  <div>
      <Header/>
     <div className='w-[50%]  h-[500px] ml-[350px] mt-[100px]'>
       <h1 className='font-medium font-roboto flex justify-center items-center pt-[70px] pr-[15px] text-[20px]'>PLEASE LOG IN
       </h1>
      <p className='pl-[200px] pt-[20px] font-sans text-gray-400 text-[17px]'>Login to view items in your wishlist.</p>
      <img  className='ml-[285px] mt-[40px]' src={wishlist}/>
       <Link to="/login"><button type="button" className='text-blue-500 font-bold h-[55px] w-[150px] border-[1px] border-blue-500 font-sans rounded-md ml-[260px] mt-[50px]'>LOGIN</button></Link>
     </div>
  </div>
  )
}
