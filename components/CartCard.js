"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Counter from '@/components/Counter'

export default function cartCard() {
  const [selectItem, setSelectItem] = useState(false);
  const handleToggle = () => {
    setSelectItem(prev => !prev);
  };
  return (
    <label onClick={()=> setSelectItem(!selectItem)} htmlFor='aaa' className={`${selectItem ? 'bg-red-100 card-shadow' : ''} flex items-center gap-x-2 py-4 px-5`}>
        <input type="checkbox" checked={selectItem} onChange={handleToggle} name="" id="aaa" />
        <Image src="/images/pizza.jpg" alt='product Name' height={100} width={100}/>
        <div className='self-start flex justify-between flex-grow truncate'>
            <p className='text-lg font-medium line-clamp-1 max-w-1/3 truncate'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsum assumenda praesentium facilis libero. Corporis repellat fugit officiis iure possimus voluptatum ratione pariatur expedita nostrum, quisquam, sapiente eum! Dolorem ullam porro nulla architecto saepe assumenda excepturi! Voluptas officiis aperiam perferendis, labore culpa tenetur ipsa libero iste aspernatur? Minima, ipsa quasi?</p>
            <Counter/>
            <p className='text-lg font-medium line-clamp-1 flex items-center gap-x-1'>
            <Image src="/images/bdt.png" alt='bangladeshi taka' height={13} width={13} />
            <span>120</span>
            </p>
        </div>
        <button className='bg-red-600 text-white px-1 py-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
        </button>
    </label>
  )
}
