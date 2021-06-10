import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import UserContext from './userGLobal'
import {ToastProvider, useToasts} from 'react-toast-notifications'
import Footer from './footer'
import Button from './Button'
import {firebase} from '@firebase/app'
import env from 'react-dotenv'
import uuid from 'react-uuid'
import '@firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBLtbU8MWi_BHunfQ7b4a6JPad0Jdmeh9E",
    authDomain: "ecole-internationale-dekigli.firebaseapp.com",
    projectId: "ecole-internationale-dekigli",
    storageBucket: "ecole-internationale-dekigli.appspot.com",
    messagingSenderId: "669208960466",
    appId: "1:669208960466:web:07897e417b95a689cb3c0b",
    measurementId: "G-9EKFKSTZPN"
  }
  firebase.initializeApp(firebaseConfig)

const InputText = ({ placeHolder, onChange }) =>{
    return (
        <div className='py-2'>
            <input className='w-full border-1 border-gray-700 p-1 shadow-sm focus:outline-none' placeholder={placeHolder} onChange={(e)=>{
                onChange(e)
            }}   />
        </div>
    )
}



const Lesson = ({lesson, lessonShifter}) =>{
    return (
        <div className='flex flex-col space-y-0 justify-center cursor-pointer' onClick={()=>{ lessonShifter(lesson) }}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-36 w-36 p-auto" viewBox="0 0 20 20" fill="#047857">
  <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
  <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
</svg>
<p className='w-full text-xl text-gray-800 '>{lesson.title.length < 20 ? lesson.title : lesson.title.toString().substring(0,20)+'...'}</p>
<p className='w-full text-md text-gray-400'>{lesson.dateUPloaded}</p>
        </div>
    )
}


const LessonsView = ({lessonShifter}) =>{
    const {user} = useContext(UserContext)  ;
    let globalUser;
    globalUser = user;
    if(!user){
        globalUser=localStorage.getItem("useremail")
    } 
    const {addToast} = useToasts();
    const [fullRows, setFullRows] = useState([]);
    const rows = [];
    useEffect(()=>{
        const getServerData = async()=>{
            const data = {"teacher": "user"}
          
            try{
                const res = await axios(
                    {    method: 'post',
                         url: 'https://ecole-internationale-de-kigali.herokuapp.com/lessons/lessonbyteacher',
                        data: {"teacher": globalUser.toString()}
                    }
                );
                //console.log(res.data.data)
                for(let lesson of res.data.data){
                    rows.push(
                        <Lesson lesson={lesson} lessonShifter={lessonShifter} />
                    )
                }
                setFullRows(rows)

                return rows;
               // addToast(res.response.data, {appearance: "success"})
            }catch(error){
                error = error.response.data
                addToast(error, {appearance: "error"})
            }
        }
        getServerData()
    }, [])

    return (
        <ToastProvider>
           <div className='grid grid-cols-3 items-top px-8'>
               {fullRows}
           </div>
        </ToastProvider>
    )
}

const ListItem = ({title, value}) => {
    return (
    <div className=' grid grid-cols-2 w-full justify-center space-x-4'> 
        <p className='text-right text-bg text-gray-500' >{title}</p>
        <p className='text-bg'>{value}</p>
    </div>
    )
}

export default  function MyAccount() {
    const {user} = useContext(UserContext)  ;
    let globalUser;
    globalUser = user;

console.log(env.REACT_APP_appId)

    if(!user){
        globalUser=localStorage.getItem("useremail")
    } 
    const [FocusLesson, setFocusLesson] = useState({})
    const [AddLessonActive, setAddLessonActive] = useState(false);
    let file
    let description
    let teacher
    let targetClass
    let userId
    let subject;
    let title;
    const changeSubject = (newSUbject) =>{
        subject = newSUbject;
        console.log(subject) 
    }
    const setLessonFile = (newFIle) =>{
        file = newFIle
    }
    const setteacher = (newteacher) =>{
        teacher = newteacher
    }
    const settargetClass = (newtargetClass) =>{
        targetClass = newtargetClass;
        console.log(subject) 
    }
    const setdescription = (newdescription) =>{
        description = newdescription
    }
    const settitle = (newtitle) =>{
        title = newtitle
    }

    const shiftLesson = (lesson) =>{
        setFocusLesson(lesson)
        
    }
    const AddLesson = () =>{
        setAddLessonActive(!AddLessonActive)
    }
    const uploadLesson = async(data) =>{
        try{
            const res = await axios({
                method: 'post',
                url: 'https://ecole-internationale-de-kigali.herokuapp.com/lessons/',
                data
            })
           
            return {error: null, message: res.response}
        }catch(error){
            return {error: error, message: null}
        }
    }
    const Upld = () =>{
        const {addToast} = useToasts(); 

        return (
            <div onClick={async()=>{
                alert('Clicked')
                const userStorageRef = firebase.storage().ref().child(uuid());
                userStorageRef.put(file).then((snapshot)=>{
                    const fileDirectory = snapshot.ref.getDownloadURL().then(async(url)=>{
                        let toUPload = {
                            description,title,file:url,targetClass,teacher:globalUser, userId:globalUser
                        }
                        const rs = await uploadLesson(toUPload);
                        console.log(rs)
                 
                    })
                })
                
            }}>
            <Button text='Upload' good={true}/>
            </div>
        )
    }
    function LessonAdder({ visible, onOpen}) {
        console.log('initials: ', visible)
        return (
            <div className={`${ visible ? 'fixed':'hidden'}  fixed h-full w-full bg-gray-700 bg-opacity-50 justify-center`}>
   
               <div className='m-auto bg-gray-50 w-3/4 h-4/5 mt-10 px-8 py-4 rounded-lg' >
               <p className='font-semibold text-2xl flex flex-col space-y-2' >Upload New Lesson</p>
               <InputText placeHolder="Subject" onChange={(e)=>{
                   //console.log(e.target.value)
                   changeSubject(e.target.value)
               }} /> 
               <select onChange={(e)=>{
                   console.log(e.target.value)
                   settargetClass(e.target.value)
               }}>
                   <option value='p1'>Primary 1</option>
                   <option value='p2'>Primary 2</option>
                   <option value='p3'>Primary 3</option>
                   <option value='p4'>Primary 4</option>
                   <option value='p5'>Primary 5</option>
                   <option value='p6'>Primary 6</option>
               </select>
               <InputText placeHolder="Title" onChange={(e)=>{
                   settitle(e.target.value)
               }}/>
               <InputText placeHolder="Teacher" onChange={(e)=>{
                   setteacher(e.target.value)
               }} />
                <textarea className='w-full h-40 shadow-sm focus:outline-none p-1' placeholder='Description' onChange={(e)=>{
                    setdescription(e.target.value)
                }} />
                <input type='file' onChange={(e)=>{
                    console.log(e.target.files)
                    setLessonFile(e.target.files[0])
                }} />
                <div className='flex space-x-4 w-full' >
                    <Upld />
                    <div onClick={()=>{
                        
                        onOpen()
                        }}>
                    <Button text='Cancel' good={false}   />
                    </div>
                </div>
               </div>
            </div>
        )
    }
    
    
    return (
        <ToastProvider>
            <div className='bg-gray-50'>
           <LessonAdder visible={AddLessonActive} onOpen={AddLesson} />
           <div className='bg-transparent grid grid-cols-3 p-2'>
                <p className='text-xl'>EIK Upload Tool</p>
                <div className='flex space-x-2 justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
</svg>
<p className='uppercase text-bold cursor-pointer' onClick={()=>{
    setAddLessonActive(!AddLessonActive)
}} >Upload new material</p>
                </div>
                <div className='justify-right'>
                <p className='text-right space-x-2 text-green-700'>{globalUser}
                <span className='m-4'>Logout</span>

                </p>
                </div>
            </div>
         <div className='w-full flex '>
            <div className='w-3/5'>
               <LessonsView lessonShifter={shiftLesson} />
            </div>
            <div className='border-l border-gray-200 w-2/5 py-3 px-8'>
                <p className='text-bold text-2xl'>{FocusLesson.title}</p>
               <ListItem title="Subject" value={FocusLesson.subject}/>
                <ListItem title="Target Class" value={FocusLesson.targetClass}/>
                <ListItem title="Teachers Email" value={FocusLesson.teacher} />
                <ListItem title="Description" value={FocusLesson.description}/>
                <ListItem title="File" value={FocusLesson.file}/>
                <ListItem title="Date Uploaded" value={FocusLesson.dateUPloaded}/>
                <div className='flex space-x-4'>
                    <Button text="Open" good={true}/>
                    <Button text="Delete"  />
                </div>
            </div>
         </div>
            
        </div>
        <Footer />
        </ToastProvider>
    )
}
