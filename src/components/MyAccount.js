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
import Loader from "react-loader-spinner";
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
            <input className='w-full border-1 border-gray-700 p-1 shadow-sm focus:outline-none' placeholder={placeHolder} required onChange={(e)=>{
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
    const [fullRows, setFullRows] = useState(
        <div>
             <p className='text-center m-auto text-green-700 flex font-bold text-2xl ' >
               <Loader type="TailSpin" color="#047857" height={80} width={80} />
               Loading
               </p>
        </div>
    );
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
                if(rows.length === 0){
                    setFullRows(
                        <div className='text-center'>
                            <p className='text-center w-full text-2xl text-green-700'>
                            No lessons uploaded yet!
                            </p>
                        </div>
                    )
                }else{
                    setFullRows(rows)
                }

                return rows;
               // addToast(res.response.data, {appearance: "success"})
            }catch(error){
                error = error.response.data
                addToast(error, {appearance: "error"})
            }
        }
        getServerData()
    }, [])
    window.scrollTo(0, 0)

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
    <div className=' grid grid-cols-2 w-full justify-center space-x-4 w-full'> 
        <p className='text-right text-bg text-gray-500' >{title}</p>
        <p className='text-bg w-full flex-wrap'>{value}</p>
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
        console.log(lesson)
        
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
            console.log(res)
            return {error: null, message: res.data.message}
        }catch(error){
            return {error: error.response.data.data, message: null}
        }
    }
    const Upld = () =>{
        const {addToast} = useToasts(); 
        const [uploadbol, setUploadbool] = useState(false)
        const [uploadText, setUploadText] = useState('Upload')
        return (
            <div onClick={async()=>{
                setUploadText('Uploading ...')
                setUploadbool(true)
                const userStorageRef = firebase.storage().ref().child(uuid());
                userStorageRef.put(file).then((snapshot)=>{
                    const fileDirectory = snapshot.ref.getDownloadURL().then(async(url)=>{
                       
                        let toUPload = {
                            description,title,file:url,targetClass,teacher:globalUser, userId:globalUser, subject
                        }
                        console.log(toUPload)
                        const rs = await uploadLesson(toUPload);
                        if(rs.error){
                            addToast(rs.error, {appearance: 'error'})
                            setUploadText('Upload')
                            setUploadbool(false)
                        }else{
                            addToast(rs.message, {appearance: 'success'})
                            setUploadText('Upload')
                            setUploadbool(false)
                            setTimeout(()=>{
                                window.location.reload();

                            }, 1000)
                        }
                 
                    })
                })
                
            }}>
            <Button text={uploadText} good={true} loading={uploadbol}/>
            </div>
        )
    }
    function LessonAdder({ visible, onOpen, loading}) {
        console.log('initials: ', visible)
        return (
            <div className={`${ visible ? 'fixed':'hidden'} ${loading ? 'opacity-50':''}  fixed h-full w-full bg-gray-700 bg-opacity-50 justify-center`}>
   
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

    const DeleteButton = () =>{
        const {addToast} = useToasts(); 
        return (
            <div onClick={async()=>{
                console.log(FocusLesson.docUUID)
                const res = await axios(
                    {
                        method: 'post',
                        url: 'https://ecole-internationale-de-kigali.herokuapp.com/lessons/removelesson',
                        data: {doc: FocusLesson.docUUID}
                    }
                )
                addToast('Lesson deleted succesfully', {appearance: 'success'})
                setTimeout(()=>{
                    window.location.reload();

                }, 3000)
            }} >
            <Button text="Delete"  />
            </div>
        )
    }
    
    
    return (
        <ToastProvider>
            <div className='bg-gray-50 h-screen w-full'>
           <LessonAdder visible={AddLessonActive} onOpen={AddLesson} />
           {/* <div className={`${} w-full h-full text-center bg-gray-700 bg-opacity-80 flex`} >
          

              
           </div> */}
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
            <div className={`${FocusLesson.docUUID ? '':'hidden'} border-l border-gray-200 w-2/5 py-3 px-8`}>
                <p className='text-bold text-2xl'>{FocusLesson.title}</p>
               <ListItem title="Subject" value={FocusLesson.subject}/>
                <ListItem title="Target Class" value={FocusLesson.targetClass}/>
                <ListItem title="Teachers Email" value={FocusLesson.teacher} />
                <ListItem title="Description" value={FocusLesson.description}/>
                <ListItem title="File" value={FocusLesson.file}/>
                <ListItem title="Date Uploaded" value={FocusLesson.dateUPloaded}/>
                <div className='flex space-x-4'>
                    <div onClick={()=>{
                        window.open(FocusLesson.file, '_blank')
                    }}>
                    <Button text="Open" good={true}/>
                    </div>
                    <DeleteButton />
                </div>
            </div>
         </div>
            
        </div>
        </ToastProvider>
    )
}
