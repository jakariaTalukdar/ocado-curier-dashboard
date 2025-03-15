import React from 'react'

export default function Button({text}) {
  return (
    <button className='px-4 py-1 rounded-md text-white font-semibold bg-red-600 hover:bg-red-500 transitions cursor-pointer'>{text ? text : 'Nothing'}</button>
  )
}
