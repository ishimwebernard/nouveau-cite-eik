import React, {} from 'react'
import {ToastProvider} from "react-toast-notifications"
import { useHistory } from "react-router-dom";
let french = localStorage.getItem('language') == 'FR'

const News = ({ image,title, content }) =>{
    const history = useHistory()
    return (
        <div className="grid md:grid-cols-6 grid-cols-3 w-full bg-white shadow-md space-x-8 mt-4 rounded-xl cursor-pointer" onClick={()=>{
            const titleManip = String(title).replaceAll(' ', '-')
            history.push(`/newsandevents/${titleManip}`)
        }}>
            <p className="font-bold text-8xl text-center bg-green-700 text-gray-50 h-full uppercase">{title.substring(0,1)}</p> 
            <div className="md:col-span-5 col-span-2 mt-4 flex flex-col">
                <p className="w-full text-gray-800 text-4xl">{title}</p>
                <p className="mt-0 text-gray-500 mr-4">{content}</p>
            </div>
        </div>
    )
}

export default function RecentNews({news}) {
    window.scrollTo(0, 0)
    const rows = []
    try{
        for(let counter=0; counter<=news.length; counter++){
           
                rows.push(
                    <News content={news[counter].body} image={news[counter].picture} title={news[counter].title} />
                )
           
        }
    }catch(error){

    }
    return (<ToastProvider>
        <div>
            <div className="flex space-x-2 mt-4 ml-4">
                
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="#047857">
            <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
            <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
            </svg>
            <p className="text-4xl text-green-700 ">{french ? "Nouvelles Récentes":"Recent News"}</p>
            </div>
            {rows}
        </div></ToastProvider>
    )
}
