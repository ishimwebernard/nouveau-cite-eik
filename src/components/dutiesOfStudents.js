import React from 'react'
import TitleImage from './titleimage';
import schoollab from '../assets/schoollab.jpg'
import {ToastProvider} from "react-toast-notifications"

import Header from './header';
import Menu from './menu';
import Footer from './footer'
let french = localStorage.getItem('language') == 'FR'

export default function DutiesOfStudents() {
    window.scrollTo(0, 0)

    return (<ToastProvider>
        <div className="bg-gray-100">
            <Header absolute={false} />
           <TitleImage text={french ? "Devoirs des étudiants":"Duties of Students"} image={schoollab}/>
           <div className="grid grid-cols-3 px-7 mt-10 space-x-4">
           <div className="col-span-2">
            <Card title={french ? "Contribuer à la culture de classe et à la responsabilité":"Contribute to class culture and accountability"}
description={french ? "Chaque classe doit se mettre d'accord sur les normes de la classe. Lorsque les élèves sont invités à donner leur avis sur les règles de la classe, ils sont plus susceptibles de se tenir mutuellement responsables. Pour un enseignant, cela pourrait signifier moins de directives enseignant à élève et plus de correction de cours entre pairs.":"Each class should agree upon classroom norms. When students are invited to provide input in classroom rules, they are more likely to hold each other accountable. For a teacher, that could mean less teacher-to-student directives and more peer-to-peer course correction."}/>
<Card title={french ? "Soyez curieux":"Be inquisitive"} description={french ? "Il faut s'attendre à ce que les élèves posent des questions qui alimentent leur curiosité. Les enseignants doivent valider cela et permettre aux élèves d'influencer les leçons expérientielles tout au long de la classe. Poser des questions profite à tout le monde.":"Students should be expected to ask questions that nurture their curiosity. Teachers should validate this and allow student input to influence experiential lessons throughout class. Asking questions benefits everyone."}/>
<Card title={french ? "Soyez des participants actifs":"Be active participants"}
description={french ? "Les élèves doivent venir à l'école prêts à participer. Un engagement total maximise les opportunités d'apprentissage et donne le ton à la classe. Cela inclut, mais sans s'y limiter, poser et répondre à des questions, effectuer des devoirs en classe et aligner systématiquement le comportement sur les normes de la classe.":"Students should come to school prepared to participate. Full engagement maximizes opportunity for learning and sets the tone for the classroom. This includes but is not limited to, asking and answering questions, completing in-class assignments, and consistently aligning behavior to classroom norms."}/>

          
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
