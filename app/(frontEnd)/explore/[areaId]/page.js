import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function page({params}) {
    const {areaId} = params;
    console.log(areaId);
    
  return (
    <div className='flex flex-col gap-y-7'>
        <div className='relative h-96 p-2 md:p-32 flex items-center justify-end'>
            <Image src="/images/login-bg.jpg" alt='Banner' layout='fill' objectFit='cover' className='z-[-1]'/>
            <div className='border shadow-md rounded-md md:p-16 p-5 py-11 backdrop-blur-md md:max-w-[670px] text-end'>
                <h2 className='text-2xl md:text-3xl font-bold'>Food Delivery from {areaId}’s Best Restaurants</h2>
            </div>
        </div>
        <div className='px-2 md:px-32'>
            <div className='flex items-center gap-x-2 font-semibold'>
                <Link href="/" className='underline'>Homepage</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                <span>{areaId}</span>
            </div>
        </div>
    </div>
  )
}
