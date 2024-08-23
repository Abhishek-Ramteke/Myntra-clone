import React,{useState} from 'react'
import Header from './Header'
import loginpic from '../banner/loginpic.webp'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'


export default function Login() {
  const handlefocus=() => {
    var logininput=document.getElementById('logininput');
    logininput.style.border="1px solid black"
    var prefix=document.getElementById('prefix');
    prefix.style.color="black"
   }
   const handleunfocus=() => {
    var loginInput=document.getElementById('logininput');
    loginInput.style.border="1px solid rgb(158, 158, 158)"
    var prefix=document.getElementById('prefix');
    prefix.style.color="rgb(158, 158, 158)"
  }
  return (
  
    <div >
       {/* HEADER STARTS FROM HERE------------------------------------------------------------------------ */}
       <div className="flex h-[80px] font-sans shadow-black" >
        <div className='w-[10%] flex justify-center items-center'>
            <Link to='/'><img className='h-[40px]' src={logo}/></Link></div>
        <div className='w-[50%]  flex row items-center'>
            <div className='px-[18px] cursor-pointer'>
                <a className='font-bold text-[13px]'>MEN</a></div>
            <div className='px-[18px] cursor-pointer'>
                <a className='font-bold text-[13px]'>WOMEN</a></div>
            <div className='px-[18px] cursor-pointer'>
                <a className='font-bold text-[13px]'>KIDS</a></div>
            <div className='px-[18px] cursor-pointer'>
                <a className='font-bold text-[13px]'>HOME AND LIVING</a></div>
            <div className='px-[18px] cursor-pointer'>
                <a className='font-bold text-[13px]'>BEAUTY</a></div>
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
        <div className='w-[15%]  flex  row items-center'>
            
           <div className="flex-1 flex-col">
                <div className='flex justify-center'><Link to="/wishlist"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5  stroke-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg></Link>
            </div>
                <div className='flex justify-center'><Link to="/wishlist"><p className='font-bold text-[12px]'>Wishlist</p></Link></div>
            </div>
           <div className='flex-1 flex-col'> 
                <div className='flex justify-center'> <Link to="/bag"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 stroke-1">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg></Link>
            </div>
            <div className='flex justify-center'><Link to="/bag"><p className='font-bold text-[12px]'>Bag</p></Link></div>
            </div>
        </div>
    </div>
       {/* HEADER ENDS----------------------------------------------------------------------------------- */}
       
       <form >
       <div className='bg-[#FDEFEA] w-[100%] h-[544px] relative '>
            <img className='absolute top-7 left-[480px] h-[160px]' src={loginpic}/>
            <div className='bg-white h-[345px] w-[400px] absolute left-[481px] mt-[189px] flex font-sans text-[#424553]'>
                <h1 className='font-bold text-[19px] ml-[35px] mt-[35px]'>Login</h1>
                <h1 className='ml-[5px] mt-[39px] '>or</h1>
                <h1 className='font-bold text-[19px] ml-[5px] mt-[35px] '>Signup</h1>
                <div id='logininput' className=' relative right-36 flex border-[1px] h-[40px] mt-[90px] text-[13px] font-sans text-gray-400 '>
                    <pre id='prefix' className=' mt-[7px]'> +91 ︱</pre>
                    <input type="number" prefix="+91" id="phone" name="phone" className='border-gray-500 mt-[1px] pl-[5px] h-[30px] w-[280px] cursor-text outline-none'  placeholder='Mobile Number' onClick={handlefocus} onMouseLeave={handleunfocus}/>
                    <span className='text-[#ff3f6c] absolute left-[145px] top-[5px]'>*</span>
                </div>
            </div>
            <div className='flex relative top-[340px] left-[510px] text-[12px] text-gray-500'>
                <pre className=' font-sans'>By continuing, I agree to the</pre>
                <pre className=' font-sans text-[#ff3f6c] font-bold cursor-pointer'> Terms of Use</pre> 
                <pre className=' font-sans'> &</pre>
                <pre className=' font-sans text-[#ff3f6c] font-bold cursor-pointer'> Privacy Policy</pre>
            </div>
            <button className='bg-[#ff3f6c] text-white h-[40px] w-[330px] relative top-[360px] left-[510px] font-sans font-bold text-[12px]'>CONTINUE</button>
            <div className='flex relative top-[390px] left-[510px] text-[12px] text-gray-500'>
            <p className='font-sans'>Have trouble logging in?</p>
            <pre className='font-sans text-[#ff3f6c] font-bold cursor-pointer'> Get help</pre>
            </div>
       </div>
       </form>
       
    </div>
  )
}
