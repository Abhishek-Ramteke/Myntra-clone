import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import spritesecure from '../banner/spritesecure.png'
import bag from '../banner/bag.webp'
import payment from '../images/payment.png'


export default function Bag() {
  return (
    <div>
        <div className=' flex h-[80px]  '>
          <div className='w-[10%] flex justify-center items-center'>
          <Link to='/'><img className='h-[40px]' src={logo}/></Link>
          </div>
          <div className='w-[70%] flex justify-center items-center text-[13px] font-mono  '>
            <p className='text-green-500 underline tracking-widest ml-[90px]'>BAG</p>
            <p>----------</p>
            <p className='tracking-widest'>ADDRESS</p>
            <p>----------</p>
            <p className='tracking-widest'>PAYMENT</p>
          </div>
          <div className='w-[20%] flex justify-center items-center text-[13px] font-mono tracking-widest mr-[20px]'>
            <img className='h-[50px] p-[10px]' src={spritesecure}/>
            <p>100% SECURE</p>
          </div>
        </div>
        <div>
          <img className='ml-[603px] h-[165px] w-[145px] mt-[120px]' src={bag}/>
          <h1 className='font-bold font-sans tracking-normal text-[18px] text-[#424553] ml-[585px] mt-[19px]'>Hey, it feels so light!</h1>
          <p className='font-sans text-[#868DA6] text-[14px] ml-[530px]'>There is nothing in your bag.Let's add some items.</p>
          <Link to='/wishlist'><button type="button" className='text-[#ff3f6c] font-bold text-[13px] tracking-wide h-[45px] w-[210px] border-[1px]  ml-[570px] mt-[25px] border-[#ff3f6c] hover:cursor-pointer font-sans rounded'>ADD ITEMS FROM WISHLIST</button></Link>
          <img className='mt-[235px] ml-[175px]' src={payment}/>
        </div>
    </div>
  )
}
