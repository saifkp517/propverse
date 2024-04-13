import { Typography } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from "next/image"

export default function newProperty({ name, image, location, funded, invamt, irr }: any) {

    const href = name.split(" ").join("_").toLowerCase();

    return (



        <div>
            <a href={`/commercial_properties/${href}`}>
                <div className="mt-10 bg-card border shadow-xl border-green rounded-lg relative z-20">


                    <div className="flex flex-col  items-center md:flex-row">
                        <div className=" w-11/12 md:w-4/5 lg:w-96 m-4 h-48  relative">
                            <Image fill unoptimized className="object-fill rounded-lg" src={`/${image}`} alt="" />
                        </div>
                        <div className="flex flex-col justify-between px-4">
                            <h5 className="mb-2 text-2xl font-bold font-sans  text-black ">{name}</h5>
                            <div className="flex">
                                <LocationOnIcon className=" text-red-500" />
                                <p className="text-md mb-3 font-bold font-sans  text-black ">{location}</p>
                            </div>

                            <div className="w-5/6 mx-auto">
                                <div className="bg-gray-300  h-1.5">
                                    <div className="bg-green h-1.5 rounded-r-3xl" style={{ width: `${funded}%` }}></div>
                                </div>
                                <div className="mt-2 flex items-center justify-between text-xs">
                                    <div className="text-gray-600">Funded {funded}%</div>
                                    <div className="text-gray-600">100%</div>
                                </div>
                            </div>
                            <div className="grid mt-4 grid-cols-3 gap-5 mb-2 text-md font-bold font-sans leading-tight">
                                <div className="text-center ">
                                    <Typography variant="h5" className="font-bold text-lg text-gray-600">{invamt} Lakhs</Typography>
                                    <sub className=" text-xs">Investment Amount</sub>
                                </div>
                                <div className="text-center ">
                                    <Typography variant="h5" className="font-bold text-lg text-gray-600">{irr}%</Typography>
                                    <sub className="text-xs">IRR</sub>
                                </div>
                                <div className="text-center mt-2">
                                    <div className="flex space-x-1">
                                        <div className="bg-green h-2 w-4"></div>
                                        <div className="bg-green h-2 w-4"></div>
                                        <div className=" bg-red-300 h-2 w-4"></div>
                                        <div className="bg-red-500 h-2 w-4"></div>
                                        <div className="bg-red-700 h-2 w-4"></div>
                                    </div>
                                    <sub>Risk Factor</sub>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </a>
        </div>


    )
}