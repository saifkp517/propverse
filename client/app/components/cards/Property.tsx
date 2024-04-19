import { Typography } from "@mui/material"
import Image from "next/image"

export default function Property({ name, image, location, area, price, yeild, returntarget }: any) {

    const href = name.split(" ").join("_").toLowerCase();

    return (
        <div>
            <a href={`/commercial_properties/${href}`}>
                <div className="max-w-sm p-2 mt-10 bg-card border-2 border-blue rounded-lg shadow">
                    <div className=" w-full h-48 mx-auto  relative">
                        <Image fill className="rounded-lg object-fill" src={`/${image}`} alt="" />
                    </div>
                    <div className="text-center">
                        <Typography variant="h5" className="font-bold tracking-tight">{name}</Typography>

                        <div className="flex justify-center my-2">
                            <Image className="object-contain" width={15} height={15} alt="" src="/map-icon.png" />
                            <p className="text-xs">{location}</p>
                        </div>

                        <div className="bg-white border border-blue rounded-lg m-4 grid grid-cols-2 gap-0">
                            <div className="flex justify-between m-3">
                                <Image src={"/area.png"} className="object-contain" alt="dollar" width={30} height={30} />
                                <Typography className="text-left text-gray-700 font-bold mt-1">Area</Typography>
                                <Typography className="text-blue font-bold mt-1">{area}</Typography>
                            </div>
                            <div className="flex justify-between m-3">
                                <Image src={"/yeild.png"} className="object-contain" alt="dollar" width={30} height={30} />
                                <Typography className="text-left text-gray-700 font-bold mt-1">Yeild</Typography>
                                <Typography className="text-blue font-bold mt-1">{yeild}</Typography>
                            </div>
                            <div className="flex justify-between m-3">
                                <Image src={"/price.png"} className="object-contain" alt="dollar" width={30} height={30} />
                                <Typography className="text-left text-gray-700 font-bold mt-1">Price</Typography>
                                <Typography className="text-blue font-bold mt-1">{price}</Typography>
                            </div>
                            <div className="flex justify-between m-3">
                                <Image src={"/returntarget.png"} className="object-contain" alt="dollar" width={30} height={30} />
                                <Typography className="text-left text-gray-700 text-sm font-bold px-2 mt-1">Return Target</Typography>
                                <Typography className="text-blue font-bold mt-1 break-all">{returntarget}</Typography>
                            </div>
                        </div>

                        <a href={`/commercial_properties/${href}`}>
                            <button type="button" className="focus:outline-none text-white hover:text-blue bg-blue hover:bg-transparent hover:ring-1 hover:ring-blue font-medium rounded-xl text-sm px-10 py-3 mb-2 ">View Opportunity</button>
                        </a>


                    </div>
                </div>
            </a>
        </div>
    )
}