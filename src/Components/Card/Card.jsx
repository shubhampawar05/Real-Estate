import React from 'react'
import { CiHeart } from "react-icons/ci";
import { LuBedSingle } from "react-icons/lu";
import { TbBath } from "react-icons/tb";
import { TbDimensions } from "react-icons/tb";

const Card = ( {item}) => {
    // console.log(item);
    const { id , city ,price ,houseName, numberOfBaths,numberOfBeds , date ,propertyType , address,image} = item;
    {}
  return (
    <div>
        <div className='w-[270px] p-2 border '>
            <div className='w-full rounded-t-xl'>
                <img  className='rounded-t-xl h-[200px] object-cover object-center' src={image} alt="" height={"200px"}  />
            </div>
            <div className='w-full rounded-b-xl border'>
                <div className='p-2'>
                    <div className='flex justify-between'>
                        <div className=' '><span className='text-violet-700 text-xl font-semibold'>{`$${price}`}</span> <span className='text-sm'>/Month</span></div>
                        <div className='border border-black flex justify-center items-center w-[30px] h-[30px] rounded-full'>
                            <CiHeart/>
                        </div>
                    </div>
                    <p className=' font-bold text-xl'>{houseName.slice(0,25)}</p>
                    <p className=' text-slate-400 mb-2'>{address.slice(0,25)}</p>
                    <hr className='' />
                    <div className=' flex justify-between'>
                        {/* bed */}
                        <div className='flex items-center gap-1 py-1'>
                            <span>  <LuBedSingle/></span>
                            <p>{numberOfBeds}</p>
                        </div>
                        {/* bathroom */}
                        <div className='flex items-center gap-1'>
                            <span>  <TbBath/></span>
                            <p>{numberOfBaths}</p>
                        </div>
                        {/* area */}
                        <div className='flex items-center gap-1'>
                        <span>  
                            <TbDimensions/></span>
                            <p>
                                {item.roomDimensions.masterBedroom}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Card