import React from 'react'
import schoollab from '../assets/schoollab.jpg'

let french = localStorage.getItem('language') == 'FR'
const delay = 5000;

const main_reasons = [
    {number: "1", title: french ? "Nous sommes accrédités internationalement":"We are internationaly accredited", description: french ? "Nous fournissons des services éducatifs de la plus haute qualité à tous ceux qui sont concernés par la sécurité publique et la durabilité grâce au principe Un test, une inspection, une certification dans le monde.":"We provide the highest quality education services for all concerned with public safety and sustainability through the principle of One Test, One Inspection, One Certification Worldwide." },
    {number: "2", title: french ? "Direction étudiante":"Student Leadership", description: french ? "Les étudiants ont la capacité d'influencer les décisions importantes concernant la qualité de l'éducation et de l'environnement d'apprentissage. Influencer les décisions importantes nécessite une écoute et une valorisation et l'incorporation des idées que les étudiants proposent.":"Students have the ability to influence major decisions about its quality of education and learning environment. Influencing major decisions requires a listening and a valuing and the incorporation of the ideas that students propose." },
    {number: "3", title: french ? "Matériel didactique riche et varié":" Genuine and Vivid learning materials", description: french ? "Pour mieux dispenser les enseignements, l’école s’est toujours souciée de mettre à la disposition des enseignants, le matériel adéquat etvarié, leur permettant de concrétiser, ce qui ailleurs, est enseigné dans l’abstraction.":"For the school to make up the meaningful learning, it has always tried its bestlevel to come up with relevant, proportionate and adequate learning materialsgiven to teachers, purposely for helping them to practically concretize what istaught in abstraction. Furthermore, the subjected teachers are trained to be fullyconversant with the given learning materials to concretize particularly thelearning of the abstract subjects." },
]

const ReasonItem = ({ number, title, subtitle }) =>{
    return (
            <div className=" items-center  flex flex-col space-y-0 px-4">
                <p className="md:text-center md:text-8xl text-4xl text-gray-100 ">{number}</p>
               <p className="text-white md:text-4xl text-2xl font-semibold w-full " >{title}</p>
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
       <div>
          <div className="relative mt-0 top-0">
            <img src={schoollab} className="h-96 w-full object-cover" />
            <div className="absolute bg-gray-800 bg-opacity-70 top-0 w-full h-full sm:items-left">
            <p className="md:mt-4 mt-2 md:ml-4 ml-2 text-gray-100 text-2xl md:text-4xl ">Reasons to join EIK</p>

                <div className=" w-full h-full items-center text-center">
                    <ReasonItem  number={main_reasons[index].number} title={main_reasons[index].title} subtitle={main_reasons[index].description} />
                </div>
            </div>
        </div>
       </div>
    )
}
