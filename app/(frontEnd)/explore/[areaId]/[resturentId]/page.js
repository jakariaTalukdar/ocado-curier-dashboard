import { foodItems } from '@/data/food';
import React from 'react'

export default function page({params}) {
    const {resturentId} = params;
    console.log(foodItems);
    
  return (
    <div>page</div>
  )
}
