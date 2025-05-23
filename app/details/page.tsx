'use client';

import Image from "next/image";
import { encrypt } from "../utils/encryption";
import { useSession } from "next-auth/react";
import Loader from "../components/Loader";
import Link from "next/link";
import { Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import axios from 'axios';
import { useEffect, useState } from "react";
import path from "path";

interface Errors {
    phone?: string,
    exists?: string,
}

export default function Detail() {

    const { data: session, status } = useSession();
    console.log(session)


    const [loading, setLoading] = useState(true)
    let [phone, setphone] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [errors, setErrors] = useState<Errors>({})
    const [serverError, setServerError] = useState("");

    if (status === "authenticated") {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/investor/${session.userId ? session.userId : session.user.id}`)
            .then(response => {
                if (response.data.userData.verified == true) {
                    window.location.href = '/'
                } else {
                    setLoading(false)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    async function handleSubmit(e: any) {

        e.preventDefault();

        //removing whitespace
        phone = phone.split(" ").join("");

        if (phone.length !== 10) {
            setServerError("Invalid Phone Number")
        } else {

            try {
                await axios.post(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/investor/update`, {
                    phoneno: phone,
                    id: session.userId ? session.userId : session.user.id
                })

                const otpResponse = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/generate-otp`, {
                    phone,
                });

                axios.post(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/otp-sms`, {
                    phone,
                    OTP: otpResponse.data.otp
                });

                const encryptedPhone = encrypt(phone);
                console.log(encryptedPhone)
                
                localStorage.setItem('encryptedPhone', encryptedPhone);

                window.location.href = '/otp'

            } catch (e) {
                setServerError("error uploading details: ")
                console.log(e)
            }
        }
    }
    return !loading ?
        (
            <div className="h-screen lg:flex">
                <div className="w-full lg:w-2/5 h-screen flex items-center justify-center mx-auto ">
                    <div className="mx-10 lg:mx-0">
                        <h2 className="font-bold text-2xl tracking-tigher mb-2 ">Welcome to <span className="text-blueTheme">Property</span><span className="text-green-800">Verse! 🎉</span></h2>
                        <h2 className="font-light text-sm">Verify your Phone Number before getting started!</h2>
                        <br />





                        {serverError !== "" ? <sub className="text-red-500 text-xs">{serverError}</sub> : <></>}

                        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                            <div className="mb-5">
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">+91</span>
                                    <input
                                        onChange={e => setphone(e.target.value)}
                                        type="tel"
                                        id="phone"
                                        className="bg-gray-50 border border-blueTheme text-gray-900 text-xs rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full pl-12 pr-2.5 py-2"
                                        placeholder="Phone No"
                                        required
                                    />
                                </div>

                                {errors.phone && <sub className="text-red-500 text-xs">{errors.phone}</sub>}
                            </div>

                            {/* <div className="flex items-start mb-5">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-blueTheme  focus:ring-3" required />
                                </div>
                                <label className="ms-2 text-xs font-medium ">Remember me</label>
                            </div> */}
                            <button type="submit" className="bg-blueTheme border-blueTheme text-white font-bold text-xs rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-3">
                                <div className="flex gap-x-3 items-center justify-center">

                                    {/* <div role="status" className={`${loader ? "" : "hidden"}`}>
                                    <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div> */}
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
        ) :
        (
            <div>
                <Loader />
            </div>
        )



}
