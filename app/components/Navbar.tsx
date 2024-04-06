import Image from "next/image";


export default function Navbar() {
    return (
        <div>
            <nav className="bg-white ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Logo</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  md:bg-white">
                            <li>
                                <a href="/" className="block py-4 px-6 rounded duration-150 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green  dark:hover:bg-gray-700 md:dark:hover:bg-transparent">HOME</a>
                            </li>
                            <li>
                                <a href="/knowledge-base" className="block py-4 px-6 duration-150 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green  dark:hover:bg-gray-700 md:dark:hover:bg-transparent">KNOWLEDGE BASE</a>
                            </li>
                            <li>
                                <a href="/properties" className="block py-4 px-6 duration-150 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green  dark:hover:bg-gray-700 md:dark:hover:bg-transparent">PROPERTIES</a>
                            </li>
                            <li>
                                <a href="/login" className="block py-2 px-1 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green  ">
                                    <button type="button" className="focus:outline-none text-white hover:text-green bg-green hover:bg-transparent focus:ring-1 focus:ring-green font-medium rounded-lg text-sm px-5 py-2.5 duration-150">LOG IN</button>
                                </a>
                            </li>
                            <li>
                                <a href="/register" className="block py-2 px-1 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green">
                                    <button type="button" className="focus:outline-none text-white hover:text-green bg-green hover:bg-transparent focus:ring-1 focus:ring-green font-medium rounded-lg text-sm px-5 py-2.5 duration-150">SIGN UP</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
