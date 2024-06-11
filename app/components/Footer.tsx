import { TablePagination, Typography } from "@mui/material";
import Image from "next/image";

export default function Footer() {
    return (
        <div>
            <footer className="bg-blueTheme text-white">
                <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16 sm:gap-6 sm:grid-cols-4">
                            <div>
                                <a href="#" className="items-center">
                                    <Typography variant="h5" className="mr-4 cursor-pointer py-1.5 font-extrabold">PropertyVerse</Typography>
                                    <p className="mt-4 text-xs lg:text-sm mr-24 lg:mr-16 leading-tight lg:leading-loose font-light lg:font-medium">Welcome to a redefinition of property management. Discover seamless solutions for property owners and tenants alike.</p>
                                </a>
                            </div>
                            <div>
                                <Typography variant="h6" className="mb-6 font-semibold tracking-tighter ">Useful Links</Typography>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-6 font-normal">
                                        <a href="#" className="hover:underline">About Us</a>
                                    </li>
                                    <li className="mb-6 font-normal">
                                        <a href="#" className="hover:underline">Knowledge Base</a>
                                    </li>
                                    <li className="mb-6 font-normal">
                                        <a href="#" className="hover:underline">Properties</a>
                                    </li>
                                    <li className="mb-6 font-normal">
                                        <a href="#" className="hover:underline">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Typography variant="h6" className="mb-6 font-semibold tracking-tighter">Subscribe</Typography>
                                <p className="mt-4 text-xs lg:text-sm mr-16 leading-tight  lg:leading-loose font-light">Subscribe to get latest property, blog news from us</p>
                                <div>
                                    <input type="email" id="first_name" className="bg-gray-50 mt-4 border text-sm rounded-lg focus:ring-blueTheme-500 focus:border-blueTheme-500 block w-full p-2.5" placeholder="Email" required />
                                </div>
                                <br />
                                <Typography variant="h6" className="mb-6 font-semibold tracking-tighter">Contact Us</Typography>
                                <p className="text-sm leading-loose font-light"><span className="font-bold">Phone:</span> +91 098370 54542, 094572 31937</p>
                                <p className="text-sm leading-loose font-light"><span className="font-bold">Email:</span> support@propertyverse.co.in</p>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 " />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">PropertyVerse™</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="#" className="text-gray-500 hover:text-gray-900">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>

                            <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                                </svg>
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a href="https://github.com/saifkp517" className="text-gray-500 hover:text-gray-900 ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                </svg>
                                <span className="sr-only">GitHub account</span>
                            </a>

                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}
