import React, { useEffect, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Marquee from "react-fast-marquee";
import Image from 'next/image';

export default function OurPartners() {

    return (
        <div className="">
            <div className="relative flex py-5 max-w-screen-xl mx-auto items-center">
                <div className="flex-grow border-t border-transparent"></div>
                <h1 className="text-xl lg:text-2xl text-gray-700 font-semibold text-center mx-1 lg:mx-4 tracking-tight">Our Partners</h1>
                <div className="flex-grow border-t border-transparent"></div>
            </div>
            <div className='logo-container max-w-screen-xl mx-auto'>
                <Marquee
                    speed={30}
                >
                    <div className="mx-6 lg:mx-12 w-12 md:w-16 lg:w-18">
                        <Image alt="logo" className="mx-auto rounded-lg" layout="responsive" height={100} width={100} src="/logos/altdrx.jpg" />
                    </div>
                    <div className="mx-6 lg:mx-12 w-12 md:w-16 lg:w-18">
                        <Image alt="logo" className="mx-auto rounded-lg" layout="responsive" height={100} width={100} src="/logos/alyf.jpg" />
                    </div>
                    <div className="mx-6 lg:mx-12 w-12 md:w-16 lg:w-18">
                        <Image alt="logo" className="mx-auto rounded-lg" layout="responsive" height={100} width={100} src="/logos/assetmonk.jpg" />
                    </div>
                    <div className="mx-6 lg:mx-12 w-12 md:w-16 lg:w-18">
                        <Image alt="logo" className="mx-auto rounded-lg" layout="responsive" height={100} width={100} src="/logos/brik-itt.jpg" />
                    </div>
                    <div className="mx-6 lg:mx-12 w-12 md:w-16 lg:w-18">
                        <Image alt="logo" className="mx-auto rounded-lg" layout="responsive" height={100} width={100} src="/logos/hbits.jpg" />
                    </div>
                    <div className="mx-6 lg:mx-12 w-12 md:w-16 lg:w-18">
                        <Image alt="logo" className="mx-auto rounded-lg" layout="responsive" height={100} width={100} src="/logos/propertyshare.jpg" />
                    </div>
                    <div className="mx-6 lg:mx-12 w-12 md:w-16 lg:w-18">
                        <Image alt="logo" className="mx-auto rounded-lg" layout="responsive" height={100} width={100} src="/logos/strata.jpg" />
                    </div>
                    <div className="mx-6 lg:mx-12 w-12 md:w-16 lg:w-18">
                        <Image alt="logo" className="mx-auto rounded-lg" layout="responsive" height={100} width={100} src="/logos/ryzer.jpg" />
                    </div>
                </Marquee>
            </div>
            
        </div>
    );
}
