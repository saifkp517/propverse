'use client'
import React, { useEffect, useRef, useState, Suspense } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

const MobileVerification = () => {

    const [otpArray, setOtpArray] = useState<string[]>([])
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const searchParams = useSearchParams();
    const email = searchParams.get('email')

    const inputsRef = useRef<any>([]);

    useEffect(() => {
        const inputs: HTMLInputElement[] = inputsRef.current;
        const submit: any = document.querySelector('button[type=submit]');

        const handleKeyDown = (e: any) => {

            if (!/^[0-9]{1}$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab' && !e.metaKey) {
                e.preventDefault();
            }

            if (e.key === 'Delete' || e.key === 'Backspace') {
                const index = inputs.indexOf(e.target);
                if (index > 0) {
                    inputs[index - 1].value = '';
                    inputs[index - 1].focus();
                }
            }
        };

        const handleInput = (e: any) => {

            //converting it to a string

            console.log(typeof (e.data))
            setOtpArray((prevArr) => [...prevArr, e.data])
            console.log(otpArray)


            const { target } = e;
            const index = inputs.indexOf(target);
            if (target.value) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                } else {
                    submit.focus();
                }
            }
        };

        const handleFocus = (e: any) => {
            e.target.select();
        };

        const handlePaste = (e: any) => {
            e.preventDefault();
            const text = e.clipboardData.getData('text');
            if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
                return;
            }
            const digits = text.split('');
            inputs.forEach((input: any, index: number) => input.value = digits[index]);
            submit.focus();
        };

        inputs.forEach((input: any) => {
            input.addEventListener('input', handleInput);
            input.addEventListener('keydown', handleKeyDown);
            input.addEventListener('focus', handleFocus);
            input.addEventListener('paste', handlePaste);
        });

        return () => {
            inputs.forEach((input: any) => {
                input.removeEventListener('input', handleInput);
                input.removeEventListener('keydown', handleKeyDown);
                input.removeEventListener('focus', handleFocus);
                input.removeEventListener('paste', handlePaste);
            });
        };
    }, []);

    function handleChange() {

    }
    async function handleSubmit(e: any) {
        e.preventDefault();

        try {
            const otpString = otpArray.join('');
            const otpVerified = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/verify-otp`, {
                email: email,
                otp: otpString
            });
            if (otpVerified) {
                console.log(otpVerified)
                setSuccess(true);
                window.location.href = '/login';
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
                    <div className="flex items-center justify-center gap-3">
                        {[0, 1, 2, 3].map((index) => (
                            <input
                                key={index}
                                type="text"
                                ref={(el) => inputsRef.current[index] = el as any}
                                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-gray-400 hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                pattern="\d*"
                                maxLength={1}
                            />
                        ))}
                    </div>
                    <div className="max-w-[260px] mx-auto mt-4">
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