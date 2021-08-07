import React, { useState } from 'react'
import TitleImage from './titleimage';
import schoollab from '../assets/schoolopening.jpg'
import {ToastProvider} from "react-toast-notifications"

import Header from './header';
import Menu from './menu';
import Footer from './footer'
let french = localStorage.getItem('language') == 'FR'

export default function Extracuricular() {
    window.scrollTo(0, 0)
    const [mobile, setMobile] = useState(false);
    return (<ToastProvider>
        <div className="bg-gray-100">
        <Header absolute={false} onBurgerClicked={()=>{
                setMobile(!mobile);
            }}/>
           <TitleImage text={french ? "Facilites pour l\'apprentissage":"School Facilities"} image={schoollab}/>
           <div className="md:grid md:grid-cols-3 px-7 mt-10 space-x-4">
           <div className="col-span-2"> 
           <Card title={french ? "Labo informatique":"ICT Laboratory"} description={french ? "L’Ecole Internationale de Kigali dispose d’un Labo informatique moderne équipé de 30 ordinateurs servant pour l’apprentissage des élèves pendant le cours d’ICT (Information Communication Technology). L’enseignant de ce cours lui-même est un informaticien de formation. Il dispose d’un Bachelors’ Degree en IT (Information Technology) justifiant la capacité qui lui permet donner aux apprenants les connaissances requises au niveau des cycles d’enseignement dont dispose l’école, voire même plus haut. Le motif d’installer le labo d’informatique de qualité est de permettre à nos élèves d’avoir des connaissances de base solides en matière d’informatique, et ainsi, les préparer dès leur jeune âge à pouvoir s’intégrer dans le monde d’aujourd’hui et le monde à venir qui les attend et qui, en perspective, sera plus régi par l’informatique dans tous les secteurs de la vie.  ":"Ecole Internationale de Kigali is set up by the ICT Laboratory, equipped by 30computers used by the learners during ICT lessons. (Information CommunicationTechnology). The ICT teachers must have at least bachelor’s degree in IT(Information Technology) which determines his/her capacity to deliver thesignificant and comprehensive skills to the learners on which the school’s levels oflearning are founded. The main motive of putting in place the standard ICT lab, isto enable our students to move with both today’s world and tomorrow’s worldwhich will be entirely driven by ICT in all sectors of life." } svg={(<svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>)} />
           <Card title={french ? "Matériel didactique riche et varié ":"Different genuine and vivid learning materials"} description="For the school to make up the meaningful learning, it has always tried its bestlevel to come up with relevant, proportionate and adequate learning materialsgiven to teachers, purposely for helping them to practically concretize what istaught in abstraction. Furthermore, the subjected teachers are trained to be fullyconversant with the given learning materials to concretize particularly thelearning of the abstract subjects." svg={(<svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
</svg>)}/>
<Card title={french ? "Jeux extérieurs modernes pour la maternelle":"Modern outdoor games for nursery section"} description={french ? "Les enfants à l’âge préscolaire proprement dit nécessitent un encadrement spécialisé et adapté à leur âge. C’est ainsi que, avant d’introduire la section maternelle, l’école a dû se préparer de façon particulière de sorte qu’il est en réalité difficile, si pas impossible, de décrire comment sont les enceintes de la section maternelle, l’état et arrangement des salles de classes, le matériel didactique adéquat, les terrains des jeux, les jouets appropriés à leur âge, les accessoires d’aisances, l’encadrement, et j’en passe.  La perception et la compréhension réelle nécessite une présence physique individuelle. Ces quelques photos qui défilent ne sont qu’une faible, d’ailleurs pauvre, représentation de la réalité.":"Preschoolers in particular, need a special framing corresponding to their age. It isin this regard before introducing the nursery section, the school ought to be readyin a particular way despite the fact that it was difficult to put in place both theconducive environment for learning and equipment for the nursery section: Thestate and arrangement of classrooms, adequate teaching and learning materials,playgrounds, playing apparatuses corresponding to their ages, self-easingaccessories etc. The real perception and comprehension calls for individualphysical appearance. Some photos that you might see flying around are justrepresentation of reality."} svg={(<svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>)}/>
<Card title={french ? "Disponibilités des bus scolaires":"School buses availability"} description={french ? "L’école facilite le transport en disponibilisant des bus qui sillonnent les coins des trois districts de la ville de Kigali pour transporter les enfants jusqu’a l’école, si pas à partir de leur domicile mais au moins à partir d’un endroit où ils peuvent les accéder le plus facilement possible. Les bus partent de Nyamirambo, Kicukiro, Kimironko et Gatsyata jusqu’à l’école. Il y a même un bus qui transportent les enfants à partir de Ruyenzi jusqu’à l’école. ":"The school facilitates transport by providing learners with good buses which movein all directions of Kigali city on daily basis to transport them to school; may benot exactly from their homes but at least from the place where they can pickthem more easily. The school buses move to Nyamirambo, Kicukiro, Kimironkoand Gatsata up to school. There is even one which picks children from Ruyenzi toschool."} svg={(<svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>)} />

           </div>
           <Menu mobile={mobile}/>
           </div>
           <Footer />
        </div></ToastProvider>
    )
}

const Card = ({ title, description,svg }) =>{
    return (
        <div className="grid grid-cols-6 space-x-4 bg-white p-3 shadow-md mt-4 mb-4">
            {svg}
    <div className="col-span-5">
        <p className="text-4xl text-green-700">{title}</p>
        <p className="mt-2 text-gray-500">{description}</p>
    </div>
        </div>
    )
    }
