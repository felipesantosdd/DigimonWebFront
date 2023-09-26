import React from 'react'

const Backdrop = () => {
    return (
        <div className='w-[100vw] h-[100vh] absolute bg-[#252525c4] z-50'>
            <div className=' absolute top-[50%] left-[50%] h-[96px] rounded-full w-[96px] bg-[#9b59b6] '>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Backdrop