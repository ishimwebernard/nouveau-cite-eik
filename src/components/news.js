import React from 'react'
import TitleImage from './titleimage';
import Girl from '../assets/Image13.jpg';
import Header from './header';
import Menu from './menu';
import Footer from './footer'
import BigCard from './bigCard'
import { Link } from 'react-router-dom';
const news = [{
    title: 'Bernard gets turing award',
    body: 'Ohh my',
    image: {
        Girl
    }
}]
export default function News() {
    const links = [];
    for(var link of news){
        var route = link.title.toString().replaceAll(' ', '_');
        links.push(
            <Link  to={route}>
            {link.title}
            </Link>
        )
    }
    return (
        <div className="bg-gray-100">
            <Header absolute={false} />
           <TitleImage text="News" image={Girl}/>
           <div className="grid grid-cols-3 px-7 mt-10 space-x-4">
           <div className="col-span-2">
            <p className="text-6xl text-gray-800">News</p>
            {links}
           </div>
                <Menu />
           </div>
           <Footer />
        </div>
    )
}