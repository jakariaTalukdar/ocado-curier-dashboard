import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import productImage from '@/public/images/5499393.jpg'
import foodImage from '@/public/images/dudh_chitoi.jpg'

export default function page({params}) {
    const {restaurentId} = params
  return (
    <div className='p-3 md:w-10/12 mx-auto flex flex-col gap-y-8'>
        <div className='flex items-center gap-x-2'>
            <Link href="/" className='text-sm underline'>Homepage</Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            <Link href="./" className='text-sm underline'>Banani</Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            <span className='text-sm'>Star Kabab & Restaurant - Banani</span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-x-5'>
            <Image src={productImage} alt='Restaurent Image' className='col-span-1 md:col-span-2 rounded-xl'/>
            <div className='col-span-10 flex flex-col gap-y-5'>
                <div className='flex items-center gap-x-2 text-sm text-gray-600'>
                    <span className='border-r pr-2 border-gray-400'>Asian</span>
                    <span className='border-r pr-2 border-gray-400'>Snacks</span>
                    <span className='border-r pr-2 border-gray-400'>Bangladeshi</span>
                    <span className='border-r pr-2 border-gray-400'>Curry</span>
                    <span className='border-r pr-2 border-gray-400'>Haleem</span>
                </div>
                <h1 className='text-3xl font-semibold'>Star Kabab & Restaurant - Banani</h1>
                <div className='flex items-center gap-x-3'>
                    <div className='flex items-center gap-x-1 text-sm'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bike"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg>
                        <span className='font-semibold text-red-500'>Free delivery for first order</span>
                    </div>
                    <div className='flex items-center gap-x-1 text-sm'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                        <span className='font-medium'>Min. order Tk 50</span>
                    </div>
                </div>
                <div className='flex items-center gap-x-3'>
                    <div className='flex items-center gap-x-1 text-sm'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#f7b900" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                        <div className='flex items-center gap-x-1'>
                            <span>4.5/8</span>
                            <span>(5000+)</span>
                            <Link href="/">See Reviews</Link>
                        </div>
                    </div>
                    <Link href="/" className='flex items-center gap-x-1 text-sm'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                        <span className='font-medium'>More info</span>
                    </Link>
                </div>
            </div>
        </div>
        <hr className='text-gray-200' />
        <div className='flex flex-col gap-y-4'>
            <div className='flex items-center gap-x-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#f7b900" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                <h2 className='text-3xl font-semibold'>Popular</h2>
            </div>
            <h3 className='text-gray-500'>Most ordered right now.</h3>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>

                <div className="col-span-1 p-2 grid grid-cols-3 gap-x-1 border border-red-400 rounded-lg shadow-md">
                    <div className="col-span-2 flex flex-col gap-y-1">
                        <h4 className='truncate font-semibold text-lg'>Mutton Kacchi Biriyani</h4>
                        <h5 className='font-light text-gray-600'>From TK 235</h5>
                        <p className='line-clamp-3 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A doloremque fugiat voluptate, suscipit hic numquam modi aperiam eos porro similique.</p>
                    </div>
                    <div className='col-span-1'>
                        <Image src={foodImage} alt='Food Item' quality={100}/>
                    </div>
                </div>

                <div className="col-span-1 p-2 grid grid-cols-3 gap-x-1 border border-red-400 rounded-lg shadow-md">
                    <div className="col-span-2 flex flex-col gap-y-1">
                        <h4 className='truncate font-semibold text-lg'>Mutton Kacchi Biriyani</h4>
                        <h5 className='font-light text-gray-600'>From TK 235</h5>
                        <p className='line-clamp-3 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A doloremque fugiat voluptate, suscipit hic numquam modi aperiam eos porro similique.</p>
                    </div>
                    <div className='col-span-1'>
                        <Image src={foodImage} alt='Food Item' quality={100}/>
                    </div>
                </div>
            </div>
        </div>
        page {restaurentId}
    </div>
  )
}
