import {ToastProvider, useToasts} from "react-toast-notifications"
import React, { useState } from 'react';
import Header from './header';
import SlideShow from './slideshow';
import Menu from './menu'
import Reasons from './reasonstojoineik'
import News from './recentNews'
import KeyLinks from './keyLinks'
import Footer from './footer'
import axios from "axios"

const loginUser = async(email, password) =>{
    const res = await axios.get('https://ecole-internationale-de-kigali.herokuapp.com/users/login', {
        data: {
            "email": email,
            "password": password
        }
  
      });
      return res.data.data;
}

export default function Main() {
    const [mobile, setMobile] = useState(false);
    return (
       <ToastProvider>
            <div className="bg-gray-100 flex flex-col">
            <Header absolute={false} onBurgerClicked={()=>{
                setMobile(!mobile);
            }}/>
            <SlideShow  />
            <div className="md:grid md:grid-cols-3 px-7 mt-10 space-x-4">
                <div className="md:col-span-2 py-2">
                    <Reasons />
                    <News />
                    <KeyLinks />
                </div>
                <Menu mobile={mobile} loginErrorFunction={(error)=>{
                    //     const { addToast } = useToasts();

                    // addToast(error, {appearance: 'error'})
                }}/>
            </div>
            <Footer />

        </div>
       </ToastProvider>
    )
}
