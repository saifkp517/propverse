'use client';

import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";
import { useState, useEffect } from 'react';
import { signIn } from "next-auth/react";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState("")


    async function CredentialsLogin(e: any) {
        e.preventDefault();
        const response = await signIn('credentials', { email, password, redirect: false })
        console.log(response)
        if (response?.error) {
            console.error('Authentication failed:', response.error);
            setErrors(response.error)
        }
        else {
            console.log(response)
            //window.location.href = '/'
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
            <div className="h-screen flex items-center justify-center">
                <div className="">
                    <h2 className="font-bold text-2xl tracking-tigher mb-2">Login to your Account</h2>
                    <div className="text-center">
                        <h2 className="font-light text-sm">Welcome back! Select method to register:</h2>
                        <br />
                        <div className="flex items-center justify-center">
                            <button onClick={() => { signIn('google') }} className="flex gap-x-2 text-xs items-center justify-center border w-4/5 border-blueTheme rounded-lg px-4 md:px-16 py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                                Google
                            </button>
                        </div>
                        <br />
                    </div>
                    <div className="flex items-center">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="px-3 text-gray-500">
                            or continue with email
                        </span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>
                    <br />


                    {errors && <sub className="text-red-500 text-xs">{errors}</sub>}
                    <form onSubmit={CredentialsLogin} className="max-w-sm mt-2 mx-auto">
                        <div className="mb-1">
                            <input onChange={e => setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-blueTheme text-gray-900 text-xs rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-2" placeholder="Email" required />
                        </div>
                        <div className="mb-1">
                            <input onChange={e => setPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-blueTheme text-gray-900 text-xs rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-2" placeholder="Password" required />
                        </div>
                        {/* <div className="flex items-start mb-5">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-blueTheme  focus:ring-3" required />
                            </div>
                            <label className="ms-2 text-xs font-medium ">Remember me</label>
                        </div> */}
                        <button type="submit" className="bg-blueTheme border-blueTheme text-white font-bold text-xs rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-3">Submit</button>
                        <p className="text-xs mt-2 tracking-tighter">
                            Don't have an Account? Register <a className="text-blueTheme hover:underline" href="/register">Now</a>
                        </p>

                    </form>

                </div>
            </div>
            <div className="bg-blueTheme hidden lg:block">
                <div className="h-screen flex items-center justify-center">
                    <Image height={600} width={600} className="object-contain" unoptimized={true} alt="login-desktop" src="/login.png" />
                </div>
            </div>
        </div>
    );
}
