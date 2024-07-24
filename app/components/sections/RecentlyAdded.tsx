"use client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import axios from 'axios'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowSize } from "@uidotdev/usehooks";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Card from "../cards/commercialCard";

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
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/properties/commercial`)
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
            <div className="flex items-center justify-center text-center">
                {
                    loading ?
                        (
                            <div className="flex justify-center items-center">
                                <p>Loading...</p>
                            </div>
                        )
                        :
                        (
                            <Swiper
                                className='w-full'
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={20}
                                style={{padding: '10px'}}
                                slidesPerView={NoCards}
                                pagination={{ clickable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                {
                                    propDetails.map((property: any) => (
                                        <div key={property.id} >
                                            <SwiperSlide>
                                                <div className='inline-flex space-x-10 mt-10"'>
                                                    <Card
                                                       {...property}
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
