import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";
import MyNav from "../components/Navbar";
import BlogCard from "../components/cards/BlogCard";
import Footer from "../components/Footer";

export default function KnowledgeBase() {

  return (
    <div>
      <MyNav />
      <div className="grid grid-cols-2 max-w-2xl my-16 mx-auto">
        <Link className="mx-auto" href={'/knowledge-base'}>
        <button type="button" className="focus:outline-none text-white  bg-blueTheme  hover:ring-blueTheme font-medium rounded-xl text-md lg:text-3xl px-16 lg:px-24 py-4 mb-2">Blogs</button>
        </Link>
        <Link className="mx-auto" href={'/credit-risk-analysis'}>
        <button type="button" className="focus:outline-none text-blueTheme bg-transparent ring-1 ring-blueTheme font-medium rounded-xl text-md lg:text-3xl px-5 py-4 mb-2">Credit Risk Analysis</button>
        </Link>
      </div>  
      <form className="flex items-center max-w-3xl mx-auto">
        <label className="sr-only">Search</label>
        <div className="relative w-full mx-8">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-blueTheme" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="simple-search" className="bg-gray-50 border border-blueTheme text-gray-900 text-sm rounded-xl focus:ring-blueTheme-500 focus:border-blueTheme block w-full ps-10 p-2.5  " placeholder="Search Property..." required />
        </div>
      </form>
      <section className="my-20 mx-4 lg:mx-36 grid grid-cols-1 gap-4 lg:grid-cols-2 place-items-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </section>

      <Footer />

    </div>
  );
}
