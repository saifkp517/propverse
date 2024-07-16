'use client'
import React, { useEffect, useRef, useState, Suspense } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const [disabled, setDisabled] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [timer, setTimer] = useState(0);

    const handleClick = () => {
        setDisabled(true);
        setTimer(60); // Set the timer to 60 seconds
    };

    useEffect(() => {
        let interval: any;
        if (disabled) {
            interval = setInterval(() => {
                setTimer(prev => {
                    if (prev === 1) {
                        setDisabled(false);
                        clearInterval(interval);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [disabled]);

    async function handleSubmit(e: any) {
        e.preventDefault();

        try {
            // const otpVerified = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/verify-otp`, {
            //     phone: phone,
            //     id: id,
            //     otp,
            // });
            // if (otpVerified) {
            //     console.log(otpVerified)
            //     setSuccess(true);
            //     window.location.href = '/';
            // }
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
                    <h1 className="text-2xl font-bold mb-1">Forgot Password</h1>
                    <p className="text-[15px] text-slate-500">Please enter your email address to reset your password</p>
                </header>
                <form onSubmit={handleSubmit} id="otp-form">
                    <div className=" justify-center gap-3">
                        <input value={email} onChange={e => setEmail(e.target.value)} type="text" className='border rounded-md border-black py-2 w-3/4 px-3 text-start' />
                    </div>
                    <div className="max-w-[260px] mx-auto mt-6">
                        <button
                            type="button"
                            onClick={handleClick}
                            className={`w-full inline-flex justify-center whitespace-nowrap rounded-lg px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 transition-colors duration-150
                    ${disabled ? 'bg-gray-950 cursor-not-allowed opacity-50' : 'bg-blueTheme hover:opacity-75'}
                `}
                            disabled={disabled}
                        >
                            {disabled ? `Wait for ${timer} seconds` : 'Send OTP'}
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default function OTP() {
    return (
        <Suspense>
            <ForgotPassword />
        </Suspense>
    )
};