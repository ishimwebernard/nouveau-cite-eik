import React from 'react'

export default function CustomButton({good, text}) {
    return (
        <p className="font-semibold mt-4  text-gray-100 text-lg cursor-pointer">
            <span className={`rounded-lg py-2 px-4 ${good ? 'bg-green-700':'bg-gray-400'}`}>
            {text}
        </span>
        </p>
    )
}
