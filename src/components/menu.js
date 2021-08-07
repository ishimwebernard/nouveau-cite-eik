import React, { useState, useContext } from 'react';
import {Link} from "react-router-dom";
import CustomButton from './Button';
import axios from 'axios'
import { useToasts } from 'react-toast-notifications';
import { useHistory } from "react-router-dom";
import UserContext from './userGLobal'
let french = localStorage.getItem('language') == 'FR'

const Header = ({ title }) =>{
    return (
        <div className="px-6 button-background">
              <p className="text-gray-100 text-xl py-2">{title}</p>  
        </div>
    )
}


const MenuItem = ({ itemText, itemArray, itemLink,svgcode }) =>{
    const [expanded, setExpanded] = useState(false);
    const [redundant, setRedundant] = useState(false);
    const rows = [];
    if(itemArray !== undefined){
        for(let counter=0; counter< itemArray.length; counter++){
            let k= "/"+itemArray[counter].route;

            rows.push(
                    <Link  to={k}  onClick={()=>{
                        setRedundant(!redundant);
                    }}>
                <p className="text-gray-900 text-md ml-4 p-0 p-2 ">{itemArray[counter].text}</p>
                </Link>
            )
        }
    }

    return (
        <div className=" cursor-pointer ">
              <div className="text-lg flex space-x-1  items-center hover:bg-gray-200 rounded-lg px-2"  onClick={()=>{
                    setExpanded(!expanded);
                }}   >
  {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#047857">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg> */}
{svgcode}
            <p className="mt-3 font-bold text-md px-2 cursor-pointer text-gray-900 items-center">{itemText}</p>
  </div>
              
                {expanded ? <div>{rows}</div> : ''}
        </div>
    )
}
const loginStudent = async(code) =>{
    try{
        const res = await axios({
            method: 'post',
            url: 'https://ecole-internationale-de-kigali.herokuapp.com/users/student',
            data: {code}
        })
        return res.data
    }catch(error){
        return {
            error: error.response.data
        }
    }
}
const StudentLogin = () =>{
    const [classCOde, setClassCode] = useState();
    const [loadingText, setLoadingText] = useState(french ? 'Connexion':'Login')
    const [loadingBool, setLoadingBool] = useState(false)
    const [textbutton, setButtonText] = useState();
    const { addToast } = useToasts();
    const history = useHistory()

    return (
        <div>
            <input className="transparent mt-2 bg-transparent p-2 w-full border-2 rounded-md border-green-700 focus:outline-none" type="text/plain" placeholder={french ? "Entrez votre code de classe":"Enter your class code"}
        onChange={(e)=>{
           setClassCode(e.target.value)
           console.log(classCOde)
        }}
        />
                   <div onClick={async()=>{
                       setLoadingBool(true)
                       setLoadingText(french ? 'Chargement...':'Loading...')
                       const res = await loginStudent(classCOde)
                       if(res.error){
                        addToast(res.error.data, {appearance: 'error'})
                        setLoadingBool(false)
                        setLoadingText(french ? 'Chargement':'Login')
                       }else{
                        addToast('Authorized', {appearance: 'success'})
                        setTimeout(()=>{
                            localStorage.setItem('studentclass',res.data)
                            
                            setLoadingBool(false)
                        history.push('/student')
                        window.location.reload();
                        }, 1000)
                       }
                   }} >
                   <CustomButton text={loadingText} good={true} loading={loadingBool} />
                   </div>

        </div>
    )
}

export default function Menu({mobile}) {
    return (
        <div className={` md:flex md:flex-col md:space-y-2 ${mobile ? 'fixed top-16 left-0 m-0 bg-gray-100 w-full h-full z-500':'hidden'}`}>
            <Header title="Menu"  />
            <Link to="/" >
  <div className="text-lg flex space-x-1  items-center hover:bg-gray-200 rounded-lg px-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#111827">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
            <p className="mt-3 font-bold text-md px-2 cursor-pointer text-gray-900 items-center">{french ? "Accueil":"Home"}</p>
  </div>
            </Link>
            <MenuItem svgcode={
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#111827">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
             </svg>
            } itemText={french ? "À propos":"About"} itemArray={[{text:french ? "Qui nous sommes":"Who we are", route:"whoweare"}, {text:french ? "Mission et vision":"Mission and vision", route:"missionandvision"}, {text: french ? "Accueil du chef d'établissement":"Head of School welcome", route:"hoswelcome"}]}/>
            <MenuItem svgcode={
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#111827">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            } itemText={french ? "Stratégie":"Strategy"} itemArray={[{text:french ? "Les devoirs des parents":"Duties of parents", route:"dutiesofparents"}, {text:french ? "Les devoirs des étudiants":"Duties of Students", route:"dutiesofstudents"}, {text:french ? "Devoirs des enseignants":"Duties of Teachers", route:"dutiesofteachers"}]}/>
            {/* <MenuItem itemText="Student Life" itemArray={[{text:"Extracuricular Activities", route:"extracuriculatactivities"}, {text:"School facilities", route:"facilities"}]}/> */}
            <Link to="/facilities" className="text-lg">
                <div  className="text-lg flex space-x-1  items-center hover:bg-gray-200 rounded-lg px-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#111827">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
            <p className="mt-3 font-bold text-md px-2 cursor-pointer text-gray-900 items-center ">{french ? "Installations scolaires":"School Facilities"}</p>
            </div>
            </Link>
            <Link to="/news" className="text-lg">
                <div className="text-lg flex space-x-1  items-center hover:bg-gray-200 rounded-lg px-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#111827">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
</svg>
<p className="mt-3 font-bold text-md px-2 cursor-pointer text-gray-900 items-center ">{french ? "Nouvelles et Evènements":"News and events"}</p>

                </div>
            </Link>            
              <Link to="/contact" className="text-lg">
                  <div className="text-lg flex space-x-1  items-center hover:bg-gray-200 rounded-lg px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#111827">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg>
<p className="mt-3 font-bold text-md px-2 cursor-pointer text-gray-900 items-center ">{french ? "Nous contacter":"Contact Us"}</p>

                  </div>
            </Link>
            <Header title={french ? "Connexion étudiant": "Student Login"}/>
           <StudentLogin />
            <div className='py-4' >
            <Header title={french ? "Connexion enseignant": "Teachers Login"}/>
            <LoginSnippet />
            </div>
        </div>
    )
}
const LoginUser = async(email, password) =>{
    const data = {
        "email": email,
        "password": password
    }
    try{
    const res = await axios(
        {   method: 'post',
            url: 'https://ecole-internationale-de-kigali.herokuapp.com/users/login',
            data
        }
    );
   
    return {email: email}
}catch(error){
    return {error: error.response.data.data}
}
}

const LoginSnippet = () =>{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginorloading, setLoginorLoading] = useState(french ? 'Connexion ':'Login')
    const [loginBool, setLOadingBool] = useState(false)
    const { addToast } = useToasts();
    const {user, setUser} = useContext(UserContext)
    let history = useHistory(); 

    return (
        <div>
            <input className="transparent bg-transparent p-2 w-full border-2 rounded-md border-green-700 focus:outline-none" placeholder={french ? "Entrer votre Email":"Enter your email"} onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
            <input className="transparent mt-2 bg-transparent p-2 w-full border-2 rounded-md border-green-700 focus:outline-none" type="password" placeholder={french ? "Tapez votre mot de passe": "Enter your password"}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            />
            <div onClick={async()=>{

                setLoginorLoading(french ? 'Chargement...': 'Loading ...')
                setLOadingBool(true)
                const response = await LoginUser(email, password);
                setLoginorLoading(french ? 'Connexion':'Login')
                setLOadingBool(false)
                if(response.error){
                    return addToast(response.error, {appearance: "error"})
                }else if(response.email !== undefined){
                    const email = response.email.toString();
                    setUser(email) 
                    localStorage.setItem("useremail", email);
                    history.push('/myaccount')
                    window.location.reload();
                }
            }}>
            <CustomButton text={loginorloading} good={true} loading={loginBool}/>
            </div>
        </div>
    )
}
/**
 * 
 */