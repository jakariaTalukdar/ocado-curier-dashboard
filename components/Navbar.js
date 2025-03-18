"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function page() {
    const [navStatus, setNavStatus] = useState(false)
    const [profileStatus, setProfileStatus] = useState(false)
    const [localStatus, setLocalStatus] = useState()
    const pathName = usePathname();

    const districts = [
      { id: 12, name: 'Sirajganj' },
      { id: 1, name: 'Comilla' },
      { id: 2, name: 'Feni' },
      { id: 3, name: 'Brahmanbaria' },
      { id: 4, name: 'Rangamati' },
      { id: 5, name: 'Noakhali' },
      { id: 6, name: 'Chandpur' },
      { id: 7, name: 'Lakshmipur' },
      { id: 8, name: 'Chattogram' },
      { id: 9, name: "Cox's Bazar" },
      { id: 10, name: 'Khagrachari' },
      { id: 11, name: 'Bandarban' },
      { id: 13, name: 'Pabna' },
      { id: 14, name: 'Bogura' },
      { id: 15, name: 'Rajshahi' },
      { id: 16, name: 'Natore' },
      { id: 17, name: 'Joypurhat' },
      { id: 18, name: 'Chapainawabganj' },
      { id: 19, name: 'Naogaon' },
      { id: 20, name: 'Jashore' },
      { id: 21, name: 'Satkhira' },
      { id: 22, name: 'Meherpur' },
      { id: 23, name: 'Narail' },
      { id: 24, name: 'Chuadanga' },
      { id: 25, name: 'Kushtia' },
      { id: 26, name: 'Magura' },
      { id: 27, name: 'Khulna' },
      { id: 28, name: 'Bagerhat' },
      { id: 29, name: 'Jhenaidah' },
      { id: 30, name: 'Jhalokati' },
      { id: 31, name: 'Patuakhali' },
      { id: 32, name: 'Pirojpur' },
      { id: 33, name: 'Barisal' },
      { id: 34, name: 'Bhola' },
      { id: 35, name: 'Barguna' },
      { id: 36, name: 'Sylhet' },
      { id: 37, name: 'Moulvibazar' },
      { id: 38, name: 'Habiganj' },
      { id: 39, name: 'Sunamganj' },
      { id: 40, name: 'Narsingdi' },
      { id: 41, name: 'Gazipur' },
      { id: 42, name: 'Shariatpur' },
      { id: 43, name: 'Narayanganj' },
      { id: 44, name: 'Tangail' },
      { id: 45, name: 'Kishoreganj' },
      { id: 46, name: 'Manikganj' },
      { id: 47, name: 'Dhaka' },
      { id: 48, name: 'Munshiganj' },
      { id: 49, name: 'Rajbari' },
      { id: 50, name: 'Madaripur' },
      { id: 51, name: 'Gopalganj' },
      { id: 52, name: 'Faridpur' },
      { id: 53, name: 'Panchagarh' },
      { id: 54, name: 'Dinajpur' },
      { id: 55, name: 'Lalmonirhat' },
      { id: 56, name: 'Nilphamari' },
      { id: 57, name: 'Gaibandha' },
      { id: 58, name: 'Thakurgaon' },
      { id: 59, name: 'Rangpur' },
      { id: 61, name: 'Sherpur' },
      { id: 62, name: 'Mymensingh' },
      { id: 63, name: 'Jamalpur' },
      { id: 64, name: 'Netrokona' },
      { id: 60, name: 'Kurigram' }
  ];
    
  return (
      <nav className="sticky top-0 w-full bg-white shadow-md border-b border-gray-200 z-50">
          <div className="relative w-11/12 md:w-10/12 mx-auto flex items-center justify-between text-gray-600">
              <Link href="/" className="w-full md:w-auto flex items-center justify-between md:justify-start">
                <img src="https://kfcbd.com/css/OnlineOrderingImages/Shared/md/logo_kfc.svg" alt="" className="w-10 h-10" />
                <button type="button" onClick={()=> setNavStatus(!navStatus)} className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                </button>
              </Link>  
              <div className={`${navStatus ? "w-[108.5%] flex md:static absolute -left-[4%] flex-col -bottom-[162px] gap-y-3 py-3" : "hidden md:flex"} bg-white py-[22px] items-center justify-center gap-x-7`}>
                <Link href="/explore" className={`${pathName === '/explore' && pathName !== '/' ? 'font-medium text-red-400' : ''} font-medium`}>Explore</Link>
                <Link href="/treditional" className={`${pathName === '/treditional' ? 'font-medium text-red-400' : ''} font-medium`}>Treditional</Link>
                <div onClick={()=> setLocalStatus(!localStatus)} className="relative flex items-center gap-x-1 cursor-pointer">
                  <span className='font-medium'>Famous</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                  <div className={`${localStatus ? 'opacity-100 top-[46px]' : 'opacity-0 -top-96'} max-h-96 overflow-y-auto scroolbar-hidden transitions absolute border w-52 z-[-1] shadow-md bg-white flex-col rounded-md overflow-hidden whitespace-nowrap`}>
                    {
                      districts.map((district)=>(
                        <Link href="/profile" className='flex items-center gap-x-3 px-4 py-3 text-sm text-red-700 font-medium hover:bg-gray-100'>{district.name}</Link>
                      ))
                    }
                  </div>
                </div>
                <Link href="food" className='font-medium'>My Rewards</Link>
                <Link href="food" className='font-medium'>Gift Cards</Link>
              </div>
              <Link href="/login" className="flex items-center gap-x-1 font-bold py-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                <span>Login</span>
              </Link>
              <div className='hidden items-center gap-x-5 bg-white py-3'>
                <div onClick={()=> setProfileStatus(!profileStatus)} className="hidden relative md:flex items-center gap-x-1 font-medium cursor-pointer">
                  <div className='h-10 w-10 relative rounded-full overflow-hidden'>
                    <Image src="/images/pizza.jpg" alt='User' layout='fill' objectFit='cover'/>
                  </div>
                  <span>JAKARIA.T</span>
                  <div className={`${profileStatus ? 'opacity-100 top-[54px]' : 'opacity-0 -top-64'} transitions absolute border w-52 z-[-1] shadow-md bg-white flex-col rounded-md overflow-hidden whitespace-nowrap`}>
                    {/* <span className='px-4 py-2'>Balance: 500</span> */}
                    <Link href="/profile" className='flex items-center gap-x-3 px-4 py-3 text-sm text-red-700 hover:bg-gray-100'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      <span className='text-gray-700'>Profile</span>
                    </Link>
                    <Link href="/profile" className='flex items-center gap-x-3 px-4 py-3 text-sm text-red-700 hover:bg-gray-100'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-ordered"><path d="M10 12h11"/><path d="M10 18h11"/><path d="M10 6h11"/><path d="M4 10h2"/><path d="M4 6h1v4"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>
                      <span className='text-gray-700'>Orders</span>
                    </Link>
                    <Link href="/profile" className='flex items-center gap-x-3 px-4 py-3 text-sm text-red-700 hover:bg-gray-100'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                      </svg>

                      <span className='text-gray-700'>Rewords</span>
                    </Link>
                    <Link href="/profile" className='flex items-center gap-x-3 px-4 py-3 text-sm text-red-700 hover:bg-gray-100'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                      <span className='text-gray-700'>Help center</span>
                    </Link>
                    <Link href="/profile" className='flex items-center gap-x-3 px-4 py-3 text-sm text-red-700 hover:bg-gray-100'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
                      <span className='text-gray-700'>Logout</span>
                    </Link>
                  </div>
                </div>
                {/* wishlist */}
                <Link href="/wishlist" className={`${pathName === '/wishlist/' ? 'bg-red-400 text-white' : ''} relative bg-gray-100 p-2.5 rounded-full`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  <span className='absolute -top-1.5 right-0 bg-white text-black border text-xs rounded-full h-[18px] w-[18px] flex items-center justify-center'>99</span>
                </Link>
                {/* cart */}
                <Link href="/cart" className={`${pathName === '/cart/' ? 'bg-red-400 text-white' : 'bg-gray-100'} relative p-2.5 rounded-full`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                  <span className='absolute -top-1.5 right-0 bg-white text-black border text-xs rounded-full h-[18px] w-[18px] flex items-center justify-center'>99</span>
                </Link>
              </div>
          </div>
      </nav>
  )
}
