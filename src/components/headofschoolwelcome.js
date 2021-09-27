import React from 'react'
import TitleImage from './titleimage';
import schoollab from '../assets/schoollab.jpg'
import {ToastProvider} from "react-toast-notifications"
import arton from '../assets/arton8.png'

import Header from './header';
import Footer from './footer'
export default function HeadOfSchoolWelcome() {
    window.scrollTo(0, 0)
    let french = localStorage.getItem('language') == 'FR'


    return (<ToastProvider>
        <div className="bg-gray-100">
            <Header absolute={false} />
           <TitleImage text={french ? "Accueil du chef d'établissement":"Head of school's welcome"} image={schoollab}/>
           <div className="px-7 mt-10 space-x-4">
           <div className="col-span-2 flex flex-col ">
           <div className="grid grid-cols-2 px-40 ">
               <div className="">
                <p className="text-5xl font-bold text-gray-800">Murekeyisoni Sylivie</p>
                <p className="text-2xl">{french ? 'Chef d\'établissement':'Head of school'} </p>
           </div>
           
            <img src={arton} className=" w-3/4 rounded-xl shadow-xl"/>
           </div>
           <p className='mt-4'>
            {french ? `
            L’idée d’ouvrir une école est née en 1997 pour répondre aux besoins des parents qui souhaitaient que leurs enfants suivent des cours en français, alors que les établissements pouvant y répondre étaient limités ou surchargés. Par ailleurs les parents de Kigali n’ont pas le temps de suivre l’étude et les devoirs de leurs enfants à la maison suite à leurs occupations.
            
            C’est pour cela que quelques parents ayant une expérience et le souci de l’éducation se sont mis ensemble au sein d’une asbl, pour créer une école répondant à cette préoccupation urgente et prioritaire qu’est l’éducation des enfants
            
            `:`
            The idea of ​​opening a school was created in 1997 to meet the needs of parents who wanted their children to attend classes in French, while institutions can respond were restricted or overloaded. Moreover parents Kigali does not have time to study and monitor their children’s homework at home due to their occupations.
This is why some parents with experience and concern for education came together in an association, to create a school meeting this urgent concern and priority is education of children
            `}

           </p>
           </div>
               
           </div>
           <Footer />
        </div></ToastProvider>
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
