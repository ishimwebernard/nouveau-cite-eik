import React from 'react';
import Logo from '../assets/schoollogo.png'

export default function Header() {
    return (
        <div className="flex space-x-4 items-center backdrop-filler px-16 py-2  w-full fixed top-0 z-50">
            <img src={Logo} className="h-20 w-20" alt="Ecole international de kigali"/>
            <p className="text-4xl text-green-700">Ecole international de Kigali</p>
        </div>
    )
}
