import { Typography } from "@mui/material"
import Image from "next/image"

export default function BlogCard() {
    return (
        <div className="max-w-xl max-h-fit mb-10 bg-card border-2 border-blue rounded-lg shadow">
            <a href="#">
                <Image width={600} height={600} className="rounded-2xl object-cover w-full h-72 p-2" src="https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/listingbanner/540x420/1638176089-embassy-tech-square-bangalore-1.jpg" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-bold text-gray-500">Sat Dec 30 2023</p>
                <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center  px-3 py-2 text-sm font-medium text-end text-blue bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    )
}