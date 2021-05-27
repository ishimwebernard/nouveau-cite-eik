import React, {useState} from 'react'
import TitleImage from './titleimage';
import Girl from '../assets/Image13.jpg';
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
    return (
        <div className="bg-gray-100">
            <Header absolute={false} onBurgerClicked={()=>{
               changeBurgerVisibility();
                console.log(burgerVisible);
            }}  />
                        <BurgerMenu visible={burgerVisible}/>

           <TitleImage text="CONTACT" image={Girl}/>
           <div className="md:grid md:grid-cols-3 px-7 mt-10 space-x-4 ">
           <div className="col-span-2">
            <p className="text-6xl text-gray-800">Contact Us</p>
           <div className="md:grid md:grid-cols-3 flex flex-col">
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
               <div className="col-span-2">
                    <div className="grid grid-cols-2 space-x-2">
                <InputMessage placeHolder="First Name" />
                <InputMessage placeHolder="Last Name" />
            </div>
            <InputMessage placeHolder="Subject"  big={false} />
            <InputMessage placeHolder="Message" big={true} />
            <CustomButton text="Submit" good={true} />
               </div>

           </div>
           </div>
                <Menu />
           </div>
           <Footer />
        </div>
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
