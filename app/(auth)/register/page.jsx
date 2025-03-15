"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '@/public/images/logo.svg'

export default function Hello() {
  const [pasStatus, setPassStatus] = useState(false);
  return (
    <div className='flex grow bg-white h-screen items-center justify-center'>
        <Image src={'/images/register-bg.jpg'} alt='bg' layout='fill' objectFit='cover' />
      <div className='w-11/12 md:w-8/12 flex items-center justify-start'>
        <div className='w-full md:w-[420px] bg-[#ffffff33] backdrop-blur-md p-7 rounded-md border border-gray-300 text-black shadow-md flex flex-col gap-y-7'>
          <div className='flex flex-col gap-y-2'>
            <Image src={logo} alt='Logo' height={70} width={70} className='mx-auto'/>
            <h1 className='text-center font-semibold text-2xl'>Register</h1>
          </div>
          <div className='flex flex-col gap-y-7'>
            <div className='flex items-center border-b'>
              <input type="text" name="" id="" placeholder='Enter your Name' className='w-full outline-0 py-2 text-sm' />
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div className='flex items-center border-b'>
              <input type="email" name="" id="" placeholder='Enter your Email' className='w-full outline-0 py-2 text-sm' />
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div className='flex items-center border-b'>
              <input type="email" name="" id="" placeholder='Enter your Phone Number' className='w-full outline-0 py-2 text-sm' />
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div className='flex items-center border-b'>
              <input type="email" name="" id="" placeholder='Enter your Address' className='w-full outline-0 py-2 text-sm' />
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className='flex items-center border-b'>
              <input type={`${pasStatus === false ? 'password' : 'text'}`} name="" id="" placeholder='Enter your Email' className='w-full outline-0 py-2 text-sm' />
              <svg onClick={()=> setPassStatus(!pasStatus)} className={`${pasStatus === true ? '' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
              <svg onClick={()=> setPassStatus(!pasStatus)} className={`${pasStatus === false ? '' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>
            </div>
            <div className='flex items-center justify-between text-sm'>
              <div className='flex items-center gap-x-2'>
                <label htmlFor="remember">Remember me</label>
                <input type="checkbox" name="" id="remember" />
              </div>
              <Link href="/login" className='hover:underline'>Forgot password ?</Link>
            </div>
            <div className='flex items-center justify-center'>
              <button className='px-4 py-1 bg-red-700 hover:bg-red-800 font-semibold transitions text-white rounded-md'>Register Now</button>
            </div>
            <span className='text-sm text-center'>Already have an account <Link href="/login" className='text-red-600 font-medium hover:underline'>Login</Link></span>
          </div>
        </div>
      </div>
    </div>
  )
}
