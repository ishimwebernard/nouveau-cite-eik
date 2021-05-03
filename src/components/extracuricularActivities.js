import React from 'react'
import TitleImage from './titleimage';
import Girl from '../assets/Image13.jpg';
import Header from './header';
import Menu from './menu';
import Footer from './footer'
import BigCard from './bigCard'

export default function Extracuricular() {
    return (
        <div className="bg-gray-100">
            <Header absolute={false} />
           <TitleImage text="Extra Curricular Activities" image={Girl}/>
           <div className="grid grid-cols-3 px-7 mt-10 space-x-4">
           <div className="col-span-2">
            <p className="text-6xl text-gray-800">Extracuricular Activities</p>
            <Card image={Girl} title="To provide needed material" description="The idea of ​​opening a school was created in 1997 to meet the needs of parents who wanted their children to attend classes in French, while institutions can respond were restricted or overloaded. Moreover parents Kigali does not have time to study and monitor their children’s homework at home due to their occupations." />
            <Card image={Girl}  title="To prepare exams" description="The idea of ​​opening a school was created in 1997 to meet the needs of parents who wanted their children to attend classes in French, while institutions can respond were restricted or overloaded. Moreover parents Kigali does not have time to study and monitor their children’s homework at home due to their occupations." />
           </div>
                <Menu />
           </div>
           <Footer />
        </div>
    )
}

const Card = ({ image,title, description }) =>{
    return (
        <div className="relative mt-4 mb-4 h-60 ">
    <img src={image} className=" h-full w-full object-cover rounded-2xl"/>
    <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-30 rounded-2xl">
        <div className="absolute bottom-0 px-2">
            <p className="text-4xl text-gray-100 font-bold">{title}</p>
        <p className=" text-gray-300">{description}</p>
        </div>
    </div>
        </div>
    )
    }
