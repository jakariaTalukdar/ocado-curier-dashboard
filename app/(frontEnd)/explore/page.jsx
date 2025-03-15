import Link from "next/link";
import Image from "next/image";
import { regions } from "@/data/regions";

export const metadata = {
  title : "Explore food of Bangladesh"
}

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-2">Taste of Bangladesh</h1>
      <p className="text-center text-gray-600 mb-8">Click on a region to explore its traditional food</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {regions.map((region) => (
          <Link key={region.slug} href={`/explore/${region.slug}`} className="block bg-white shadow-lg rounded-lg hover:scale-105 transition">
            <Image src={region.image} width={500} height={500} alt={region.name} className="w-full h-40 object-cover rounded-t-md" />
            <h3 className="text-xl font-semibold my-3 text-center">{region.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
