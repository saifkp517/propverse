"use client";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useSession } from "next-auth/react";
import Image from "next/image"

interface HolidayCardProps {
    id: string;
    name: string;
    image: string;
    location: string;
    persharecost: number;
    rental_yeild: number;
    commencement_date: Date;
}

const HolidayCard: React.FC<HolidayCardProps> = ({
    id,
    name,
    image,
    location,
    persharecost,
    rental_yeild,
    commencement_date
}) => {
    const { data: session, status } = useSession();
    const href = name.split(" ").join("_").toLowerCase();

    return (
        <div className="mx-auto max-h-full">
            <div className="static mt-10 w-80 bg-white border shadow-md shadow-gray-500 rounded-xl">
                <div className="flex flex-col items-center p-1">
                    <div className="w-full h-48 relative">
                        <Image fill unoptimized className=" object-fill rounded-lg" src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/${image}`} alt="" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="flex justify-between mt-2">
                            <h5 className=" text-lg font-bold tracking-tighter text-gray-600 line-clamp-1">{name}</h5>
                            <div className="flex justify-end">
                                <span className="inline-flex gap-x-1 items-center bg-gray-50 border border-green-800 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full w-fit">
                                    <span className="inline-flex rounded-full h-2 w-2 bg-green-400">
                                        <span className="animate-ping inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    </span>
                                    Live
                                </span>
                            </div>
                        </div>

                        <div className="flex my-2">
                            <LocationOnIcon className=" text-red-500" />
                            <p className="text-xs mt-1 line-clamp-1 tracking-tighter  text-gray-600 ">{location}</p>
                        </div>

                        {/* <div className="w-11/12 mx-auto">
                            <div className="bg-gray-300  h-1">
                                <div className="bg-blueTheme h-1 rounded-r-3xl" style={{ width: `${funded}%` }}></div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                                <div className="text-gray-600">Funded {funded}%</div>
                                <div className="text-gray-600">100%</div>
                            </div>
                        </div> */}
                        <div className="my-3">
                            <div className="text-center grid grid-cols-3 font-bold tracking-tighter leading-tight">
                                <div className="">
                                    <p className="font-bold text-lg text-gray-600">{persharecost} Lakhs</p>
                                    <p className="text-xs font-medium">Per.Share Cost</p>
                                </div>
                                <div className="">
                                    <p className="font-bold text-lg text-gray-600">{rental_yeild}%</p>
                                    <p className="text-xs font-medium">Rental Yeild</p>
                                </div>
                                <div className="text-center">
                                    <div className="flex space-x-1 mt-3 mb-2">
                                        <div className="bg-green-500 h-2 w-4"></div>
                                        <div className="bg-green-300 h-2 w-4"></div>
                                        <div className=" bg-red-300 h-2 w-4"></div>
                                        <div className="bg-red-500 h-2 w-4"></div>
                                        <div className="bg-red-700 h-2 w-4"></div>
                                    </div>
                                    <p className="text-xs font-medium">Risk Factor</p>
                                </div>
                            </div>

                        </div>



                    </div>
                    <div className="w-11/12 mx-auto my-2">
                        {/* <a className='' href={status === "authenticated" ? `/commercial_properties/${id}?name=${name}` : '/login'}> */}
                        <a className='' href={`/holiday_homes/${id}?name=${name}`}>
                            <button className='relative py-2 px-4 rounded-lg bg-blueTheme hover:opacity-75 focus:border-black focus:border-2 text-white font-robot tracking-tight w-full'>

                                View Project
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default HolidayCard;