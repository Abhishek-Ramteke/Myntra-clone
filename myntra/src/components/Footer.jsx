import React from 'react'
import playstore from '../images/playstore.png'
import appstore from '../images/appstore.png'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import youtube from '../images/youtube.png'
import instagram from '../images/instagram.png'
import original from '../images/original.png'
import replace from '../images/replace.png'

export default function 
() {
  return (
    <div className='z-0'>
        <div className='h-[505px] w-[100%] flex bg-[#fafbfc]'>
           <div className='w-[20%] '>
            <h1 className='font-bold text-[11px] cursor-pointer mt-[50px] ml-[135px] mb-[27px]'>ONLINE SHOPPING</h1>
            <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[135px]'>Men</p>
            <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[135px]'>Women</p>  
            <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[135px]'>Kids</p>
            <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[135px]'>Home & Living</p>
            <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[135px]'>Beauty</p>
            <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[135px]'>Gift Cards</p>
            <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[135px]'>Myntra Insider</p>
            <h1 className='font-bold text-[11px] ml-[135px] mt-[22px] mb-[27px]'>USEFUL LINKS</h1>
            <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[135px]'>Blog</p>
            <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[135px]'>Careers</p>
            <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[135px]'>Site Map</p>
            <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[135px]'>Corporate Information</p>
            <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[135px]'>Whitehat</p>
            <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[135px]'>Cleartrip</p>
           </div>
           <div className='w-[13%] '>
           <h1 className='font-bold text-[11px] mt-[50px] ml-[45px] mb-[27px]'>CUSTOMER POLICIES</h1>
           <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[45px]'>Contact Us</p>
           <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[45px]'>FAQ</p>
           <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[45px]'>T&C</p>
           <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[45px]'>Terms Of Use</p>
           <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[45px]'>Track Orders</p>
           <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[45px]'>Shipping</p>
           <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[45px]'>Cancellation</p>
           <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[45px]'>Returns</p>
           <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[45px]'>Privacy policy</p>
           <p className='text-[#806BA3] font-sans text-[14px] cursor-pointer mt-[2px] ml-[45px]'>Grievance Officer</p>
           </div>
           <div className='w-[27%] relative'>
            <h1 className='font-bold text-[11px] mt-[50px] ml-[22px]'>EXPERIENCE MYNTRA APP ON MOBILE</h1>
            <img className='h-[41px] ml-[22px] mt-[27px]' src={playstore}/>
            <img className='h-[42px] absolute left-[175px] top-[94px]' src={appstore}/>
            <h1 className='font-bold text-[11px]  ml-[22px] mt-[27px]'>KEEP IN TOUCH</h1>
            <img className='h-[20px] ml-[22px] mt-[18px] cursor-pointer' src={facebook}/>
            <img className='h-[20px] ml-[22px] absolute top-[196px] left-[30px] cursor-pointer' src={twitter}/>
            <img className='h-[20px] ml-[22px] absolute top-[196px] left-[60px] cursor-pointer' src={youtube}/>
            <img className='h-[20px] ml-[22px] absolute top-[196px] left-[100px] cursor-pointer' src={instagram}/>
           </div>
           <div className='w-[40%]  relative'>
             <img className=' mt-[50px] h-[40px] ml-[34px]' src={original}/>
             <h1 className='font-bold font-sans text-[15px] absolute left-[90px] top-[50px]'>100% ORIGINAL</h1>
             <p className='text-[#806BA3] font-sans text-[14px] absolute left-[210px] top-[49px]'>gurantee for</p>
             <p className='text-[#806BA3] font-sans text-[14px] absolute left-[90px] top-[70px]'>all products at myntra.com</p>
             <img className=' mt-[32px] h-[48px] ml-[34px]'  src={replace}/>
             <h1 className='font-bold font-sans text-[15px] absolute left-[90px] top-[128px]'>Return within 14d</h1>
             <p className='text-[#806BA3] font-sans text-[14px] absolute left-[220px] top-[128px]'> of</p>
             <p className='text-[#806BA3] font-sans text-[14px] absolute left-[90px] top-[146px]'> receiving your order</p>
           </div>
        </div>
        <div className='bg-[#FAFBFC] h-[40px] w-[100%]'>
        <h1 className='font-bold text-[11px] cursor-pointer ml-[135px] mb-[27px]'>POPULAR SEARCHES</h1>
        <hr className=''/>
        </div >
        <div className='bg-[#FAFBFC] h-[24px] w-[100%] flex flex-wrap'>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer ml-[135px] '>Makeup |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Dresses For Girls |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> T-Shirts |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Sandals |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Headphones |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Babydolls |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Blazers For Men |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Handbags |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Ladies Watches |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Bags |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Sport Shoes |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Reebok Shoes |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Puma Shoes |</pre>   
        </div>
        <div className='bg-[#FAFBFC] h-[24px] w-[100%] flex flex-wrap '>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer ml-[132px]'> Boxers |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Wallets |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Tops |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Earrings |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Fastrack Watches |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Kurtis |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Nike |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Smart Watches |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Titan Watches |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Designer Blouse |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Gowns |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Rings |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Cricket Shoes |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Forever 21 |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Eye </pre>
        </div>
        <div className='bg-[#FAFBFC] h-[24px] w-[100%] flex flex-wrap '>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer ml-[132px]'> Makeup |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Photo Frames |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Punjabi Suits |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Bikini |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Myntra Fashion Show |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Lipstick |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Saree |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Watches |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Dresses |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Lehenga |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Nike Shoes |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Goggles |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Bras |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Suit |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Chinos |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Shoes |</pre>
        </div>
        <div className='bg-[#FAFBFC] h-[64px] w-[100%] flex flex-wrap'>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer ml-[132px]'> Adidas Shoes |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Woodland Shoes |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Jwewllery |</pre>
        <pre className='text-[#806BA3] font-sans text-[14px] cursor-pointer '> Designers Sarees |</pre>
        </div>
        <div className='bg-[#FAFBFC] h-[200px] w-[100%] flex flex-wrap '>
            <pre className='text-[#806BA3] font-sans text-[14px] ml-[135px] cursor-default'>In case of any conern, </pre>
            <a className='text-[#526CD0] font-sans text-[16px] font-bold  cursor-pointer'>Contact Us</a>
            <p className='text-[#806BA3] font-sans text-[14px] ml-[215px]  cursor-default'>&#169; 2024 www.myntra.com.All rights reserved.</p>
            <a className='text-[#806BA3] font-sans text-[14px] ml-[265px]  cursor-pointer' href='https://www.flipkart.com'>A Flipkart company</a>
        </div>
    </div>
  )
}
