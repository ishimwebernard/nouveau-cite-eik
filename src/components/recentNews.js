import React from 'react'

const News = ({ image,title, content }) =>{
    return (
        <div className="grid grid-cols-4 w-full bg-white shadow-xl">
            <img src={image}/>
            <div className="col-span-">
                <p>{title}</p>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default function RecentNews() {
    return (
        <div>
            <div className="flex space-x-2 mt-4 ml-4">
                
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="#047857">
            <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
            <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
            </svg>
            <p className="text-4xl text-green-700 ">Recent News</p>
            </div>
            <News content="Learning helps one develop passion and enables one to find his her carrier" title="Learning is good for everyone" image="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"/>
        </div>
    )
}
