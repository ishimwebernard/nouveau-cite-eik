import React from 'react';
import Logo from '../assets/schoollogo.png'

export default function Header({ onBurgerClicked }) {
    return (
        <div className={`flex  flex-row space-x-4 items-center md:px-16 px-8 py-2  w-full  top-0 z-50 header-background `}>
            <img src={Logo} className="md:h-20 md:w-20 h-14 w-14" alt="Ecole international de kigali"/>
            <p className="hidden md:block md:text-4xl text-green-700 ">École Internationale De Kigali</p>
           
            <div className="flex space-x-4 absolute right-10">
           <img className="h-10 w-10 cursor-pointer" onClick={()=>{
      localStorage.setItem('language', 'FR')
      window.location.reload()
  }}
  alt="United States"
  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"/>
  <img   onClick={()=>{
      localStorage.setItem('language', 'EN')
      window.location.reload()
  }}
  alt="United States"
  className="h-10 w-10 cursor-pointer"
  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/>
  <svg onClick={()=>{
                onBurgerClicked();
                console.log('Burger Clicked')
            }} xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:hidden " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
           </div>
          
     
        
        
        </div>
    )
}
