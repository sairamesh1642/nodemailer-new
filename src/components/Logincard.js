import React from 'react'
import logo from '../logo.png'
import { MailIcon } from "@heroicons/react/solid"

export default function Logincard() {
    return (
        <>
            <div className="bg-gradient-to-b from-[#724189] to-[#0D0D22] rounded-lg">
                <img src={logo} alt="" width="5%" className="mx-auto pt-10" />
                <form action="">
                    <label htmlFor="email" className='flex'>
                        <MailIcon className='w-8 h-8' />
                        <input className="form-input" type="email" name="email" id="email" placeholder="Enter your email" />
                    </label>
                    <label htmlFor="email" className='flex'>
                        <MailIcon className='w-8 h-8' />
                        <input className="form-input" type="email" name="email" id="email" placeholder="Enter your email" />
                    </label>
                    <label htmlFor="email" className='flex'>
                        <MailIcon className='w-8 h-8' />
                        <input className="form-input" type="email" name="email" id="email" placeholder="Enter your email" />
                    </label>
                    <div>
                        <div>
                            <input type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember">Remember me?</label>
                        </div>
                        <div>
                            <a href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button type="submit">LOG IN</button>
                </form>
            </div>
        </>
    )
}
