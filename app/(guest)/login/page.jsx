"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import logo from '@/public/images/logo.svg'
import api from "@/lib/api";
import {cookieValidation} from "@/lib/cookieValidation";
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        try {
            api.post("/auth/login", {
                email: email,
                password: password,
            }).then(response =>cookieValidation(response.data.data))
        } catch (error) {
            console.log(error)
        }


    }

    const [pasStatus, setPassStatus] = useState("false");
    return (
        <div className='flex grow bg-white h-screen items-center justify-center'>
            <Image src={'/images/login-bg.jpg'} alt='bg' layout='fill' objectFit='cover'/>
            <div className='w-11/12 md:w-8/12 flex items-center justify-end'>
                <div
                    className='w-full md:w-[420px] bg-[#ffffff33] backdrop-blur-md p-7 rounded-md border border-gray-300 text-black shadow-md flex flex-col gap-y-7'>
                    <div className='flex flex-col gap-y-2'>
                        <Image src={logo} alt='Logo' height={70} width={70} className='mx-auto'/>
                        <h1 className='text-center font-semibold text-2xl'>Login</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-y-7'>
                            <div className='flex items-center border-b'>
                                <input type="email" onChange={event => setEmail(event.target.value)}
                                       placeholder='Enter your Email'
                                       className='w-full outline-0 py-2 text-sm'/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                     fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-mail">
                                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                            </div>
                            <div className='flex items-center border-b'>
                                <input type='password' onChange={event => setPassword(event.target.value)}
                                       placeholder='Enter your Password' className='w-full outline-0 py-2 text-sm'/>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-eye">
                                    <path
                                        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
                                    <circle cx="12" cy="12" r="3"/>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-eye-off">
                                    <path
                                        d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/>
                                    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/>
                                    <path
                                        d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/>
                                    <path d="m2 2 20 20"/>
                                </svg>
                            </div>
                            <div className='flex items-center justify-between text-sm'>
                                <div className='flex items-center gap-x-2'>
                                    <label htmlFor="remember">Remember me</label>
                                    <input type="checkbox" name="" id="remember"/>
                                </div>
                                <Link href="/login" className='hover:underline'>Forgot password ?</Link>
                            </div>
                            <div className='flex items-center justify-center'>
                                <button
                                    className='px-4 py-1 bg-red-700 hover:bg-red-800 font-semibold transitions text-white rounded-md'>Login
                                </button>
                            </div>
                            <span className='text-sm text-center'>I don't have an account <Link href="/register"
                                                                                                className='text-red-600 font-medium hover:underline'>Register</Link></span>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
