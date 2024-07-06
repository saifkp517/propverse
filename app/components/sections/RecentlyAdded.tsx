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
import SkeletonCard from '../skeletons/SkeletonCard';

export default function RecentlyAdded() {

    const size = useWindowSize();
    const [NoCards, setNoCards] = useState(3);
    const [loading, setLoading] = useState(true);
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
                setLoading(false);
                console.log(res.data.properties)
            })
    }, [])

    return (
        <div className='select-none'>
            <section className="px-8 md:px- lg:px-24 max-w-screen-xl mx-auto">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-auto text-center mb-8">Explore Opportunities</h1>
                <div className='text-center '>
                    <Link className="my-auto" href={'/properties'}>
                        <h1 className="text-blueTheme font-bold no-underline hover:underline">View All</h1>
                    </Link>
                </div>
            </section>
            <div className="mx-auto max-w-80 md:max-w-screen-lg lg:max-w-screen-xl">
                {
                    loading ?
                        (
                            <div className="inline-flex space-x-10 mt-10">
                                <SkeletonCard />
                                <SkeletonCard />
                                <SkeletonCard />
                            </div>
                        )
                        :
                        (
                            <Swiper
                                className=''
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                style={{padding: '10px'}}
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
                                                        funded={property.funded}
                                                        invamt={property.minimum_investment}
                                                        irr={property.irr}
                                                    />
                                                </div>

                                            </SwiperSlide>
                                        </div>
                                    ))
                                }
                            </Swiper>
                        )
                }
            </div>
        </div>
    )
}
