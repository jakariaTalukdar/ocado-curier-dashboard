import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./globals.css";

export default function notfound() {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
      <Image src="/images/not-found.png" alt='not found' height={500} width={500} />
      <Link href='/' className='px-4 py-1 bg-red-600 rounded-md font-semibold text-white'>Back to Home</Link>
    </div>
  )
}
