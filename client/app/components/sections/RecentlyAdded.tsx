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
    const [propDetails, setPropDetails] = useState([])


    useEffect(() => {
        if (size.width! < 940) {
            setNoCards(1)
        }
        else {
            setNoCards(3)
        }
    })

    useEffect(() => {
        axios.get(`${process.env.SERVER_DOMAIN}/properties`)
            .then(res => {
                setPropDetails(res.data.properties)
            })
    }, [])


    return (
        <div>
            <section className="mt-24 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
                <div className="flex justify-between">
                    <h1 className="text-2xl lg:text-4xl  o text-gray-600 tracking-tighter font-bold my-auto">Recently Added</h1>

                    <Link className="my-auto" href={'/properties'}>
                        <h1 className="text-blueTheme font-bold no-underline hover:underline">View All</h1>
                    </Link>
                </div>
            </section>
            <div className="mx-auto max-w-80 lg:max-w-screen-lg">
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