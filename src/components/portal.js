import React, { useState, useContext } from 'react';
import {Link} from "react-router-dom";
import CustomButton from './Button';
import axios from 'axios'
import { useToasts } from 'react-toast-notifications';
import { useHistory } from "react-router-dom";
import UserContext from './userGLobal'
import {ToastProvider} from "react-toast-notifications"
import { createPortal } from 'react-dom';
import { Tab, Tabs } from 'react-bootstrap'
import CodeBreaker from '../assets/codebreaker.jpg'

let french = localStorage.getItem('language') == 'FR'



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

export default function Portal({loginErrorFunction}){
return (
    <ToastProvider>
        <img src={CodeBreaker} className='w-screen h-screen object-cover' />
  <div className='flex bg-gray-600 bg-opacity-60 object-fit h-screen w-screen absolute top-0'>
      <div className='w-1/3'></div>
 <div className="justify-center w-1/3 px-1/3 items-center mt-1/3 h-1/2 mt-8 rounded-xl  bg-gray-50 p-4">
   
   <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
 <Tab eventKey="home" title="Student Login">
 <StudentLogin />
 </Tab>
 <Tab eventKey="profile" title="Teachers Login">
 <LoginSnippet loginErrorFunction={loginErrorFunction}/>
 </Tab>
</Tabs>
</div>

  </div>
</ToastProvider>
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
/**
 * 
 */