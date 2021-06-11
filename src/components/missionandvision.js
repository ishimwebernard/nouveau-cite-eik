import React from 'react'
import TitleImage from './titleimage';
import schoollab from '../assets/schoollab.jpg'
import {ToastProvider, useToasts} from 'react-toast-notifications'

import Header from './header';
import Menu from './menu';
import Footer from './footer'
import BigCard from './bigCard'

export default function MissionAndVision() {
    window.scrollTo(0, 0)

    return (<ToastProvider>
        <div className="bg-gray-50">
            <Header absolute={false} />
           <TitleImage text="MISSION AND VISION" image={schoollab}/>
           <div className="grid grid-cols-3 px-7 mt-10 space-x-4">
           <div className="col-span-2">
            <p className="text-6xl text-gray-800">Mission and Vision</p>
            <Mission />
            <Vision />
           </div>
                <Menu />
           </div>
           <Footer />
        </div></ToastProvider>
    )
}

const Mission = () =>{
return (
    <div className="grid grid-cols-6 space-x-4 bg-white p-3 shadow-md mt-4 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className=" h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
</svg>
<div className="col-span-5">
    <p className="text-4xl text-green-700">Mission Statement</p>
    <p className="mt-2 text-gray-500">Moreover parents Kigali does not have time to study and monitor their children’s homework at home due to their occupations. This is why some parents with experience and concern for education came together in an association, to create a school meeting this urgent concern and priority is education of children</p>
</div>
    </div>
)
}
const Vision = () =>{
    return (
        <div className="grid grid-cols-6 space-x-4 bg-white p-3 shadow-md mt-4 mb-4">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
</svg>
    <div className="col-span-5">
        <p className="text-4xl text-green-700">Vision</p>
        <p className="mt-2 text-gray-500">Moreover parents Kigali does not have time to study and monitor their children’s homework at home due to their occupations. This is why some parents with experience and concern for education came together in an association, to create a school meeting this urgent concern and priority is education of children</p>
    </div>
        </div>
    )
    }
