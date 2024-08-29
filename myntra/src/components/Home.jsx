import React from 'react'
import Header from './Header'

import image1 from '../banner/image1.webp'
import image2 from '../banner/image2.webp'
import image3 from '../banner/image3.webp'
import image4 from '../banner/image4.webp'
import image5 from '../banner/image5.webp'
import image6 from '../banner/image6.webp'
import image7 from '../banner/image7.webp'
import Footer from './Footer'


export default function Home() {
  return (
    <div>
    <Header/>
    <div className='mt-[120px]'>
        <div className='mx-[60px] h-[90px] mt-[25px]'>
            <img src={image1}/>
        </div>
        <div className='grid grid-cols-2 mx-[15px] h-[390px] mt-[10px] ' >
            <img src={image2}/>
            <img  src={image3}/>
        </div>
        <div className='mx-[60px] mt-[10px]'>
            <img src={image4}/>
        </div>
        <div className='flex'>
            <div className='w-[50%] '>
              <img src={image5}/>
            </div>
            <div className='w-[50%] '>
              <img src={image6}/>
            </div>
        </div>
        <div>
        <img src={image7}/>
        </div>
        </div>
        <Footer/>
    </div>
  )
}
