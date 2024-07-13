
import { createClient } from "contentful";
import { Entry, EntryFields } from 'contentful';
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";
import MyNav from "../components/Navbar";
import BlogCard from "../components/cards/BlogCard";
import Footer from "../components/Footer";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})


export default async function KnowledgeBase() {

  const response = await client.getEntries({ content_type: "PropertyVerse" })
  const blogs = response.items;


  return (
    <div>
      <p className="my-20 font-bold text-3xl text-center text-gray-800">Read More about Fractional Ownership</p>
      <form className="flex items-center max-w-3xl mx-auto">
        <label className="sr-only">Search</label>
        <div className="relative w-full mx-8">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-blueTheme" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="simple-search" className="bg-gray-50 border border-blueTheme text-gray-900 text-sm rounded-xl focus:ring-blueTheme-500 focus:border-blueTheme block w-full ps-10 p-2.5  " placeholder="Search Property..." required />
        </div>
      </form>
      <section className="my-20 mx-4 lg:mx-36 grid grid-cols-1 lg:grid-cols-2 place-items-center">
        {blogs.map((blog: any) => (
          <div key={blog.sys.id}>
            <BlogCard fields={blog.fields} />
          </div>
        ))}
      </section>


    </div>
  );
}
