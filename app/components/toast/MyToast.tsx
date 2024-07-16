'use client';

import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function MyToast() {

    // Custom function to clear all toasts
    const clearToasts = () => toast.dismiss();

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export const notifySuccess = (message: string) => toast.success(message || "Success!");
export const notifyError = (message: string) => toast.error(message || "Error!");
export const notifyInfo = (message: string) => toast.info(message || "Info!");
export const notifyWarning = (message: string) => toast.warn(message || "Warning!");
export const clearToasts = () => toast.dismiss();