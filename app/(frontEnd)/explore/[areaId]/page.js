import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import thubm from '@/public/images/5499393.jpg'
import { regions } from '@/data/regions';
import { restaurants } from '@/data/restaurents';

export function generateMetadata ({params}){
    const {areaId} = params;
    return {
        title: `${areaId}'s resturent`,
        description: `Best returents from ${areaId}`
    }
}

export default function page({params}) {

    
    const {areaId} = params; 
    

    

    const locationId = regions.find((area)=> area.slug == areaId);
    
    const regionWiseRestaurants = restaurants.find((restaurant) => restaurant.regionId === locationId.id);

    
    
     
    
    
  return (
    <div className='flex flex-col gap-y-7'>
        <div className='relative h-96 p-2 md:p-32 flex items-center justify-end'>
            <Image src="/images/login-bg.jpg" alt='Banner' layout='fill' objectFit='cover' className='z-[-1]'/>
            <div className='border shadow-md rounded-md md:p-16 p-5 py-11 backdrop-blur-md md:max-w-[670px] text-end'>
                <h2 className='text-2xl md:text-3xl font-bold'>Food Delivery from {areaId}’s Best Restaurants</h2>
            </div>
        </div>
        <div className='px-2 md:px-32 flex flex-col gap-y-5'>
            <div className='flex items-center gap-x-2 font-semibold'>
                <Link href="/" className='underline'>Homepage</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                <span>{areaId}</span>
            </div>
            <h1 className='text-xl md:text-4xl font-medium'>All restaurants</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    regionWiseRestaurants.restaurants.map((restaurent)=>(

                        <Link key={restaurants.id} href={`/explore/${areaId}/${restaurent.id}`} className="col-span-1 border shadow-md rounded-md overflow-hidden flex flex-col">
                            <div className='h-64 overflow-hidden'>
                                <Image src={thubm} alt='thumb image' className='h-full w-full object-cover hover:scale-[1.04] transition-all duration-100'/>
                            </div>
                            <div className='p-3 pb-1 flex items-center justify-between gap-x-2'>
                                <h2 className='text-lg font-medium truncate'>{restaurent.name}</h2>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className='text-transparent' viewBox="0 0 24 24" fill="#f7b800" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                                    <p className='text-sm'>{restaurent.rating}</p>
                                    <span className='text-sm text-gray-600'>({restaurent.ratingCount})</span>
                                </div>
                            </div>
                            <span className='p-3 pt-0 text-gray-500 text-sm'>{restaurent.exactLocation}</span>
                        </Link>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}
