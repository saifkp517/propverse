
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from "next/image"

export default function newProperty({ name, image, location, funded, invamt, irr }: any) {

    const href = name.split(" ").join("_").toLowerCase();

    return (
        <div className="mb-24 mx-auto max-h-full">
            <div className="static mt-10 w-80 bg-card border shadow-xl border-blueTheme rounded-lg  ">
                <div className="flex flex-col items-center">
                    <div className=" w-11/12 m-4 h-48  relative">
                        <Image fill unoptimized className="object-fill rounded-lg" src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/${image}`} alt="" />
                    </div>
                    <div className="flex flex-col justify-between px-4">
                        <h5 className="mb-2 text-2xl font-bold    tracking-tighter text-gray-600 line-clamp-1">{name}</h5>
                        <div className="flex">
                            <LocationOnIcon className=" text-red-500" />
                            <p className="text-md mb-3     tracking-tighter  text-gray-400 ">{location}</p>
                        </div>

                        <div className="w-5/6 mx-auto">
                            <div className="bg-gray-300  h-1.5">
                                <div className="bg-blueTheme h-1.5 rounded-r-3xl" style={{ width: `${funded}%` }}></div>
                            </div>
                            <div className="mt-2 flex items-center justify-between text-xs">
                                <div className="text-gray-600">Funded {funded}%</div>
                                <div className="text-gray-600">100%</div>
                            </div>
                        </div>
                        <div className="grid mt-4 grid-cols-3 gap-5 text font-bold    tracking-tighter leading-tight">
                            <div className="text-center ">
                                <h1 className="font-bold text-lg text-gray-600">{invamt} Lakhs</h1>
                            </div>
                            <div className="text-center ">
                                <h1 className="font-bold text-lg text-gray-600">{irr}%</h1>
                            </div>
                            <div className="text-center mt-2">
                                <div className="flex space-x-1">
                                    <div className="bg-green-500 h-2 w-4"></div>
                                    <div className="bg-green-300 h-2 w-4"></div>
                                    <div className=" bg-red-300 h-2 w-4"></div>
                                    <div className="bg-red-500 h-2 w-4"></div>
                                    <div className="bg-red-700 h-2 w-4"></div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-5 mb-4 text-md font-bold font-robot tracking-tight leading-tight">
                            <div className="text-center ">
                                <sub className="text-xs">Investment Amount</sub>
                            </div>
                            <div className="text-center ">
                                <sub className="text-xs">IRR</sub>
                            </div>
                            <div className="text-center">
                                <sub className="text-xs">Risk Factor</sub>
                            </div>
                        </div>
                        <a href={`/commercial_properties/${href}`}>
                            <button className='relative mx-16 mb-4 py-2 px-4 rounded-lg bg-blueTheme text-white font-robot tracking-tight'>

                                View Opportunity?

                                <span className="absolute top-0 right-0 inline-flex rounded-full h-2 w-2 bg-white">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                </span>
                            </button>
                        </a>

                    </div>
                </div>
            </div>
        </div >


    )
}
