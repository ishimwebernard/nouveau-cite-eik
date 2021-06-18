import {ToastProvider} from "react-toast-notifications"
import React, { useState, useEffect } from 'react';
import Header from './header';
import SlideShow from './slideshow';
import Menu from './menu'
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
            <div className="bg-gray-100 flex flex-col">
            <div className="h-screen w-full">
            <Header absolute={false} onBurgerClicked={()=>{
                setMobile(!mobile);
            }}/>
            <div className={mobile ? "hidden":""}>
            <SlideShow  />
            </div>
            </div>
            <div className="md:grid md:grid-cols-3 px-7 mt-10 space-x-4">
                <div className="mt-20 md:mt-0 md:col-span-2 py-2">
                    <Reasons />
                    <News  news={news ? news: []} />
                    <KeyLinks />
                </div>
                <Menu mobile={mobile} loginErrorFunction={(error)=>{
                    //     const { addToast } = useToasts();

                    // addToast(error, {appearance: 'error'})
                }}/>
            </div>
            <Footer />

        </div>
       </ToastProvider>
    )
}
