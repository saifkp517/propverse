import { Typography } from "@mui/material"
import Image from "next/image"

export default function Villa() {
    return (


        <div className="max-w-sm p-2 mt-10 bg-card border-2 border-blueTheme rounded-lg shadow">
            <div className="m-2">
                <Image width={400} height={400} className="rounded-lg object-contain" src="https://propmedia1.propertyshare.in/website/property/d3Joby9VTnlncndkZit1ZlAxQ2ZMdz09/media-v2/images/listingbanner/540x420/1638176089-embassy-tech-square-bangalore-1.jpg" alt="" />
            </div>
            <div className="text-center">
                <Typography variant="h5" className="font-bold tracking-tight">Embassy Tech Square</Typography>

                <div className="flex justify-center my-2">
                    <Image className="object-contain" width={15} height={15} alt="" src="/map-icon.png" />
                    <p className="text-xs">Outer, Ring Road Bangalore</p>
                </div>

                <div className="bg-white border border-blueTheme rounded-lg m-4 grid grid-cols-2 gap-0">
                        <div className="flex justify-between m-3">
                            <Image src={"/area.png"} className="object-contain" alt="dollar" width={30} height={30} />
                            <Typography className="text-left text-gray-700 font-bold mt-1">Area</Typography>
                            <Typography className="text-blueTheme font-bold mt-1">15.9%</Typography>
                        </div>
                        <div className="flex justify-between m-3">
                            <Image src={"/yeild.png"} className="object-contain" alt="dollar" width={30} height={30} />
                            <Typography className="text-left text-gray-700 font-bold mt-1">Yeild</Typography>
                            <Typography className="text-blueTheme font-bold mt-1">15.9%</Typography>
                        </div>
                        <div className="flex justify-between m-3">
                            <Image src={"/price.png"} className="object-contain" alt="dollar" width={30} height={30} />
                            <Typography className="text-left text-gray-700 font-bold mt-1">Price</Typography>
                            <Typography className="text-blueTheme font-bold mt-1">15.9%</Typography>
                        </div>
                        <div className="flex justify-between m-3">
                            <Image src={"/returntarget.png"} className="object-contain" alt="dollar" width={30} height={30} />
                            <Typography className="text-left text-gray-700 text-sm font-bold px-2 mt-1">Return Target</Typography>
                            <Typography className="text-blueTheme font-bold mt-1">15.9%</Typography>
                        </div>


                </div>

                <button type="button" className="focus:outline-none text-white hover:text-blueTheme bg-blueTheme hover:bg-transparent hover:ring-1 hover:ring-blueTheme font-medium rounded-xl text-sm px-10 py-3 mb-2 ">View Opportunity</button>

            </div>
        </div>

    )
}