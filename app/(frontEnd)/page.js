import Button from "@/components/Button";
import SearchButton from "@/components/SearchButton";
import Image from "next/image";
import {regions} from '@/data/regions'
import Link from "next/link";

export const metaData = {
  title: 'Hello world'
}

export default function Home() {
  return (
    <div className="flex flex-col gap-y-20">

      <div className="w-full relative min-h-[96] px-2 md:px-52">
        <Image src='/images/banner3.jpg' alt="Banner" layout="fill" objectFit="cover" className="z-[-1]" />
        <div className="px-3 py-5 md:p-16 float-end my-32 border text-white backdrop-blur-xl md:w-3xl rounded-lg flex flex-col gap-y-3">
          <h1 className="text-2xl md:text-4xl font-bold">Welcome to most popular food delevery website in Bangladesh</h1>
          <p>Select you city and find popular food in you city</p>
          <form className="w-full flex gap-x-2">
            <input type="text" name="" id="" placeholder="Enter your Address" className="border flex-grow outline-gray-300 px-3 py-2 rounded text-gray-200" />
            <SearchButton />
          </form>
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-8 bg-gray-100">
          <div className="flex flex-col mt-5">
            <span className="text-center text-lg md:text-3xl font-semibold py-3">Years of Experience, One Perfect Dish!</span>
            <span className="text-center text-gray-700 text-xs md:text-base">Our chef's expertise ensures that every meal is an unforgettable experience.</span>
        </div>
        <div className="w-full relative min-h-[450px] md:px-52">
          <Image src='/images/chef.webp' alt="Banner" layout="fill" objectFit="cover"/>
          
        </div>
      </div>

      <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-2">Taste of Bangladesh</h1>
      <p className="text-center text-gray-600 mb-8">Click on a region to explore its traditional food</p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
        {regions.map((region) => (
          <Link key={region.slug} href={`/foods/${region.slug}`} className="block bg-white shadow-lg rounded-lg hover:scale-105 transition">
            <Image src={region.image} width={200} height={150} alt={region.name} className="w-full h-40 object-cover rounded-t-md" />
            <h3 className="text-xl font-semibold my-3 text-center">{region.name}</h3>
          </Link>
        ))}
      </div>
      <Link href="/explore" className="w-full flex items-center justify-center mt-10">
        <Button text="View All" className="mx-auto"/>
      </Link>

    </div>


      

    </div>
  );
}
