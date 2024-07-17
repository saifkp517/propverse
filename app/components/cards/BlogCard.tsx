import { Typography } from "@mui/material"
import Image from "next/image"

export default function BlogCard({fields}) {

    return (
        <div className="max-w-lg mb-10  rounded-lg">
            <a href="#">
                <Image width={600} height={600} className="rounded-2xl object-cover w-full h-72 p-2" src={`https:`+fields.thumbnail.fields.file.url} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl line-clamp-2 font-bold tracking-tight text-gray-900">{fields.title}</h5>
                </a>
                <p className="mb-3 font-bold text-gray-500">{new Date(fields.date).toDateString()}</p>
                <p className="mb-3 font-normal text-gray-700 line-clamp-3">{fields.subheading}</p>
                <a href={`/blog/${fields.slug}`} className="inline-flex items-center  px-3 py-2 text-sm font-medium text-end text-blueTheme bg-blueTheme-700 rounded-lg hover:bg-blueTheme-800 focus:ring-4 focus:outline-none focus:ring-blueTheme-300 dark:bg-blueTheme-600 dark:hover:bg-blueTheme-700 dark:focus:ring-blueTheme-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    )
}