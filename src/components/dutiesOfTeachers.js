import React, { useState } from 'react'
import TitleImage from './titleimage';
import schoollab from '../assets/schoollab.jpg'
import {ToastProvider} from "react-toast-notifications"
import Header from './header';
import Menu from './menu';
import Footer from './footer'
let french = localStorage.getItem('language') == 'FR'

export default function DutiesOfStudents() {
    window.scrollTo(0, 0)
    const [mobile, setMobile] = useState(false);
    return (<ToastProvider>
        <div className="bg-gray-100">
            <Header absolute={false} onBurgerClicked={()=>{
                setMobile(!mobile);
            }}/>/>
           <TitleImage text={french ? "Devoirs des enseignants":"Duties of Teachers"} image={schoollab}/>
           <div className="md:grid md:grid-cols-3 px-7 mt-10 space-x-4">
           <div className="col-span-2">
            <Card title={french ? "Partager ses connaissances":"Sharing Knowledge" }
            description={french ? "Tout d'abord, le premier devoir d'un enseignant est de transmettre des connaissances, et cela vient de l'enseignement. L'enseignement implique généralement de suivre un programme spécifique et de s'assurer que les étudiants comprennent ce qui est enseigné.":"First things first, the primary duty of a teacher is to impart knowledge, and that comes from teaching. Teaching usually entails following a specific curriculum and ensuring that the students understand what is being taught."}/>
            <Card title={french ? "La modélisation de rôle":"Role Modeling"}
            description={french ? "Bien que les enseignants ne se considèrent pas comme des modèles, la vérité est qu'ils le sont en réalité. Le temps que les élèves passent avec les enseignants chaque jour ou chaque semaine leur permet d'avoir un certain niveau d'influence sur les élèves. Il appartient maintenant à l'enseignant de rendre cette influence positive ou négative.":"Although teachers do not see themselves as role models, the truth is they actually are. The amount of time students spend with teachers each day or week makes it possible for them to have a certain level of influence on the students. It is now down to the teacher to make this influence positive or negative."}/>
            <Card title={french ? "Un parent externe":"An External Parent"}
            description={french ? "Le rôle d'un enseignant transcende le fait de suivre un plan de cours et un horaire de travail spécifiques. Parce que les élèves et les enseignants passent autant de temps ensemble, l'enseignant devient par inadvertance un parent externe. Les enseignants peuvent être un mentor pour aider à mettre l'enfant sur la bonne voie. Dans ce rôle, l'enseignant peut encourager l'élève à être le meilleur possible, et également être une source d'inspiration et de conseils pour les élèves.":"The role of a teacher transcends following a specific lesson plan and work schedule. Because both students and teachers spend as much time together, the teacher inadvertently becomes an external parent. Teachers can be a mentor to help set the child on the right path. In this role, the teacher can encourage the student to be the best they can be, and also be a source of inspiration and advice to the students."}/>
           </div>
                <Menu mobile={mobile} />
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
