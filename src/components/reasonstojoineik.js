import React from 'react'
import Girl from '../assets/Image9.jpg';

const ReasonItem = ({ number, title, subtitle }) =>{
    return (
            <div className=" items-center px-40">
                <p className="text-center text-8xl text-gray-100 ">{number}</p>
                <p className="text-white text-4xl font-semibold " >{title}</p>
                <p className="text-gray-200">{subtitle}</p>
            </div>
    );
}



export default function Reasons() {
    return (
        <div className="relative">
            <img src={Girl} />
            <div className="absolute bg-gray-800 bg-opacity-70 top-0 w-full h-full">
                <p className="mt-4 ml-4 text-gray-100 text-4xl ">Reasons to join EIK</p>
                <div className="w-full h-full items-center tex-center">
                    <ReasonItem number="1" title="We are internationaly accredited" subtitle="We are te only school that teaches well among any other schools ever in the world and in the whole Rwanda" />
                </div>
            </div>
        </div>
    )
}
