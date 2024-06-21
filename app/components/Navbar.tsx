"use client"
import React from "react";
import Image from 'next/image'
import { useSession, getSession } from "next-auth/react";

export default function MyNav({ fixed }: any) {

    const { data: session, status } = useSession();

    if (status === "authenticated") {
        if(localStorage.getItem('isProfileComplete') === "false") {
            window.location.href = '/details'
        }
    }

    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="flex shadow-lg flex-wrap items-center justify-center mb-3 sticky top-0 bg-white bg-opacity-10 inset-0 backdrop-blur-md border-b border-gray-300 text-blueTheme z-10">
                <div className="w-full px-4 mx-auto flex flex-wrap items-center justify-between ">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
                            href="/"
                        >
                            <div className="flex">
                                <div className="w-16">
                                    <Image src="/logos/logo.png" alt="logo" width={1000} height={1000} className="object-contain mb-2" />
                                </div>
                                {/* <div className="my-auto ml-4 text-lg bg-gradient-to-r from-blueTheme to-green-600 inline-block text-transparent bg-clip-text">
                                    PropertyVerse
                                </div> */}
                            </div>
                        </a>
                        <button
                            className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-menu-down" viewBox="0 0 16 16">
                                <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793zM1 7v3h14V7zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow justify-end items-end " +
                            (navbarOpen ? "inline-block my-4" : "hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="inline-block lg:flex list-none lg:ml-auto text-lg mx-auto">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-sm font-semibold leading-snug hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-blueTheme before:absolute before:left-0 before:bottom-0  underline-offset-8"
                                    href="/"
                                >
                                    <i className="-square text-lg leading-lg  opacity-75"></i><span className="ml-2">Home</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-sm font-semibold leading-snug hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-blueTheme before:absolute before:left-0 before:bottom-0  underline-offset-8"
                                    href="/properties"
                                >
                                    <i className=" text-lg leading-lg opacity-75"></i><span className="ml-2">Properties</span>
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-sm font-semibold leading-snug hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-blueTheme before:absolute before:left-0 before:bottom-0  underline-offset-8"
                                    href="/completed_projects"
                                >
                                    <i className=" text-lg leading-lg  opacity-75"></i><span className="ml-2">Completed Projects</span>
                                </a>
                            </li> */}
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-sm font-semibold leading-snug hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-blueTheme before:absolute before:left-0 before:bottom-0  underline-offset-8"
                                    href="/knowledge-base"
                                >
                                    <i className=" text-lg leading-lg  opacity-75"></i><span className="ml-2">Knowledge Base</span>
                                </a>
                            </li>


                        </ul>
                    </div>
                    <div className="">
                        <ul className="mt-4 lg:mt-0 flex justify-between">
                            {
                                status === "authenticated"
                                    ?
                                    (
                                        <>
                                            <li className="nav-item ">
                                                <div className="px-3 flex items-center">

                                                    <a
                                                        className="ml-3 text-sm font-semibold leading-snug hover:opacity-75"
                                                        href="/profile"
                                                    >
                                                        <div className="w-10 h-10 rounded-full capitalize bg-gradient-to-r border border-gray-800 from-blue-600 to-green-600 flex items-center justify-center text-white text-2xl font-medium">
                                                            {session.user.email?.charAt(0)}
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="nav-item my-auto">
                                                <a href="/login">
                                                    <button className="px-2 lg:px-3 py-1 lg:py-2 flex items-center text-xs lg:text-sm font-medium leading-snug border rounded-lg text-white bg-blueTheme duration-200 text-center hover:opacity-75 ">
                                                        Logout
                                                    </button>
                                                </a>
                                            </li>
                                        </>

                                    )
                                    :
                                    (
                                        <li className="nav-item">
                                            <a href="/login">
                                                <button className="px-3 py-2 flex items-center text-sm font-semibold leading-snug border rounded-lg text-white bg-blueTheme text-center hover:opacity-75 ">
                                                    Login
                                                </button>
                                            </a>
                                        </li>

                                    )

                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}