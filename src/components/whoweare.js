import React from 'react'
import TitleImage from './titleimage';
import schoollab from '../assets/schoollab.jpg'
import {ToastProvider} from "react-toast-notifications"

import Header from './header';
import Menu from './menu';
import Footer from './footer' 
let french = localStorage.getItem('language') == 'FR'

export default function WhoWeAre() {
    window.scrollTo(0, 0)

    return (<ToastProvider>
        <div className="bg-gray-100">
            <Header absolute={false} />
           <TitleImage text={french ? "Qui nous sommes":"Who we are"} image={schoollab}/>
           <div className="grid grid-cols-3 px-7 mt-10 space-x-4">
           <div className="col-span-2">
            <p className="text-6xl text-gray-800">{french ? "Qui nous sommes":"Who we are"}</p>
            <p className="text-gray-600">
            The idea of ​​opening a school was created in 1997 to meet the needs of parents who wanted their children to attend classes in French, while institutions can respond were restricted or overloaded. Moreover parents Kigali does not have time to study and monitor their children’s homework at home due to their occupations.
This is why some parents with experience and concern for education came together in an association, to create a school meeting this urgent concern and priority is education of children
            </p>
           </div>
                <Menu />
           </div>
           <Footer />
        </div></ToastProvider>
    )
}
