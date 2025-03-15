import React from 'react'

export default function SearchButton({bg, text}) {
  return (
    <button className={`${bg ? bg : 'bg-red-600 hover:bg-red-500'} ${text ? text : 'text-white'} flex items-center gap-x-2 px-4 py-1 rounded-md font-semibold transitions`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <span>Search</span>
    </button>
  )
}
