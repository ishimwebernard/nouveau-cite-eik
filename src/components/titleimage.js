import React from 'react'

export default function TitleImage({ image, text }) {
    return (
        <div>
            <div className="relative items-center">
            <img src={image} className=" h-96 w-full object-cover " />
            <div className="absolute top-0 w-full h-full bg-gray-800 bg-opacity-40   grid grid-rows-3">
            <div></div>
                <p className="text-center text-7xl font-semibold text-gray-100">{text}</p>
            </div>
            </div>
        </div>
    )
}
