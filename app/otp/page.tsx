'use client'
import React, { useEffect, useRef, useState, Suspense } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

const MobileVerification = () => {

    const [otp, setOtp] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const searchParams = useSearchParams();
    const phone = searchParams.get('phone')
    const id = searchParams.get('id');

    function handleChange() {

    }
    async function handleSubmit(e: any) {
        e.preventDefault();

        try {
            const otpVerified = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/verify-otp`, {
                phone: phone,
                id: id,
                otp,
            });
            if (otpVerified) {
                console.log(otpVerified)
                setSuccess(true);
                window.location.href = '/';
            }
        } catch (e: any) {
            console.log(e);
            setError(e.response.data);
        }
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
                <header className="mb-8">
                    {success ? <sub className='text-green-500 font-semibold'>OTP verified Successfully!</sub> : <></>}
                    {error && <sub className='text-red-500'>{error}</sub>}
                    <h1 className="text-2xl font-bold mb-1">Email Verification</h1>
                    <p className="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your email address.</p>
                </header>
                <form onSubmit={handleSubmit} id="otp-form">
                    <div className=" justify-center gap-3">
                        <input value={otp} onChange={e => setOtp(e.target.value)} type="text" className='border rounded-md border-black py-2 w-3/4 px-3 text-center' maxLength={4} />
                    </div>
                    <div className="max-w-[260px] mx-auto mt-6">
                        <button type="submit" className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blueTheme px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:opacity-75 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">
                            Verify Account
                        </button>
                    </div>
                </form>
                <div className="text-sm text-slate-500 mt-4">
                    Didn't receive code? <a className="font-medium text-blueTheme hover:text-indigo-600" href="#0">Resend</a>
                </div>
            </div>
        </div>
    );
};

export default function OTP() {
    return (
        <Suspense>
            <MobileVerification />
        </Suspense>
    )
};