import React from 'react'

export default function Button({text}) {
  return (
    <button className='px-4 py-1 rounded-md text-white font-semibold bg-red-600'>{text ? text : 'Nothing'}</button>
  )
}
