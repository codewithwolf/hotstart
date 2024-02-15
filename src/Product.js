import React from 'react'
import logo from '../src/assets/images/logos.png'
import logos from '../src/assets/images/logo.png'
const Product = () => {
    const list = [
        {
            id: 1,
            image: logo
        },
        {
            id: 2,
            image: logos
        },
        {
            id: 3,
            image: logo
        },
        {
            id: 4,
            image: logos
        },
    ]
    return (
        <div className='flex gap-5 py-14 p-2 px-5 md:px-16'>
            {
                list.map((item) => (
                    <div className=' hover:scale-110 transition-all duration-150 border-[2px] border-gray-600 rounded-lg shadow-xl shadow-black cursor-pointer '>
                        <img src={item.image} className=' w-full' />
                    </div>
                ))
            }
        </div>
    )
}

export default Product