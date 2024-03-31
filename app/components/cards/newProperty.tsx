import { Typography } from "@mui/material"
import Image from "next/image"

export default function newProperty() {
    return (


        <div className="max-w-sm p-2 mt-10 bg-card border border-green rounded-lg shadow relative z-20">
            <div className="absolute bg-red-600 rounded-lg -top-3 inset-x-24 ">
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

            </div>
        </div>

    )
}