
import React, { useState, useEffect } from 'react'
import Button from './Button'

const InputText = ({ placeHolder, onChange }) =>{
    return (
        <div className='py-2'>
            <input className='w-full border-1 border-gray-700 p-1 shadow-sm focus:outline-none' placeholder={placeHolder}   />
        </div>
    )
}

export default function LessonAdder({ visible}) {
    const [localVisible, setLocalVisible] = useState(visible)
    const [k, setk] = useState(!visible)
    useEffect(()=>{
        
    }, [])
    //let k = visible;
    //setLocalVisible(visible)
    console.log('initials: ', k)
    return (
        <div className={`${ k ? 'fixed':'hidden'}  fixed h-full w-full bg-gray-700 bg-opacity-50 justify-center`}>
           <div className='m-auto bg-gray-50 w-3/4 h-4/5 mt-10 px-8 py-4 rounded-lg' >
           <p className='font-semibold text-2xl flex flex-col space-y-2' >Upload New Lesson</p>
           <InputText placeHolder="Subject" />
           <InputText placeHolder="Title" />
           <InputText placeHolder="Teacher" />
            <textarea className='w-full h-40 shadow-sm focus:outline-none p-1' placeholder='Description'  />
            <div className='flex space-x-4 w-full' >
                <Button text='Upload' good={true}/>
                <div onClick={()=>{
                      //setLocalVisible(!localVisible)
                      //if(localVisible){
                          setLocalVisible(false)
                          setk(false)
                          //setk(!k)
                      //}
                      console.log(k)

                    }}>
                <Button text='Cancel' good={false}   />
                </div>
            </div>
           </div>
        </div>
    )
}
