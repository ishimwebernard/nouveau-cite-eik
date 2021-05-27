import React, { useState } from 'react'
import Girl from '../assets/Image9.jpg';
import { TimelineMax } from 'gsap/all';
import Typist from 'react-typist';

const delay = 5000;

const main_reasons = [
    {number: "1", title: "We are internationaly accredited", description: "We provide the highest quality education services for all concerned with public safety and sustainability through the principle of One Test, One Inspection, One Certification Worldwide." },
    {number: "2", title: "Student Leadership", description: "Students have the ability to influence major decisions about its quality of education and learning environment. Influencing major decisions requires a listening and a valuing and the incorporation of the ideas that students propose." },
    {number: "3", title: "Suportive Environment", description: "Students have the ability to influence major decisions about its quality of education and learning environment. Influencing major decisions requires a listening and a valuing and the incorporation of the ideas that students propose." },
]

const ReasonItem = ({ number, title, subtitle }) =>{
    return (
            <div className=" items-center md:px-40 flex flex-col space-y-0 ">
                <p className="md:text-center md:text-8xl text-4xl text-gray-100 ">{number}</p>
               <p className="text-white md:text-4xl sm:text-2xl font-semibold " >{title}</p>
                <p className="text-gray-200 p-0 m-0">{subtitle}</p>
            </div>
    );
}

const generateJSX = () =>{
    const rows = [];
    main_reasons.forEach((reason)=>{
        rows.push(<ReasonItem number={reason.number} title={reason.title} subtitle={reason.description} />);
    });
    return rows;
}


export default function Reasons() {
  //const [upItem, setUpItem] = useState({});
    const tl = new TimelineMax();
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    const componentRef = React.useRef();
    const items = generateJSX();
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === main_reasons.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);
  
    return (
        <div className="relative">
            <img src={Girl} className="h-96" />
            <div className="absolute bg-gray-800 bg-opacity-70 top-0 w-full h-full sm:items-left">
            <p className="md:mt-4 mt-2 md:ml-4 ml-2 text-gray-100 text-2xl md:text-4xl ">Reasons to join EIK</p>

                <div className=" w-full h-full items-center text-center">
                    <ReasonItem  number={main_reasons[index].number} title={main_reasons[index].title} subtitle={main_reasons[index].description} />
                </div>
            </div>
        </div>
    )
}
