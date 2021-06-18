import React from 'react'
import TitleImage from './titleimage';
import schoollab from '../assets/schoollab.jpg'
import {ToastProvider, useToasts} from "react-toast-notifications"

import Header from './header';
import Menu from './menu';
import Footer from './footer'
import BigCard from './bigCard'

export default function Extracuricular() {
    window.scrollTo(0, 0)

    return (<ToastProvider>
        <div className="bg-gray-100">
            <Header absolute={false} />
           <TitleImage text="School Facilities" image={schoollab}/>
           <div className="grid grid-cols-3 px-7 mt-10 space-x-4">
           <div className="col-span-2">
           <Card title="ICT Laboratory" description="Ecole Internationale de Kigali is set up by the ICT Laboratory, equipped by 30
computers used by the learners during ICT lessons. (Information Communication
Technology). The ICT teachers must have at least bachelor’s degree in IT
(Information Technology) which determines his/her capacity to deliver the
significant and comprehensive skills to the learners on which the school’s levels of
learning are founded. The main motive of putting in place the standard ICT lab, is
to enable our students to move with both today’s world and tomorrow’s world
which will be entirely driven by ICT in all sectors of life."  svg={(<svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>)} />
           <Card title="Different genuine and vivid learning materials" description="For the school to make up the meaningful learning, it has always tried its best
level to come up with relevant, proportionate and adequate learning materials
given to teachers, purposely for helping them to practically concretize what is
taught in abstraction. Furthermore, the subjected teachers are trained to be fully
conversant with the given learning materials to concretize particularly the
learning of the abstract subjects." svg={(<svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
</svg>)}/>
<Card title="Modern outdoor games for nursery section" description="Preschoolers in particular, need a special framing corresponding to their age. It is
in this regard before introducing the nursery section, the school ought to be ready
in a particular way despite the fact that it was difficult to put in place both the
conducive environment for learning and equipment for the nursery section: The
state and arrangement of classrooms, adequate teaching and learning materials,
playgrounds, playing apparatuses corresponding to their ages, self-easing

accessories etc. The real perception and comprehension calls for individual
physical appearance. Some photos that you might see flying around are just
representation of reality." svg={(<svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>)}/>
<Card title="School buses availability" description="The school facilitates transport by providing learners with good buses which move
in all directions of Kigali city on daily basis to transport them to school; may be
not exactly from their homes but at least from the place where they can pick
them more easily. The school buses move to Nyamirambo, Kicukiro, Kimironko
and Gatsata up to school. There is even one which picks children from Ruyenzi to
school." svg={(<svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>)} />

           </div>
                <Menu />
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
