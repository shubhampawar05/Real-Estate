import React, { useContext } from 'react'
import Header from '../Components/header/Header'
import { LikedContext } from '../context/LikedContext';
import Card from '../Components/Card/Card';

const LikedPage = () => {

    const { liked } = useContext(LikedContext);
  return (
    <div>

        <Header/>
        <div className='bg-[#f8f7fd]'>
            <div className='max-w-screen-xl mx-auto'>
                <div className='wrapper px-24 py-6'>
                    <div className='text-3xl font-semibold mb-4'>Liked Properties</div>
                    <div className='grid grid-cols-4 gap-2'>
                        {liked.length > 0 ? liked.map(item => (
                            <Card item={item} key={item.id} />
                        )) : <p>No liked properties yet.</p>}
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default LikedPage