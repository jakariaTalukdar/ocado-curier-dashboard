import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import productImage from '@/public/images/5499393.jpg'
import foodImage from '@/public/images/dudh_chitoi.jpg'
import FoodCounter from '@/components/FoodCounter'

export default function page({params}) {
    const {restaurentId} = params
  return (
    <div className='p-3 md:w-10/12 mx-auto flex flex-col gap-y-4 md:gap-y-8'>
        <div className='flex items-center gap-x-2 flex-wrap gap-y-2'>
            <div className='flex items-center gap-2'>
                <Link href="/" className='text-sm underline'>Homepage</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </div>
            <div className='flex items-center gap-x-2'>
                <Link href="./" className='text-sm underline'>Banani</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </div>
            <span className='text-sm'>Star Kabab & Restaurant - Banani</span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-3'>
            <Image src={productImage} alt='Restaurent Image' placeholder="blur"	 className='col-span-1 md:col-span-2 rounded-xl'/>
            <div className='col-span-10 flex flex-col gap-y-3 md:gap-y-5'>
                <div className='flex items-center gap-x-2 text-xs md:text-sm text-gray-600'>
                    <span className='border-r pr-2 border-gray-400'>Asian</span>
                    <span className='border-r pr-2 border-gray-400'>Snacks</span>
                    <span className='border-r pr-2 border-gray-400'>Bangladeshi</span>
                    <span className='border-r pr-2 border-gray-400'>Curry</span>
                    <span className='border-r pr-2 border-gray-400'>Haleem</span>
                </div>
                <h1 className='text-2xl md:text-3xl font-semibold'>Star Kabab & Restaurant - Banani</h1>
                <div className='flex items-center gap-x-3'>
                    <div className='flex items-center gap-x-1 text-xs'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bike"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg>
                        <span className='font-semibold text-red-500'>Free delivery for first order</span>
                    </div>
                    <div className='flex items-center gap-x-1 text-xs'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                        <span className='font-medium'>Min. order Tk 50</span>
                    </div>
                </div>
                <div className='flex items-center gap-x-3'>
                    <div className='flex items-center gap-x-1 text-xs'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#f7b900" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                        <div className='flex items-center gap-x-1'>
                            <span>4.5/8</span>
                            <span>(5000+)</span>
                            <Link href="/">See Reviews</Link>
                        </div>
                    </div>
                    <Link href="/" className='flex items-center gap-x-1 text-xs'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                        <span className='font-medium'>More info</span>
                    </Link>
                </div>
            </div>
        </div>
        <div className='flex flex-wrap items-center gap-1.5 border-y border-gray-200 py-5'>
            <div className='flex items-center gap-x-1 bg-gray-100 p-2 rounded-md'>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </button>
                <input type="text" name="" id="" placeholder='Search' className='border-none outline-none text-sm text-gray-500' />
            </div>
            <button className='flex items-center justify-center gap-x-1 hover:bg-gray-100 px-4 py-2 text-sm text-gray-500 rounded-md font-medium cursor-pointer transition-all duration-150 border'>
                <span>Popular</span>
                <span>(6)</span>
            </button>
            <button className='flex items-center justify-center gap-x-1 hover:bg-gray-100 px-4 py-2 text-sm text-gray-500 rounded-md font-medium cursor-pointer transition-all duration-150 border'>
                <span>Snacks</span>
                <span>(3)</span>
            </button>
            <button className='flex items-center justify-center gap-x-1 hover:bg-gray-100 px-4 py-2 text-sm text-gray-500 rounded-md font-medium cursor-pointer transition-all duration-150 border'>
                <span>Luchi & Paratha</span>
                <span>(4)</span>
            </button>
            <button className='flex items-center justify-center gap-x-1 hover:bg-gray-100 px-4 py-2 text-sm text-gray-500 rounded-md font-medium cursor-pointer transition-all duration-150 border'>
                <span>Bhorta & Vegetable</span>
                <span>(5)</span>
            </button>
            <button className='flex items-center justify-center gap-x-1 hover:bg-gray-100 px-4 py-2 text-sm text-gray-500 rounded-md font-medium cursor-pointer transition-all duration-150 border'>
                <span>Fish</span>
                <span>(15)</span>
            </button>
            <button className='flex items-center justify-center gap-x-1 hover:bg-gray-100 px-4 py-2 text-sm text-gray-500 rounded-md font-medium cursor-pointer transition-all duration-150 border'>
                <span>Curry</span>
                <span>(8)</span>
            </button>
            <button className='flex items-center justify-center gap-x-1 hover:bg-gray-100 px-4 py-2 text-sm text-gray-500 rounded-md font-medium cursor-pointer transition-all duration-150 border'>
                <span>Rice</span>
                <span>(2)</span>
            </button>
            <button className='flex items-center justify-center gap-x-1 hover:bg-gray-100 px-4 py-2 text-sm text-gray-500 rounded-md font-medium cursor-pointer transition-all duration-150 border'>
                <span>Set Menu</span>
                <span>(3)</span>
            </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-7'>
            <div className='col-span-1 md:col-span-2 flex flex-col gap-y-1'>
                <div className='flex items-center gap-x-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#f7b900" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                    <h2 className='text-2xl md:text-3xl font-semibold'>Popular</h2>
                </div>
                <h3 className='text-gray-500 text-sm'>Most ordered right now.</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-3'>

                    <div className="col-span-1 p-2 grid grid-cols-3 gap-x-1 border border-red-400 rounded-lg shadow-md hover:scale-[1.03] transitions">
                        <div className="col-span-2 flex flex-col gap-y-1">
                            <h4 className='truncate font-semibold text-sm md:text-lg'>Mutton Kacchi Biriyani</h4>
                            <h5 className='font-light text-xs md:text-base text-gray-600'>From TK 235</h5>
                            <p className='line-clamp-3 text-xs md:text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A doloremque fugiat voluptate, suscipit hic numquam modi aperiam eos porro similique.</p>
                        </div>
                        <div className='relative col-span-1'>
                            <Image src={foodImage} alt='Food Item' placeholder='blur' quality={100}/>
                            <button type='button' className='absolute bottom-0 right-0 h-10 w-10 bg-white shadow-md flex items-center justify-center rounded-full border hover:bg-gray-100 hover:scale-90 transitions cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                            </button>
                        </div>
                    </div>

                    <div className="col-span-1 p-2 grid grid-cols-3 gap-x-1 border border-red-400 rounded-lg shadow-md hover:scale-[1.03] transitions">
                        <div className="col-span-2 flex flex-col gap-y-1">
                            <h4 className='truncate font-semibold text-sm md:text-lg'>Mutton Kacchi Biriyani</h4>
                            <h5 className='font-light text-xs md:text-base text-gray-600'>From TK 235</h5>
                            <p className='line-clamp-3 text-xs md:text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A doloremque fugiat voluptate, suscipit hic numquam modi aperiam eos porro similique.</p>
                        </div>
                        <div className='relative col-span-1'>
                            <Image src={foodImage} alt='Food Item' placeholder='blur' quality={100}/>
                            <button type='button' className='absolute bottom-0 right-0 h-10 w-10 bg-white shadow-md flex items-center justify-center rounded-full border hover:bg-gray-100 hover:scale-90 transitions cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                            </button>
                        </div>
                    </div>

                    <div className="col-span-1 p-2 grid grid-cols-3 gap-x-1 border border-red-400 rounded-lg shadow-md hover:scale-[1.03] transitions">
                        <div className="col-span-2 flex flex-col gap-y-1">
                            <h4 className='truncate font-semibold text-sm md:text-lg'>Mutton Kacchi Biriyani</h4>
                            <h5 className='font-light text-xs md:text-base text-gray-600'>From TK 235</h5>
                            <p className='line-clamp-3 text-xs md:text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A doloremque fugiat voluptate, suscipit hic numquam modi aperiam eos porro similique.</p>
                        </div>
                        <div className='relative col-span-1'>
                            <Image src={foodImage} alt='Food Item' quality={100}/>
                            <button type='button' className='absolute bottom-0 right-0 h-10 w-10 bg-white shadow-md flex items-center justify-center rounded-full border hover:bg-gray-100 hover:scale-90 transitions cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                            </button>
                        </div>
                    </div>

                    <div className="col-span-1 p-2 grid grid-cols-3 gap-x-1 border border-red-400 rounded-lg shadow-md hover:scale-[1.03] transitions">
                        <div className="col-span-2 flex flex-col gap-y-1">
                            <h4 className='truncate font-semibold text-sm md:text-lg'>Mutton Kacchi Biriyani</h4>
                            <h5 className='font-light text-xs md:text-base text-gray-600'>From TK 235</h5>
                            <p className='line-clamp-3 text-xs md:text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A doloremque fugiat voluptate, suscipit hic numquam modi aperiam eos porro similique.</p>
                        </div>
                        <div className='relative col-span-1'>
                            <Image src={foodImage} alt='Food Item' quality={100}/>
                            <button type='button' className='absolute bottom-0 right-0 h-10 w-10 bg-white shadow-md flex items-center justify-center rounded-full border hover:bg-gray-100 hover:scale-90 transitions cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                            </button>
                        </div>
                    </div>

                    <div className="col-span-1 p-2 grid grid-cols-3 gap-x-1 border border-red-400 rounded-lg shadow-md hover:scale-[1.03] transitions">
                        <div className="col-span-2 flex flex-col gap-y-1">
                            <h4 className='truncate font-semibold text-sm md:text-lg'>Mutton Kacchi Biriyani</h4>
                            <h5 className='font-light text-xs md:text-base text-gray-600'>From TK 235</h5>
                            <p className='line-clamp-3 text-xs md:text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A doloremque fugiat voluptate, suscipit hic numquam modi aperiam eos porro similique.</p>
                        </div>
                        <div className='relative col-span-1'>
                            <Image src={foodImage} alt='Food Item' quality={100}/>
                            <button type='button' className='absolute bottom-0 right-0 h-10 w-10 bg-white shadow-md flex items-center justify-center rounded-full border hover:bg-gray-100 hover:scale-90 transitions cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                            </button>
                        </div>
                    </div>

                    <div className="col-span-1 p-2 grid grid-cols-3 gap-x-1 border border-red-400 rounded-lg shadow-md hover:scale-[1.03] transitions">
                        <div className="col-span-2 flex flex-col gap-y-1">
                            <h4 className='truncate font-semibold text-sm md:text-lg'>Mutton Kacchi Biriyani</h4>
                            <h5 className='font-light text-xs md:text-base text-gray-600'>From TK 235</h5>
                            <p className='line-clamp-3 text-xs md:text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A doloremque fugiat voluptate, suscipit hic numquam modi aperiam eos porro similique.</p>
                        </div>
                        <div className='relative col-span-1'>
                            <Image src={foodImage} alt='Food Item' placeholder='blur' quality={100}/>
                            <button type='button' className='absolute bottom-0 right-0 h-10 w-10 bg-white shadow-md flex items-center justify-center rounded-full border hover:bg-gray-100 hover:scale-90 transitions cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                            </button>
                        </div>
                    </div>

                    
                </div>
            </div>
            <div className='sticky top-0 p-4 border shadow-md rounded-md flex flex-col gap-y-3'>
                <div className='grid grid-cols-2 bg-gray-100 p-2 gap-x-2 rounded-md text-sm'>
                    <button className='col-span-1 bg-gray-50 py-2 rounded-md hover:border-gray-300 border border-transparent cursor-pointer transitions hover:bg-gray-100 font-semibold text-gray-600 flex flex-col'>
                        <span>Delevery</span>
                        <span className='font-normal'>(Standard 20-25 mins)</span>
                    
                    </button>
                    <button className='col-span-1 bg-gray-50 py-2 rounded-md hover:border-gray-300 border border-transparent cursor-pointer transitions hover:bg-gray-100 font-semibold text-gray-600'>Pickup</button>
                </div>
                <h3 className='text-lg font-medium'>Your items</h3>

                <div className='grid grid-cols-6 gap-2 py-5 border-t border-gray-300'>
                    <div className='col-span-1'>
                        <Image src={productImage} placeholder='blur' alt='product Image' className='h-full w-full object-cover'/>
                    </div>
                    <div className='col-span-5 flex flex-col gap-y-0.5'>
                        <h4 className='truncate md:text-lg font-medium'>Food Item Name</h4>
                        <div className='flex items-center justify-between'>
                            <p className='flex items-center gap-x-1'>
                                <span className='text-[10px] md:text-xs'>Unit Price</span>
                                <span className='text-[10px] md:text-xs text-red-500 font-semibold'>TK 50</span>
                                <del className='text-[10px] md:text-xs text-gray-500'>TK 60</del>
                            </p>
                            <FoodCounter/>
                        </div>
                        <span className='text-xs md:text-sm text-red-600 font-medium'>Total Price TK 500</span>
                    </div>
                </div>

                <div className='grid grid-cols-6 gap-2 py-5 border-t border-gray-300'>
                    <div className='col-span-1'>
                        <Image src={productImage} placeholder='blur' alt='product Image' className='h-full w-full object-cover'/>
                    </div>
                    <div className='col-span-5 flex flex-col gap-y-0.5'>
                        <h4 className='truncate text-lg font-medium'>Food Item Name</h4>
                        <div className='flex items-center justify-between'>
                            <p className='flex items-center gap-x-1'>
                                <span className='text-xs'>Unit Price</span>
                                <span className='text-xs text-red-500 font-semibold'>TK 50</span>
                                <del className='text-xs text-gray-500'>TK 60</del>
                            </p>
                            <FoodCounter/>
                        </div>
                        <span className='text-sm text-red-600 font-medium'>Total Price TK 500</span>
                    </div>
                </div>

                <div className='flex flex-col gap-y-1.5 text-sm text-gray-700 border-t py-5 border-gray-200'>
                    <div className='flex items-center justify-between'>
                        <span>Subtotal</span>
                        <span>Tk 108</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span>Standard delivery</span>
                        <div className='flex items-center gap-x-2'>
                            <del>Tk 108 </del>
                            <span className='text-red-600'>Free</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span>Service fee</span>
                        <span>Tk 3</span>
                    </div>
                </div>

                <div className='flex flex-col gap-y-2 border-t py-5 border-gray-200'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-1'>
                            <span className='text-sm font-medium'>Total</span>
                            <span className='text-xs'>(incl, fees and tax)</span>
                        </div>
                        <span className='text-red-500 font-medium'>Tk 111</span>
                    </div>
                    <button className='text-center text-sm bg-red-500 hover:bg-red-600 transitions cursor-pointer py-3 text-white rounded-md'>Review payment and address</button>
                </div>
            </div>
        </div>
    </div>
  )
}
