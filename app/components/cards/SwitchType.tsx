"use client"

import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";
import { usePathname } from 'next/navigation'

export default function SwitchTypes() {

    const pathname = usePathname()

    return (
        <div>
            <div className="grid grid-cols-2 max-w-2xl my-8 mx-auto">
                <Link className="mx-auto" href={'/properties'}>
                    <button type="button" className={`focus:outline-none ${pathname.match('properties') ? "text-white bg-blueTheme" : "text-blueTheme bg-transparent ring-1 ring-blueTheme"}  font-medium rounded-xl text-md lg:text-xl px-4 lg:px-8 py-2 lg:py-4 mb-2`}>Live Properties</button>
                </Link>
                <Link className="mx-auto" href={'/villa'}>
                    <button type="button" className={`focus:outline-none text-blueTheme ${pathname.match('villa') ? "text-white bg-blueTheme" : "text-blueTheme bg-transparent ring-1 ring-blueTheme"}   font-medium rounded-xl text-md lg:text-xl px-4 lg:px-2 py-2 lg:py-4 mb-2`}>Completed Properties</button>
                </Link>
            </div>

        </div>
    );
}
