import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {ToastProvider, useToasts} from 'react-toast-notifications'
import Button from './Button'
import Loader from "react-loader-spinner";

  let globalUser = localStorage.getItem('studentclass');
 




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

    const {addToast} = useToasts();
    const [studentClass, setStudentClass] = useState([]);
    const [fullRows, setFullRows] = useState(
        <div>
        <p className='text-center m-auto text-green-700 flex font-bold text-2xl ' >
          <Loader type="TailSpin" color="#047857" height={80} width={80} />
          Loading
          </p>
   </div>
    );

    const rows = [];
    console.log(globalUser)
    useEffect(()=>{
        
        const getServerData = async()=>{
            console.log(globalUser)
            
            try{
                const res = await axios(
                    {    method: 'post',
                         url: 'https://ecole-internationale-de-kigali.herokuapp.com/lessons/lessonbyclass',
                        data: {"targetClass": globalUser.toString()}
                    }
                );
                if(res.data.data.length ==0){
                    
                        setFullRows(
                            <div className='text-center'>
                                <p className='text-center w-full text-2xl text-green-700'>
                                You have no study materials yet!
                                </p>
                            </div>
                        )
                
                }else{
                    for(let lesson of res.data.data){
                        rows.push(
                            <Lesson lesson={lesson} lessonShifter={lessonShifter} />
                        )
                    }
                  
                }
            }catch(error){
                addToast('SOmething went wrong', {appearance: "error"})
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
    <div className=' grid grid-cols-2 w-full justify-center space-x-4 w-full'> 
        <p className='text-right text-bg text-gray-500' >{title}</p>
        <p className='text-bg w-full flex-wrap'>{value}</p>
    </div>
    )
}

export default  function Student() {
    const [FocusLesson, setFocusLesson] = useState({})

    const shiftLesson = (lesson) =>{
        setFocusLesson(lesson)
        
    }
    
    
    
    return (
        <ToastProvider>
            <div className='bg-gray-50 h-screen'>
           <div className='bg-transparent grid grid-cols-3 p-2'>
                <p className='text-xl'>EIK Upload Tool</p>
                <div className='flex space-x-2 justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
</svg>

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
                    <div onClick={()=>{
                        window.open(FocusLesson.file, '_blank')
                    }}>
                    <Button text="Open" good={true}/>
                    </div>
                </div>
            </div>
         </div>
            
        </div>
        </ToastProvider>
    )
}
