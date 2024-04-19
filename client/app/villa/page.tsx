import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";
import MyNav from "../components/Navbar";
import Villa from "../components/cards/Villa";
import Footer from "../components/Footer";
import SwitchTypes from "../components/cards/SwitchType";



export default function Home() {


  return (
    <div>
      <MyNav />
      <SwitchTypes />
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
        {/* <div className="mx-auto"><Villa /></div>
        <div className="mx-auto"><Villa /></div>
        <div className="mx-auto"><Villa /></div>
        <div className="mx-auto"><Villa /></div>
        <div className="mx-auto"><Villa /></div>
        <div className="mx-auto"><Villa /></div> */}
        <h1 className="text-blue text-center col-span-3 font-bold text-xl h-48">No Properties listed currently..</h1>
      </section>

      <Footer />

    </div>
  );
}
