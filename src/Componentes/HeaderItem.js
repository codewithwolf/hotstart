import React from 'react'

const HeaderItem = ({ name, Icon }) => {
    return (
        <div className=' text-white flex items-center gap-3 text-[18px] font-semibold cursor-pointer overflow-hidden hover:underline transition duration-200 ease-in '>
            <Icon />
            <h2 className=' text-white hidden md:block'>{name}</h2>
        </div>
    )
}

export default HeaderItem