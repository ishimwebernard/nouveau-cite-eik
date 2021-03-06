import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { useToasts } from 'react-toast-notifications';

import CustomButton from './Button';
let french = localStorage.getItem('language') == 'FR'

const Header = ({ title }) =>{
    return (
        <div className="px-6 bg-green-700">
              <p className="text-gray-100 text-xl py-2">{title}</p>  
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
    const [loadingText, setLoadingText] = useState('Login')
    const [loadingBool, setLoadingBool] = useState(false)
    const [textbutton, setButtonText] = useState();
    const { addToast } = useToasts();
    const history = useHistory()

    return (
        <div>
            <input className="transparent mt-2 bg-transparent p-2 w-full border-2 rounded-md border-green-700 focus:outline-none" type="text/plain" placeholder="Enter your class code"
        onChange={(e)=>{
           setClassCode(e.target.value)
           console.log(classCOde)
        }}
        />
                   <div onClick={async()=>{
                       setLoadingBool(true)
                       setLoadingText('Loading...')
                       const res = await loginStudent(classCOde)
                       if(res.error){
                        addToast(res.error.data, {appearance: 'error'})
                        setLoadingBool(false)
                        setLoadingText('Login')
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
const MenuItem = ({ itemText, itemArray, itemLink }) =>{
    const [expanded, setExpanded] = useState(false);
    const [redundant, setRedundant] = useState(false);
    const rows = [];
    if(itemArray !== undefined){
        for(let counter=0; counter< itemArray.length; counter++){
            let k= "/"+itemArray[counter].route;

            rows.push(
                    <Link to={k}  onClick={()=>{
                        setRedundant(!redundant);
                    }}>
                <p className="text-gray-900 text-md ml-4 p-0 p-2 ">{itemArray[counter].text}</p>
                </Link>
            )
        }
    }

    return (
        <div className="px-6 cursor-pointer ">
                <p className="font-bold text-md "  onClick={()=>{
                    setExpanded(!expanded);
                }}    >{itemText}</p>
                {expanded ? <div>{rows}</div> : ''}
        </div>
    )
}

export default function BurgerMenu({visible}) {
    return (
        <div className={`${visible ? '':'hidden'}`} >
             <Header title="Menu"  />
            <Link to="/">
            <p className="font-bold text-md px-6 cursor-pointer text-gray-900 ">{french ? "Accueil":"Home"}</p>
            </Link>
            <MenuItem itemText={french ? "?? propos":"About"} itemArray={[{text:french ? "Qui nous sommes":"Who we are", route:"whoweare"}, {text:french ? "Mission et vision":"Mission and vision", route:"missionandvision"}, {text: french ? "Message de la directrice":"Head of School welcome", route:"hoswelcome"}]}/>
            <MenuItem itemText={french ? "Strat??gie":"Strategy"} itemArray={[{text:french ? "Les devoirs des parents":"Duties of parents", route:"dutiesofparents"}, {text:french ? "Les devoirs des ??tudiants":"Duties of Students", route:"dutiesofstudents"}, {text:french ? "Devoirs des enseignants":"Duties of Teachers", route:"dutiesofteachers"}]}/>
            <Link to="/facilities">
            <p className="font-bold text-md px-6 cursor-pointer text-gray-900 ">{french ? "Installations scolaires":"School Facilities"}</p>
            </Link>
            <Link to="/news">
            <p className="font-bold text-md px-6 cursor-pointer text-gray-900 ">{french ? "Nouvelles et Ev??nements":"News and events"}</p>
            </Link>              <Link to="/contact">
            <p className="font-bold text-md px-6 cursor-pointer text-gray-900 ">{french ? "Nous contacter":"Contact Us"}</p>
            </Link>
            <Header title="Student Login"/>
           <StudentLogin />
            <div className='py-4' >
            <Header title="Teachers Login"/>
            <LoginSnippet />
        </div>
        </div>
    )
}

const LoginSnippet = () =>{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginorloading, setLoginorLoading] = useState('Login')
    const [loginBool, setLOadingBool] = useState(false)
    const { addToast } = useToasts();
    const {user, setUser} = useContext(UserContext)
    let history = useHistory(); 

    return (
        <div>
            <input className="transparent bg-transparent p-2 w-full border-2 rounded-md border-green-700 focus:outline-none" placeholder="Enter your email" onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
            <input className="transparent mt-2 bg-transparent p-2 w-full border-2 rounded-md border-green-700 focus:outline-none" type="password" placeholder="Enter your password"
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            />
            <div onClick={async()=>{

                setLoginorLoading('Loading ...')
                setLOadingBool(true)
                const response = await LoginUser(email, password);
                setLoginorLoading('Login')
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
