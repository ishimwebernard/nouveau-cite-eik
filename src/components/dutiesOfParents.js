import React from 'react'
import TitleImage from './titleimage';
import schoollab from '../assets/schoollab.jpg'
import {ToastProvider, useToasts} from "react-toast-notifications"

import Header from './header';
import Menu from './menu';
import Footer from './footer'
import BigCard from './bigCard'
let french = localStorage.getItem('language') == 'FR'

export default function DutiesOfParents() {    
    window.scrollTo(0, 0)

    return (<ToastProvider>
        <div className="bg-gray-100">
            <Header absolute={false} />
           <TitleImage text={french ? "Devoirs des parents":"Duties of parents"} image={schoollab}/>
           <div className="grid grid-cols-3 px-7 mt-10 space-x-4">
           <div className="col-span-2">
            <Card title={french ? "Suivre les progrès de leur enfant à l'école":"Monitor their child’s progress in school"}
             description={french ? "Les parents doivent participer activement à l'école de leur enfant. Ils doivent savoir comment leur enfant progresse à l'école. Les portails de notation en ligne, les bulletins scolaires et les rapports de progrès de l'école fournissent aux parents une assez bonne image des performances de l'élève - notes, assiduité, comportement et évaluation de l'enseignant.":"Parents should have an active participation in their child’s school. They should be aware of how their child is progressing in school. The online grading portals, report cards and the school progress reports provide parents a pretty good picture of the student’s performance – grades, attendance, behavior, and evaluation of the teacher."} />
            <Card title={french ? "Coordonner avec les enseignants":"Coordinate with teachers"}
            description={french ? "L'enseignant est la meilleure personne à qui parler de la réussite d'un enfant à l'école. Souvent, l'enseignant sera en mesure de donner des commentaires non seulement sur l'aspect académique, mais aussi sur les aspects émotionnels et sociaux. Les parents seront informés s'il y a des problèmes qui peuvent entraver l'apprentissage et la réussite des élèves.":"The teacher is the best person to talk to on how well a child is doing in school. Often, the teacher will be able to give feedback not just on the academic aspect, but the emotional, and social aspects as well. Parents will be made aware if there are problems that may be hindering learning and student achievement."}/>
            <Card title={french ? "Assister aux réunions parents-professeurs":"Attend Parent-teacher Meetings"}
            description={french ? "Une association parents-enseignants ou PTA est une organisation composée de parents et d'enseignants qui vise à faciliter la participation des parents à l'école. La plupart des écoles primaires et secondaires (qu'elles soient publiques ou privées) ont un PTA. Les associations parents-enseignants jouent un rôle actif dans l'élaboration de programmes qui répondent aux besoins éducatifs des enfants. Ils favorisent également des partenariats solides entre les familles, les écoles et les communautés.":" A parent-teacher association or PTA is an organization composed of parents and teachers that’s intended to facilitate parental participation in school. Most elementary and middle schools (whether public or private) have a PTA. Parent-teacher associations take an active role in developing programs that support the educational needs of children. They also promote strong partnerships among families, schools, and communities."}/>
            <Card title={french ? "Participer aux activités scolaires":"Participate in School Activities"}
            description={french ? "Les activités scolaires sont d'excellentes occasions de réunir les élèves et les parents. Les élèves sont fortement encouragés à participer aux fonctions scolaires, aux concours et aux sports. Les enfants veulent naturellement montrer leurs talents et leurs compétences à tout le monde, en particulier leurs parents. C'est aussi une excellente occasion d'avoir une « impression » de l'environnement scolaire et de la façon dont les élèves interagissent les uns avec les autres":"School activities are great opportunities to bring together students and parents. Students are strongly encouraged to participate in school functions, contests, and sports. Children naturally want to exhibit their talents and skills for everyone to see, especially their parents. It’s also an excellent opportunity to get a “feel” of the school environment and how students interact with each other"}/>
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
