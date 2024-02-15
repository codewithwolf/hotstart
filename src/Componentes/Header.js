import React from 'react'
import logos from '../assets/images/logos.png'
import { HiHome, HiStar, HiPlayCircle, HiTv, HiMagnifyingGlass } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
const Header = () => {
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCHLIST',
            icon: HiPlus
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        },
    ]
    return (

        <div className='flex justify-between items-center py-5 overflow-hidden'>

            <div className='flex items-center gap-8 overflow-hidden '>

                <img className=' rounded-full w-[80px] object-cover md:[w-115px]' src={logos} />
                <div className=' hidden md:flex gap-8'>
                    {
                        menu.map((item) => (
                            <HeaderItem name={item.name} Icon={item.icon} />
                        ))
                    }
                </div>
                <div className='flex md:hidden gap-8'>
                    {
                        menu.map((item, index) => index < 3 && (
                            <HeaderItem name={item.name} Icon={item.icon} />
                        ))
                    }
                </div>
            </div>
            <img src={logos} className='w-[60px] rounded-full' />
        </div>
    )
}

export default Header