"use client"
import * as React from 'react';
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Card from "../cards/newProperty";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function RecentlyAdded() {

    const propDetails = [
        {
            name: "Brigade Tech Park",
            image: "briagadetechpark1.png",
            location: "Whitefield, Bangaluru",
            funded: 4,
            invamt: "25",
            irr: "16.13"
        },
        {
            name: "Sky One Opportunity",
            image: "skyoneopportunity.png",
            location: "Viman Nagar, Pune",
            funded: 5,
            invamt: "25",
            irr: "15.1"
        },
    ]

    return (
        <div>
            <section className="mt-36 px-24 max-w-screen-xl mx-auto">

                <div className="flex justify-between">
                    <h1 className="text-4xl font-roboto text-gray-800 tracking-tighter font-bold my-auto">Recently Added</h1>

                    <Link className="my-auto" href={'/properties'}>
                        <h1 className="text-blue font-bold no-underline hover:underline">See All</h1>
                    </Link>
                </div>
            </section>
            <div className="mx-auto max-w-screen-md">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={2}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        propDetails.map(property => (
                            <div>
                                <SwiperSlide>
                                    <div>
                                        <Card
                                            name={property.name}
                                            image={property.image}
                                            location={property.location}
                                            funded={property.funded}
                                            invamt={property.invamt}
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