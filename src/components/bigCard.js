import React from 'react'

export default function BigCard({ image, title, text }) {
    return (
        <div className="grid grid-cols-2">
            <img src={image}/>
            <div>
                <p>{title}</p>
            </div>
        </div>
    )
}
