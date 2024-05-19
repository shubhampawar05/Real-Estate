import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <div className=' max-w-screen-xl mx-auto'>
            <div className='wrapper flex justify-between px-8 py-4 items-center border-2'>
                <div className='flex gap-12 items-center' >
                    <Link to={"/"}>
                    <div className=' gap-2 flex items-center'>
                        <span><AiFillHome className='text-xl text-violet-500'/></span>
                        <span className='font-bold text-lg '>Esatery</span>
                    </div></Link>
                    <div>
                        <ul className=' list-none flex gap-6 text-lg font-semibold'>
                            <li className=' hover:bg-violet-200 rounded-md '>Rent </li>
                            <li  className=' hover:bg-violet-200 rounded-md '>Buy </li>
                            <li className=' hover:bg-violet-200 rounded-md '>Sell </li>
                            <li className=' hover:bg-violet-200 rounded-md '>Manage Property <FaAngleDown className=' inline-block'/> </li>
                            <li className=' hover:bg-violet-200 rounded-md '>Resources <FaAngleDown className=' inline-block'/> </li>
                        </ul>
                    </div>
                </div>
                <div className='font-semibold'>
                    <button className='px-4 py-2 border mr-2 rounded-md text-[#7065f1] '>Login</button>
                    <button className='px-4 py-2 border mr-2 rounded-md text-white bg-[#7065f1] '>Sign up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header