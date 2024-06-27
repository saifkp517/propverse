'use client';

import Image from "next/image";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import axios from 'axios';
import { useEffect, useState } from "react";

interface Errors {
    email?: string,
    password?: string,
    phone?: string,
    confirmPassword?: string,
    exists?: string,
}

export default function Login() {

    const { data: session, status } = useSession()

    const [email, setEmail] = useState("")
    let [phone, setPhone] = useState("");
    const [loader, setLoader] = useState(false)
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [errors, setErrors] = useState<Errors>({})
    const [serverError, setServerError] = useState("");

    async function handleSubmit(e: any) {

        phone = phone.split(" ").join("");

        console.log(phone)
        e.preventDefault();
        const newErrors: any = {};

        const validateEmail = (email: string) => {
            const pattern = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
            return email.match(pattern);
        }

        if (!validateEmail) {
            newErrors.email = "Invalid Email Address"
        }


        if (phone.length !== 10) {
            newErrors.phone = "Enter a Valid Phone No."
        }

        if (password.length < 6) {
            newErrors.password = "Password must be atleast six characters"
        }

        if (password !== confirmPass) {
            newErrors.confirmPassword = "Passwords do not match"
        }

        setErrors(newErrors);
        console.log(newErrors);



        if (Object.keys(newErrors).length === 0) {

            try {
                setLoader(true)
                // Sign up the investor
                const investor = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/signup/investor`, {
                    email,
                    password,
                    phone,
                    provider: "propertyverse"
                });

                console.log(investor);
                //Generate OTP after successful signup]
                if (investor.data.verified == false) {
                    const otpResponse = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/generate-otp`, {
                        email: email
                    });

                    axios.post(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/otp-sms`, {
                        phone: phone,
                        OTP: otpResponse.data.otp
                    });

                    const userId = investor.data.userId

                    window.location.href = `/otp?id=${userId}&email=${email}`;
                }

            } catch (error: any) {
                setLoader(false);
                console.log(error);
                setServerError(error.response ? error.response.data.message : 'An unexpected error occurred');
            }
        }
    }


    return (
        <div className="h-screen lg:flex">
            <div className="w-full lg:w-2/5 h-screen flex items-center justify-center mx-auto ">
                <div className="mx-10 lg:mx-0">
                    <h2 className="font-bold text-2xl tracking-tigher mb-2 ">Register to your Account</h2>


                    <div className="text-center">
                        <h2 className="font-light text-sm">Welcome back! Select method to register:</h2>
                        <br />
                        <div className="flex items-center justify-center">
                            <button onClick={() => { signIn('google', {callbackUrl: '/details'}) }} className="flex gap-2 text-xs items-center justify-center border w-4/5 border-blueTheme rounded-lg px-16 py-3">
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


                    {serverError !== "" ? <sub className="text-red-500 text-xs">{serverError}</sub> : <></>}

                    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                        <div className="mb-1">
                            <input onChange={e => setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-blueTheme text-gray-900 text-xs rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-2" placeholder="Email" required />
                            {errors.email && <sub className="text-red-500 text-xs">{errors.email}</sub>}
                        </div>
                        <div className="mb-1">
                            <input onChange={e => setPhone((e.target.value))} type="tel" id="phone" className="bg-gray-50 border border-blueTheme text-gray-900 text-xs rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-2" placeholder="Phone No." required />
                            {errors.phone && <sub className="text-red-500 text-xs">{errors.phone}</sub>}
                        </div>
                        <div className="mb-1">
                            <input onChange={e => setPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-blueTheme text-gray-900 text-xs rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-2" placeholder="Password" required />
                            {errors.password && <sub className="text-red-500 text-xs">{errors.password}</sub>}
                        </div>
                        <div className="mb-5">
                            <input onChange={e => setConfirmPass(e.target.value)} type="password" id="password" className="bg-gray-50 border border-blueTheme text-gray-900 text-xs rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-2" placeholder="Confirm Password" required />
                            {errors.confirmPassword && <sub className="text-red-500 text-xs">{errors.confirmPassword}</sub>}
                        </div>
                        {/* <div className="flex items-start mb-5">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-blueTheme  focus:ring-3" required />
                            </div>
                            <label className="ms-2 text-xs font-medium ">Remember me</label>
                        </div> */}
                        <button type="submit" className="bg-blueTheme border-blueTheme text-white font-bold text-xs rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-3">
                            <div className="flex gap-x-3 items-center justify-center">

                                <div role="status" className={`${loader ? "" : "hidden"}`}>
                                    <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                                Submit

                            </div>
                        </button>
                        <p className="text-xs mt-2 tracking-tighter">
                            Have an Account? Go to <a className="text-blueTheme " href="/login">Login</a>
                        </p>

                    </form>

                </div>
            </div>
            <div className="w-0 lg:w-3/5 hidden lg:block bg-blueTheme">
                <div className="h-screen flex items-center justify-center">
                    <Image height={600} width={600} className="object-contain" unoptimized={true} alt="login-desktop" src="/login.png" />
                </div>
            </div>
        </div>
    );
}
