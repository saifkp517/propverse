"use client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import axios from 'axios'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowSize } from "@uidotdev/usehooks";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Card from "../cards/newProperty";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function RecentlyAdded() {

    const size = useWindowSize();
    const [NoCards, setNoCards] = useState(3);
    const [propDetails, setPropDetails] = useState<any>([]);

    useEffect(() => {
        if (size.width! < 1000 && size.width! > 750) {
            setNoCards(2)
        }
        else if (size.width! < 750) {
            setNoCards(1)
        }
        else
            setNoCards(3)
    }, [size.width])

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/properties`)
            .then(res => {
                setPropDetails(res.data.properties)
                console.log(res.data.properties)
            })
    }, [])

    return (
        <div className='select-none'>
            <section className=" mt-56 px-8 md:px- lg:px-24 max-w-screen-xl mx-auto">
                <h1 className="text-2xl lg:text-5xl text-gray-800 tracking-tighter font-bold my-auto text-center mb-16">Recently Added</h1>
                <div className='text-center'>
                    <Link className="my-auto" href={'/properties'}>
                        <h1 className="text-blueTheme font-bold no-underline hover:underline">View All</h1>
                    </Link>
                </div>
            </section>
            <div className="mx-auto max-w-80 md:max-w-screen-md lg:max-w-screen-lg">
                <Swiper
                    className=''
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={NoCards}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        propDetails.map((property: any) => (
                            <div key={property.building_name} >
                                <SwiperSlide>
                                    <div>
                                        <Card
                                            id={property.id}
                                            name={property.building_name}
                                            image={property.images[0]}
                                            location={property.location}
                                            funded={"8"}
                                            invamt={property.minimum_investment}
                                            irr={property.irr}
                                        />
                                    </div>
                                </SwiperSlide>
                            </div>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}