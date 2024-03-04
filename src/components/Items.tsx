
import React, { useState } from 'react';

const Item = ({name, picture} : {
name: string,
picture: string,
listens: number,
}) => {

    return (
        <div className="group relative p-2" style={{ perspective: '1000px' }}>
            <div className="flex items-center justify-center text-center flex-col gap-2"
            >
                <div className="p-2 ">
                    <div className="absolute inset-0 blur-xl group-hover:bg-slate-700 opacity-50 transition ease-in-out duration-700"/>
                    <img src={picture} alt={name} className="w-[80px] h-[80px] md:w-[80px] md:h-[80px] transition duration-500 relative z-10" />
                </div>
                <p className='text-sm'> {name} </p>
            </div>
        </div>
    );
};

export default Item;
