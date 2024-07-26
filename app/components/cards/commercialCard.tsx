"use client"

import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useSession } from "next-auth/react";
import Image from "next/image"

export default function commercialCard({ id, building_name, images, location, funded, minimum_investment, irr }: any) {

    const { data: session, status } = useSession();
    const href = building_name.split(" ").join("_").toLowerCase();


    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
  <div className="relative h-64">
    <Image 
      fill 
      unoptimized 
      className="object-cover" 
      src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/${images[0]}`} 
      alt={building_name}
    />
    <div className="absolute top-4 right-4">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
        <span className="mr-1.5 h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
        Live
      </span>
    </div>
  </div>
  
  <div className="p-6">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-gray-900 truncate">{building_name}</h3>
      <div className="flex items-center text-gray-600">
        <LocationOnIcon className="h-5 w-5 mr-1" />
        <p className="text-sm truncate">{location}</p>
      </div>
    </div>
    
    <div className="mb-6">
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full" 
          style={{ width: `${funded}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>Funded {funded}%</span>
        <span>100%</span>
      </div>
    </div>
    
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="text-center">
        <p className="text-2xl font-bold text-gray-900">{minimum_investment}</p>
        <p className="text-sm text-gray-600">Min. Investment (Lakhs)</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold text-gray-900">{irr}%</p>
        <p className="text-sm text-gray-600">IRR</p>
      </div>
      <div className="text-center">
        <div className="flex justify-center space-x-1 mb-2">
          {['bg-green-500', 'bg-green-300', 'bg-yellow-300', 'bg-red-300', 'bg-red-500'].map((color, index) => (
            <div key={index} className={`h-2 w-4 ${color} ${index < 2 ? 'opacity-100' : 'opacity-30'}`}></div>
          ))}
        </div>
        <p className="text-sm text-gray-600">Risk Factor</p>
      </div>
    </div>
    
    <a href={`/commercial_properties/${id}?name=${name}`} className="block">
      <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
        View Project
      </button>
    </a>
  </div>
</div>


    )
}
