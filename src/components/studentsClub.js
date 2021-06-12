import React from 'react'
import TitleImage from './titleimage';
import schoollab from '../assets/schoollab.jpg'
import {ToastProvider, useToasts} from "react-toast-notifications"

import Header from './header';
import Menu from './menu';
import Footer from './footer'
import BigCard from './bigCard'

export default function Extracuricular() {
    window.scrollTo(0, 0)

    return (<ToastProvider>
        <div className="bg-gray-100">
            <Header absolute={false} />
           <TitleImage text="STUDENT CLUBS" image={schoollab}/>
           <div className="grid grid-cols-3 px-7 mt-10 space-x-4">
           <div className="col-span-2">
            <p className="text-6xl text-gray-800">Students Clubs</p>
            <Card image={schoollab} title="To provide needed material" description="The idea of ​​opening a school was created in 1997 to meet the needs of parents who wanted their children to attend classes in French, while institutions can respond were restricted or overloaded. Moreover parents Kigali does not have time to study and monitor their children’s homework at home due to their occupations." />
            <Card image={schoollab}  title="To prepare exams" description="The idea of ​​opening a school was created in 1997 to meet the needs of parents who wanted their children to attend classes in French, while institutions can respond were restricted or overloaded. Moreover parents Kigali does not have time to study and monitor their children’s homework at home due to their occupations." />
           </div>
                <Menu />
           </div>
           <Footer />
        </div></ToastProvider>
    )
}

const Card = ({ image,title, description }) =>{
    return (
        <div className=" mb-4  grid grid-cols-2 items-top py-4">
        <img src={image} className=" w-full object-cover rounded-md"/>
        <div className=" top-0 left-0 h-full w-full">
            <div className=" bottom-0 px-2">
                <p className="text-4xl text-gray-800 font-bold">{title}</p>
            <p className=" text-gray-600">{description}</p>
            </div>
        </div>
            </div>
    )
    }
