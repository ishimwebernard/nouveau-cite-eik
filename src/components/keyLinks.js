import React from 'react'
import { Carousel } from 'react-bootstrap'
import Academics from '../assets/academic.png'

const LinkItem = ({ title }) =>{
    return (
        <div className="flex flex-col text-center bg-white px-4 py-1 shadow-md">
            <img src={Academics} alt="i" />
            <p>{title}</p>
        </div>
    )
}


export default function KeyLinks() {
    return (
        <div>
             <div className="flex space-x-2 mt-8 ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="#047857">
                <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
                <p className="text-4xl text-green-700 ">Key Links</p>
                </div>
                <div className="flex space-x-4 items-center">
                <LinkItem title="Academic Bridge"/>
                    
                    <LinkItem title="Blue Lotus"/>
                    
                    <LinkItem title="Academic"/>
                </div>
                        
                    
        </div>
    )
}
