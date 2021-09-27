import {ToastProvider} from "react-toast-notifications"
import React, { useState, useEffect } from 'react';
import Header from './header';
import SlideShow from './slideshow';
import Reasons from './reasonstojoineik'
import News from './recentNews'
import KeyLinks from './keyLinks'
import Footer from './footer'
import axios from "axios"
let french = localStorage.getItem('language') == 'FR'


export default function Main() {
    const [mobile, setMobile] = useState(false);
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
       // alert(lang)

    }, [])
    return (
       <ToastProvider>
            <div className="bg-gray-100 ">
            <div className="w-full">
            <Header absolute={false} onBurgerClicked={()=>{
                setMobile(!mobile);
            }}/>
            <div className={mobile ? "hidden":""}>
            <SlideShow  />
            </div>
            </div>
            <div className="w-full px-7 space-x-4 mt-10">
                <div className=" md:col-span-2 "> 
                    <Reasons />
                    <News  news={news ? news: []} />
                    <KeyLinks />
                </div>
            </div>
            <Footer />

        </div>
       </ToastProvider>
    )
}
