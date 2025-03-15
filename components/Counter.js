"use client"
import React, { useState } from 'react'

export default function page() {
    const [count, setCount] = useState(1);
    const handleIncrement = () => setCount(count + 1);
    const handleDicrement = () => setCount(count > 1 ? count - 1 : 1)
  return (
    <div className='bg-gray-50 flex'>
        <button onClick={handleDicrement} type='button' className='bg-gray-100 h-7 w-7 flex items-center justify-center border'>-</button>
        <input type="number" name="" id="" value={count} className={`${count.toString().length > 1 ? 'w-16' : 'w-10'} bg-gray-100 h-7 flex items-center justify-center border text-center outline-0 p-1`} />
        <button onClick={handleIncrement} type='button' className='bg-gray-100 h-7 w-7 flex items-center justify-center border'>+</button>
    </div>
  )
}
