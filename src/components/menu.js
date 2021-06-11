import React, { useState, useContext } from 'react';
import {Link} from "react-router-dom";
import CustomButton from './Button';
import axios from 'axios'
import { useToasts } from 'react-toast-notifications';
import { useHistory, Redirect } from "react-router-dom";
import UserContext from './userGLobal'



const Header = ({ title }) =>{
    return (
        <div className="px-6 bg-green-700">
              <p className="text-gray-100 text-xl py-2">{title}</p>  
        </div>
    )
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
                <p className="font-semibold text-md "  onClick={()=>{
                    setExpanded(!expanded);
                }}    >{itemText}</p>
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
                       const res = await loginStudent(classCOde)
                       if(res.error){
                        addToast(res.error.data, {appearance: 'error'})
                       }else{
                        addToast('Authorized', {appearance: 'success'})
                        setTimeout(()=>{
                            localStorage.setItem('studentclass',res.data)
                            

                        history.push('/student')
                        window.location.reload();
                        }, 1000)
                       }
                   }} >
                   <CustomButton text='Login' good={true} />
                   </div>

        </div>
    )
}

export default function Menu({mobile, loginErrorFunction}) {
    return (
        <div className={` md:flex md:flex-col md:space-y-2 ${mobile ? 'fixed top-16 left-0 m-0 bg-gray-100 w-full h-full z-500':'hidden'}`}>
            <Header title="Menu"  />
            <Link to="/">
            <p className="font-semibold text-md px-6 cursor-pointer text-gray-900 ">Home</p>
            </Link>
            <MenuItem itemText="About" itemArray={[{text:"Who we are", route:"whoweare"}, {text:"Mission and vision", route:"missionandvision"}, {text:"Head of School welcome", route:"hoswelcome"}]}/>
            <MenuItem itemText="Strategy" itemArray={[{text:"Duties of parents", route:"dutiesofparents"}, {text:"Duties of Students", route:"dutiesofstudents"}, {text:"Duties of Teachers", route:"dutiesofteachers"}]}/>
            <MenuItem itemText="Student Life" itemArray={[{text:"Extracuricular Activities", route:"extracuriculatactivities"}, {text:"Student Clubs", route:"studentclubs"}]}/>
            <MenuItem itemText="News and Events" itemArray={[{text:"News", route:"news"}, {text:"Events", route:"events"}]}/>
              <Link to="/contact">
            <p className="font-semibold text-md px-6 cursor-pointer text-gray-900 ">Contact Us</p>
            </Link>
            <Header title="Student Login"/>
           <StudentLogin />
            <div className='py-4' >
            <Header title="Teachers Login"/>
            <LoginSnippet loginErrorFunction={loginErrorFunction}/>
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
    const [loginorloading, setLoginorLoading] = useState('Login')
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
                const response = await LoginUser(email, password);
                setLoginorLoading('Login')
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
            <CustomButton text={loginorloading} good={true} />
            </div>
        </div>
    )
}
/**
 * 
 */