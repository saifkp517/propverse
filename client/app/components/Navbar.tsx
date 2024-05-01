"use client"
import React from "react";
import Image from 'next/image'

export default function MyNav({ fixed }: any) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-emerald-500 mb-3 sticky top-0 bg-white border-b border-gray-300 text-blue z-20">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
                            href="/"
                        >
                            <div className="flex">
                                <div className="w-16">
                                    <Image src="/logo.png" alt="logo" width={1000} height={1000} className="object-contain mb-2" />
                                </div>
                                <div className="my-auto ml-4 text-lg bg-gradient-to-r from-blue to-green-600 inline-block text-transparent bg-clip-text">
                                    PropertyVerse
                                </div>
                            </div>
                        </a>
                        <button
                            className="  cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
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
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto uppercase text-lg">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:opacity-75"
                                    href="/"
                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg  opacity-75"></i><span className="ml-2">Home</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:opacity-75"
                                    href="/properties"
                                >
                                    <i className="fab fa-twitter text-lg leading-lg  opacity-75"></i><span className="ml-2">Properties</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:opacity-75"
                                    href="/knowledge-base"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg  opacity-75"></i><span className="ml-2">Knowledge Base</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}