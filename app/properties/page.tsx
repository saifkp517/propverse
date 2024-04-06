import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Property from "../components/cards/Property";
import Footer from "../components/Footer";



export default function Home() {


  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 max-w-2xl my-16 mx-auto">
        <Link className="mx-auto" href={'/properties'}>
        <button type="button" className="focus:outline-none text-white  bg-blue  hover:ring-blue font-medium rounded-xl text-md lg:text-3xl px-8 py-4 mb-2 ">Retail Properties</button>
        </Link>
        <Link className="mx-auto" href={'/villa'}>
        <button type="button" className="focus:outline-none text-green bg-transparent ring-1 ring-green font-medium rounded-xl text-md lg:text-3xl px-8 py-4 mb-2">Villa Properties</button>
        </Link>
      </div>  
      <form className="flex items-center max-w-2xl mx-auto">
        <label className="sr-only">Search</label>
        <div className="relative w-full mx-8">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-blue" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="simple-search" className="bg-gray-50 border border-blue text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue block w-full ps-10 p-2.5  " placeholder="Search Property..." required />
        </div>
      </form>
      <section className="my-8 mx-4 lg:mx-28 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

        <div className="mx-auto"><Property /></div>
        <div className="mx-auto"><Property /></div>
        <div className="mx-auto"><Property /></div>
        <div className="mx-auto"><Property /></div>
        <div className="mx-auto"><Property /></div>
        <div className="mx-auto"><Property /></div>
      </section>

      <Footer />

    </div>
  );
}
