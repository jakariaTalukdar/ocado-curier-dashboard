import Button from "@/components/Button";
import SearchButton from "@/components/SearchButton";
import Image from "next/image";

export const metaData = {
  title: 'Hello world'
}

export default function Home() {
  return (
    <div className="flex flex-col gap-y-20">
      <div className="w-full relative min-h-96 px-52">
        <Image src='/images/banner3.jpg' alt="Banner" layout="fill" objectFit="cover" className="z-[-1]" />
        <div className="p-16 float-end my-20 border text-white backdrop-blur-xl w-3xl rounded-lg flex flex-col gap-y-3">
          <h1 className="text-4xl font-bold">Welcome to most popular food delevery website in Bangladesh</h1>
          <p>Select you city and find popular food in you city</p>
          <form className="w-full flex gap-x-2">
            <input type="text" name="" id="" placeholder="Enter your Address" className="border flex-grow outline-gray-300 px-3 py-2 rounded text-gray-200" />
            <SearchButton />
          </form>
        </div>
      </div>
      <div className="w-full relative min-h-96 px-52">
        <Image src='/images/banner.jpg' alt="Banner" layout="fill" objectFit="cover" className="z-[-1]" />
        <div className="p-16 my-20 border text-white backdrop-blur-xl w-3xl rounded-lg flex flex-col gap-y-3">
          <h1 className="text-4xl font-bold">Welcome to most popular food delevery website in Bangladesh</h1>
          <p>Select you city and find popular food in you city</p>
          <form className="w-full flex gap-x-2">
            <input type="text" name="" id="" placeholder="Enter your Address" className="border flex-grow outline-gray-300 px-3 py-2 rounded text-gray-200" />
            <SearchButton />
          </form>
        </div>
      </div>

      

    </div>
  );
}
