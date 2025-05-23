"use client"

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link';
import { useSession, getSession, signOut } from "next-auth/react";
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import path from 'path';

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Properties', href: '/properties', current: false },
    { name: 'Knowledge Base', href: '/knowledge-base', current: false },
    { name: 'Fully Funded', href: '/completed-properties', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MyNav() {

    const pathname = usePathname();

    const updatedNavigation = navigation.map(item => ({
        ...item,
        current: item.href === pathname
    }))



    const { data: session, status } = useSession();

    const profileImage = session?.user?.image;
    const profileLetter = session?.user?.email?.[0].toUpperCase() || '?';

    if (status === "authenticated") {
        if (localStorage.getItem('isProfileComplete') === "false") {
            window.location.href = '/details'
        }
    }
    return (
        <Disclosure as="nav" className="bg-white bg-opacity-5 inset-0 backdrop-blur-lg shadow-md border-b border-transparent sticky top-0 z-10">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <div className="w-10">
                                        <Image src="/logos/logo.png" alt="logo" width={1000} height={1000} className="object-contain" />
                                    </div>

                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-2">
                                        {updatedNavigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'font-bold text-black' : 'text-gray-800 hover:text-black hover:font-bold duration-300',
                                                    'rounded-md tracking-tighter px-2 py-2 text-sm '
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>

                                        {
                                            status === "authenticated"
                                                ?
                                                (
                                                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="absolute -inset-1.5" />
                                                        <span className="sr-only">Open user menu</span>
                                                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                                                            {profileImage !== undefined ? (
                                                                <Image
                                                                    width={1000}
                                                                    height={1000}
                                                                    className="h-8 w-8 rounded-full"
                                                                    src={profileImage}
                                                                    alt="User profile"
                                                                />
                                                            ) : (
                                                                <span className="text-xl font-semibold text-gray-700">
                                                                    {profileLetter}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </MenuButton>

                                                )
                                                :
                                                (
                                                    <a
                                                        href="/login"
                                                        className={classNames(
                                                            'bg-blueTheme text-white duration-300 hover:text-white',
                                                            'rounded-md tracking-tighter px-2 py-2 text-sm font-medium',
                                                        )}
                                                    >
                                                        Login
                                                    </a>
                                                )

                                        }
                                    </div>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <MenuItem>
                                            {({ focus }) => (
                                                <a
                                                    href="kyc"
                                                    className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Enter KYC
                                                </a>
                                            )}
                                        </MenuItem>

                                        <MenuItem>
                                            {({ focus }) => (
                                                <div
                                                    onClick={() => signOut()}
                                                    className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer ')}
                                                >
                                                    Sign out
                                                </div>
                                            )}
                                        </MenuItem>
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {updatedNavigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}
