import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import Card from '../Card/Card';
import Data from './../../assets/Data.json'
import { Link } from 'react-router-dom';

const SearchBar = () => {

    const [data, setData]=useState(Data.abc);
    const [orignalData] = useState(Data.abc);
    const [loction, setLocation]= useState('');
    const [date, setDate]= useState('');
    const [price, setPrice]= useState('');
    const [propertyType, SetPropertyType]= useState('');

    // liked
    
    console.log(data);

    console.log(Date( " user date ",date));

    console.log("price",typeof(price),price, "porpertye",propertyType,loction, typeof(date), date);
  

    const [searchQuery, setSearchQuery]= useState('');
    // searchBy Name fun
    const SearchByName = ()=>{
        if(searchQuery){
            const SearchData = orignalData.filter((item, idx )=>item.houseName.trim().toLowerCase().includes(searchQuery))
            setData(SearchData);
           
        }else{
            setData(orignalData)
        } 
    }

    // fun multSearch 
    const MultiSearchfn = ()=>{
       let multi_filtered_Data = orignalData;

       if(loction){
        multi_filtered_Data = multi_filtered_Data.filter((item)=> item.city.toLowerCase() === loction.toLowerCase());
       }

       if (date) {
        multi_filtered_Data = multi_filtered_Data.filter(item => item.date === date);
    }


       let priceValue  = price.split("-");
       let minPriceRang = Number(priceValue[0]);
       let maxPriceRang = Number(priceValue[1]);
       if(price){
        multi_filtered_Data = multi_filtered_Data.filter((item)=> item.price >= minPriceRang && item.price<= maxPriceRang);
       }

       if(propertyType){
        multi_filtered_Data = multi_filtered_Data.filter((item)=> item.propertyType === propertyType);
       }
       
       setData(multi_filtered_Data);
        
    }


    useEffect(()=>{
        SearchByName();
       
    },[searchQuery  ]);

  return (

    <div >
        <div className='bg-[#f8f7fd]'>
            <div className=' max-w-screen-xl mx-auto'>
                <div className='wrapper px-24 py-6'>
                    {/* top search Bar */}
                    <div className='flex justify-between items-center'>
                        <div className=' text-3xl font-semibold'>
                        Search properties to rent
                        </div>
                        <div className=' flex gap-4' >
                            <div>

                            <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type="text" placeholder='Search Home here ...'className='px-4 py-2 text-lg rounded-l-xl border outline-none'/>
                            <button onClick={SearchByName} className='px-2 py-2 text-lg border rounded-r-xl'> <IoSearch className=' inline-block text-violet-700 '/> </button>

                            </div>
                            <div>
                           <Link to={"/liked"}> <button  className='px-4 py-2 border mr-2 rounded-md text-white bg-[#7065f1] '>Liked</button></Link>
                            </div>
                        </div>
                        

                    </div>

                    {/* multi - search Bar */}
                    <div className='flex justify-evenly p-2 border items-center mt-8 text-semibold'>
                        {/* location */}
                        <div className='flex flex-col border-r gap-1'>
                            <label htmlFor="">Location</label>
                            <input onChange={(e)=>setLocation(e.target.value)} type="text" placeholder='Enter Location..' />
                        </div>
                        {/* Date */}
                        <div className='flex flex-col border-r'>
                            <label htmlFor="">Date</label>
                            <input type="date" onChange={(e)=>setDate(e.target.value)} />
                        </div>
                        {/* price */}
                        <div className='flex flex-col border-r'>
                            <label htmlFor="">Price</label>
                            <select name="" id="" onChange={(e)=>{setPrice(e.target.value)}}>
                                <option value="0">Select Price</option>
                                <option value="0-100000">0-1,00,000</option>
                                <option value="100000-200000">1,00,000-2,00,000</option>
                                <option value="200000-500000">2,00,000-5,00,000</option>
                                <option value="500000-1000000">5,00,000-10,00,000</option>
                            </select>
                        </div>
                        {/* Ṭype of property */}
                        <div className='flex flex-col border-r'>
                            <label htmlFor=""> Property Type</label>
                            <select name="" id="" onChange={(e)=>SetPropertyType(e.target.value)}>
                                <option value="">Select Property Type</option>
                                <option value="Detached">Detached</option>
                                <option value="Semi-detached">Semi-detached</option>
                                <option value="Riverfront">Riverfront</option>
                                <option value="Parkside">Parkside</option>
                            
                            </select>
                        </div>
                        <div>
                            <button onClick={MultiSearchfn} className='px-4 py-2 border mr-2 rounded-md text-white bg-[#7065f1] '>Search</button>
                        </div>
                    </div>

                    {/* show cards */}
                    <div className=' grid grid-cols-4 gap-2 mt-8 '>
                       {data.map((item,idx)=>{
                        return(
                            <Card item={item} key={item.id}/>
                        )
                       })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar