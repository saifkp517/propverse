import React, { useEffect, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Marquee from "react-fast-marquee";
import Image from 'next/image';

export default function OurPartners() {

    const partners = [
        { name: 'altdrx', src: '/logos/altdrx.jpg' },
        { name: 'alyf', src: '/logos/alyf.jpg' },
        { name: 'assetmonk', src: '/logos/assetmonk.jpg' },
        { name: 'brik-itt', src: '/logos/brik-itt.jpg' },
        { name: 'hbits', src: '/logos/hbits.jpg' },
        { name: 'propertyshare', src: '/logos/propertyshare.jpg' },
        { name: 'strata', src: '/logos/strata.jpg' },
        { name: 'ryzer', src: '/logos/ryzer.jpg' },
        { name: 'fincity', src: '/logos/fincity.jpeg' },
        { name: 'beehive', src: '/logos/bhive.jpg' }
    ];

    return (
        <div className="">
            <div className="relative flex py-5 max-w-screen-xl mx-auto items-center">
                <div className="flex-grow border-t border-transparent"></div>
                <h1 className="text-xl lg:text-2xl text-gray-700 font-semibold text-center mx-1 lg:mx-4 tracking-tight">Our Partners</h1>
                <div className="flex-grow border-t border-transparent"></div>
            </div>
            <div className='logo-container max-w-screen-xl mx-auto relative overflow-hidden'>
                <Marquee speed={30}>
                    {partners.map((partner, index) => (
                        <div key={index} className="mx-6 lg:mx-12 w-12 md:w-16 lg:w-18">
                            <Image
                                alt={`${partner.name} logo`}
                                className="mx-auto rounded-lg"
                                layout="responsive"
                                height={100}
                                width={100}
                                src={partner.src}
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}
