import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Header from './header'
import Menu from './menu'
import {ToastProvider, useToasts} from "react-toast-notifications"
import schoollab from '../assets/schoollab.jpg'
import Footer from './footer'
import Skeleton from 'react-loading-skeleton';

const NewsComponent = ({title, image, parag}) =>{
    return (
        <div>
            <p className="font-bold text-green-700 text-4xl">{title} </p>
            <img className=" rounded-xl h-96 w-3/4 mt-4" src={image} />
            <p className="text-gray-600 mt-4" >{parag} </p>
        </div>
    )
}
const NewsSkeleton = () =>{
    return (
        <div>
               <p className="font-bold text-green-700 text-4xl"><Skeleton/> </p>
            <div className=" rounded-xl h-96 w-3/4 mt-4" ><Skeleton height={350} /></div>
            <p className="font-bold text-green-700 text-4xl"><Skeleton/> </p>
        </div>
    )
}

export default function NewsViewer({title}) {
    const [newsItem, setNewsItem] = useState({})
    const [loading, setLoading] = useState(false)
    console.log(title)
    window.scrollTo(0, 0)
    useEffect(()=>{
        const getCertainNews = async() =>{
            setLoading(true)
            const newsServer = await axios({
                method: 'GET',
                url: 'https://ecole-internationale-de-kigali.herokuapp.com/news/'
            })
            for(let i = 0; i < newsServer.data.data.length; i++){
                if(String(title).replaceAll(' ', '-') === String(newsServer.data.data[i].title).replaceAll(' ', '-')) {
                    //setNewsItem(newsServer.data.data[i])
                   // alert('Found')
                    console.log(newsServer.data.data[i])
                    try{
                            setNewsItem(newsServer.data.data[i])
                    }catch(error){

                    }
                    setLoading(false)
                    return 
                }  
            }
            console.log(newsItem)
            setNewsItem(null)
            

        }
        getCertainNews()
    }, [])
    console.log(loading)
    return (
        <ToastProvider>
        <div className="bg-gray-50 h-screen w-full flex flex-col" >
        <Header absolute={false} />
        <div className="bg-gray-50 md:grid md:grid-cols-3 px-7 mt-10 space-x-4">
           <div className="md:col-span-2 py-2">
              <div className={loading ? '':'hidden'}>
              <NewsSkeleton /> 
              </div>
            <div className={loading ? 'hidden':''}>
            <NewsComponent title={newsItem.title} parag={newsItem.body} image={newsItem.picture} />
            </div>
           </div>
           <Menu />
        </div>
        <Footer />
        </div>
        
        </ToastProvider>
    )
}
