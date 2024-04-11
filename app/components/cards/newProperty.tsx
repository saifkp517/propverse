import { Typography } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from "next/image"

export default function newProperty() {
    return (

        <div className="mt-10 bg-card border shadow-xl border-green rounded-lg relative z-20">


            {/* <div className="absolute bg-red-600 rounded-lg -top-3 inset-x-24 ">
                <Typography className="text-center text-xs text-white font-bold py-1">Pre-Release CRE</Typography>
            </div>
            <div className="m-2">
                <Image width={500} height={500} className="rounded-lg object-contain" src="https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/listingbanner/540x420/1638176089-embassy-tech-square-bangalore-1.jpg" alt="" />
            </div>
            <div className="text-center">
                <Typography variant="h5" className="font-bold tracking-tight">Embassy Tech Square</Typography>

                <div className="flex justify-center my-2">
                    <Image className="object-contain" width={15} height={15} alt="" src="/map-icon.png" />
                    <p className="text-xs">Outer, Ring Road Bangalore</p>
                </div>

                <div className="bg-white border border-green rounded-lg m-4 grid grid-cols-2 gap-4">
                    <div className="">
                        <div className="flex gap-2 mx-3 mt-3">
                            <Image src={"/dollar.png"} className="object-contain" alt="dollar" width={20} height={20} />
                            <Typography className="text-left text-xs font-bold leading-tight">High <br />Returns</Typography>
                        </div>
                        <Typography variant="h5" className="text-green font-bold mb-2">15.9%</Typography>
                    </div>
                    <div className="">
                        <div className="flex gap-2 mx-3 mt-3">
                            <Image src={"/yeild.png"} className="object-contain" alt="dollar" width={20} height={20} />
                            <Typography className="text-left text-xs font-bold leading-tight">High Rental Yeilds</Typography>
                        </div>
                        <Typography variant="h5" className="text-green font-bold mb-2">15.9%</Typography>
                    </div>

                </div>

                <button type="button" className="focus:outline-none text-white hover:text-green bg-green hover:bg-transparent hover:ring-1 hover:ring-green font-medium rounded-xl text-sm px-10 py-3 mb-2 ">Interested?</button>

            </div> */}
            <div className="flex flex-col  items-center md:flex-row  ">
                <div className="w-full md:w-4/5 lg:w-2/5 p-4">
                    <Image width={500} height={500} className="object-cover rounded-2xl" src="https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/listingbanner/540x420/1638176089-embassy-tech-square-bangalore-1.jpg" alt="" />
                </div>
                <div className="flex flex-col justify-between px-3 py-4">
                    <h5 className="mb-2 text-2xl font-bold font-sans  text-black ">Brigade Tech Park</h5>
                    <div className="flex">
                        <LocationOnIcon className=" text-red-500" />
                        <p className="text-md mb-3 font-bold font-sans  text-black ">Location</p>
                    </div>

                    <div className="w-5/6 mx-auto">
                    <div className="bg-gray-300  h-1.5">
                        <div className="bg-green h-1.5 rounded-r-3xl w-1/2"></div>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs">
                        <div className="text-gray-600">Funded 45%</div>
                        <div className="text-gray-600">100%</div>
                    </div>
                    </div>
                    <div className="grid mt-4 grid-cols-3 gap-5 mb-2 text-md font-bold font-sans leading-tight">
                        <div className="text-center ">
                            <Typography variant="h5" className="font-bold text-base text-gray-600">25 Lakhs</Typography>
                            <sub>Investment Amount</sub>
                        </div>
                        <div className="text-center ">
                            <Typography variant="h5" className="font-bold text-base text-gray-600">16%</Typography>
                            <sub>IRR</sub>
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

    )
}