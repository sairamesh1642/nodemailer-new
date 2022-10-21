import React from 'react'
import logo from '../logo.png'

export default function Login() {
    return (
        <>
            <div className='bg-gradient-to-r from-topColor to-bottomColor flex'>
                <div className="flex justify-between items-center mx-auto">
                    <div className="shadow-xl bg-[#212121] rounded-lg md:m-32 md:p-20 flex gap-20 text-white">
                        <div className="mx-auto flex flex-col items-center justify-center">
                            <p className="pb-4">Already have an account?</p>
                            <button className="bg-[#D9D9D9] text-black py-1 px-8 rounded m-0">LOG IN</button>
                        </div>
                        <div className="flex">
                            <img src={logo} alt="" width="70%" className="mx-auto" />
                        </div>
                        <div className="mx-auto flex flex-col items-center justify-center">
                            <p className="pb-4">Don't have an account?</p>
                            <button className="bg-[#D9D9D9] text-black py-1 px-8 rounded m-0">SIGN UP</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

