import React from 'react';

const Backdrop = ({ status }: { status: boolean }) => {
    if (status) {
        return (
            <div className='w-[100vw] h-[100vh] absolute bg-[#252525c4] z-50 flex items-center'>
                <div className='cube'>
                    <div className='face front'></div>
                    <div className='face back'></div>
                    <div className='face right'></div>
                    <div className='face left'></div>
                    <div className='face top'></div>
                    <div className='face bottom'></div>
                </div>
            </div>
        );
    }

    return null;
};

export default Backdrop;
