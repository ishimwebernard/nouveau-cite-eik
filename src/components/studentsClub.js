import React, { useState } from 'react'
import TitleImage from './titleimage';
import schoollab from '../assets/schoolopening.jpg'
import {ToastProvider} from "react-toast-notifications"
import CompLab from '../assets/CompLab.jpeg'
import RicheEVariee from '../assets/richeevariee.jpeg'
import Header from './header';
import Footer from './footer'
import Jeux from '../assets/jeux.jpeg'
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
           <div className="px-7 mt-10 space-x-4">
           <div className="col-span-2"> 
           <Card title={french ? "Labo informatique":"ICT Laboratory"} description={french ? "L’Ecole Internationale de Kigali dispose d’un Labo informatique moderne équipé de 30 ordinateurs servant pour l’apprentissage des élèves pendant le cours d’ICT (Information Communication Technology). L’enseignant de ce cours lui-même est un informaticien de formation. Il dispose d’un Bachelors’ Degree en IT (Information Technology) justifiant la capacité qui lui permet donner aux apprenants les connaissances requises au niveau des cycles d’enseignement dont dispose l’école, voire même plus haut. Le motif d’installer le labo d’informatique de qualité est de permettre à nos élèves d’avoir des connaissances de base solides en matière d’informatique, et ainsi, les préparer dès leur jeune âge à pouvoir s’intégrer dans le monde d’aujourd’hui et le monde à venir qui les attend et qui, en perspective, sera plus régi par l’informatique dans tous les secteurs de la vie.  ":"Ecole Internationale de Kigali is set up by the ICT Laboratory, equipped by 30computers used by the learners during ICT lessons. (Information CommunicationTechnology). The ICT teachers must have at least bachelor’s degree in IT(Information Technology) which determines his/her capacity to deliver thesignificant and comprehensive skills to the learners on which the school’s levels oflearning are founded. The main motive of putting in place the standard ICT lab, isto enable our students to move with both today’s world and tomorrow’s worldwhich will be entirely driven by ICT in all sectors of life." }
            svg={
                (
            <img src={CompLab}/>
)} />
           <Card title={french ? "Matériel didactique riche et varié ":"Different genuine and vivid learning materials"} description="For the school to make up the meaningful learning, it has always tried its bestlevel to come up with relevant, proportionate and adequate learning materialsgiven to teachers, purposely for helping them to practically concretize what istaught in abstraction. Furthermore, the subjected teachers are trained to be fullyconversant with the given learning materials to concretize particularly thelearning of the abstract subjects."
            svg={(
            <img src={RicheEVariee}/>
            )}/>
<Card title={french ? "Jeux extérieurs modernes pour la maternelle":"Modern outdoor games for nursery section"} description={french ? "Les enfants à l’âge préscolaire proprement dit nécessitent un encadrement spécialisé et adapté à leur âge. C’est ainsi que, avant d’introduire la section maternelle, l’école a dû se préparer de façon particulière de sorte qu’il est en réalité difficile, si pas impossible, de décrire comment sont les enceintes de la section maternelle, l’état et arrangement des salles de classes, le matériel didactique adéquat, les terrains des jeux, les jouets appropriés à leur âge, les accessoires d’aisances, l’encadrement, et j’en passe.  La perception et la compréhension réelle nécessite une présence physique individuelle. Ces quelques photos qui défilent ne sont qu’une faible, d’ailleurs pauvre, représentation de la réalité.":"Preschoolers in particular, need a special framing corresponding to their age. It isin this regard before introducing the nursery section, the school ought to be readyin a particular way despite the fact that it was difficult to put in place both theconducive environment for learning and equipment for the nursery section: Thestate and arrangement of classrooms, adequate teaching and learning materials,playgrounds, playing apparatuses corresponding to their ages, self-easingaccessories etc. The real perception and comprehension calls for individualphysical appearance. Some photos that you might see flying around are justrepresentation of reality."}
 svg={(
    <img src={Jeux}/>
)}/>
{/* <Card title={french ? "Disponibilités des bus scolaires":"School buses availability"} description={french ? "L’école facilite le transport en disponibilisant des bus qui sillonnent les coins des trois districts de la ville de Kigali pour transporter les enfants jusqu’a l’école, si pas à partir de leur domicile mais au moins à partir d’un endroit où ils peuvent les accéder le plus facilement possible. Les bus partent de Nyamirambo, Kicukiro, Kimironko et Gatsyata jusqu’à l’école. Il y a même un bus qui transportent les enfants à partir de Ruyenzi jusqu’à l’école. ":"The school facilitates transport by providing learners with good buses which movein all directions of Kigali city on daily basis to transport them to school; may benot exactly from their homes but at least from the place where they can pickthem more easily. The school buses move to Nyamirambo, Kicukiro, Kimironkoand Gatsata up to school. There is even one which picks children from Ruyenzi toschool."} svg={(<svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>)} /> */}

           </div>
           </div>
           <Footer />
        </div></ToastProvider>
    )
}

const Card = ({ title, description,svg }) =>{
    return (
        <div className="grid grid-cols-3 space-x-4 bg-white shadow-md mt-4 mb-4">
            {svg}
    <div className="col-span-2 p-3">
        <p className="text-4xl text-green-700">{title}</p>
        <p className="mt-2 text-gray-500">{description}</p>
    </div>
        </div>
    )
    }
