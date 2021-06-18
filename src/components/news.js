import React,{useState, useEffect} from 'react'
import TitleImage from './titleimage';
import schoollab from '../assets/schoollab.jpg'
import {ToastProvider} from "react-toast-notifications"
import axios from "axios"
import Header from './header';
import Menu from './menu';
import Footer from './footer'
import NewsComponent from './recentNews'

export default function News() {
    window.scrollTo(0, 0)
    const [news, setNews] = useState()
    useEffect(()=>{
        const getNewsFromServer = async()=>{
            const allServerNews = [];
            const serverNews = await axios(
                {
                    method: 'GET',
                    url: 'https://ecole-internationale-de-kigali.herokuapp.com/news/'
                }
            )
            
            for(let i = 0; i < serverNews.data.data.length; i++){
                const tempObj = {
                    title: String(serverNews.data.data[i].title),
                    body: String(serverNews.data.data[i].body),
                    image: String(serverNews.data.data[i].picture)
                }
                allServerNews.push(tempObj)
            }
            setNews(allServerNews)
       
        }
        getNewsFromServer();

    }, [])

    return (<ToastProvider>
        <div className="bg-gray-100">
            <Header absolute={false} />
           <TitleImage text="Latest news and events" image={schoollab}/>
           <div className="grid grid-cols-3 px-7 mt-10 space-x-4">
           <div className="col-span-2">
           <NewsComponent  news={news ? news: []} />
          
           </div>
                <Menu />
           </div>
           <Footer />
        </div>
        </ToastProvider>
    )
}

const Card = ({ title, description }) =>{
    return (
        <div className="grid grid-cols-6 space-x-4 bg-white p-3 shadow-md mt-4 mb-4">
<svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>
    <div className="col-span-5">
        <p className="text-4xl text-green-700">{title}</p>
        <p className="mt-2 text-gray-500">{description}</p>
    </div>
        </div>
    )
    }
