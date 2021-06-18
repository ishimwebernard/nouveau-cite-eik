import React, {useState} from 'react'
import TitleImage from './titleimage';
import schoollab from '../assets/schoollab.jpg'
import {ToastProvider, useToasts} from "react-toast-notifications"
import Iframe from 'react-iframe'
import Header from './header';
import Menu from './menu';
import Footer from './footer'
import CustomButton from './Button';
import BurgerMenu from './BurgerMenu'



export default function ContactUs() {
    const [burgerVisible, setBurgerVisible] = useState(false);
    const changeBurgerVisibility = () =>{
        setBurgerVisible(!burgerVisible)
    }
    window.scrollTo(0, 0)

    return (<ToastProvider>
        <div className="bg-gray-100">
            <Header absolute={false} onBurgerClicked={()=>{
               changeBurgerVisibility();
                console.log(burgerVisible);
            }}  />
                        <BurgerMenu visible={burgerVisible}/>

           <TitleImage text="CONTACT" image={schoollab}/>
           <div className="md:grid md:grid-cols-3 px-7 mt-10 space-x-4 ">
           <div className="col-span-2">
            <p className="text-6xl text-gray-800">Contact Us</p>
           <div className="">
           <div >
        <div className="flex space-x-2">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
        <p>KIGALI</p>
        </div>
         <div className="flex space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
        <p>email@email.com</p>
        </div>
         <div className="flex space-x-2">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg>
        <p>0789999999</p>
        </div>
           </div>
               <div className="w-full">
                 
<Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.500934594536!2d30.07558551420445!3d-1.9529056372660478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca685894774cf%3A0x96cf0522704fdc3c!2s%C3%89cole%20Internationale%20de%20Kigali!5e0!3m2!1sen!2srw!4v1623990050882!5m2!1sen!2srw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"/>               </div>

           </div>
           </div>
                <Menu />
           </div>
           <Footer />
        </div></ToastProvider>
    )
}

const InputMessage = ({placeHolder, big}) =>{
    return (
        <div>
           { big ? <textarea
           className="focus:outline-none p-2 w-full rounded-md mt-2 h-40"
        
           placeholder={placeHolder}
            /> : <input placeholder={`${placeHolder}`} className="focus:outline-none p-2 w-full rounded-md mt-2" />}
        </div>
    )
}

const TextLogoMaker = ({icon, text}) =>{
    return (
        <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg>
        <p>{text}</p>
        </div>
    )
}
