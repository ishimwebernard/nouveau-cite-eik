import React from 'react';
import Logo from '../assets/schoollogo.png'

export default function Header() {
    return (
        <div className="flex space-x-4 items-center bg-gray-100 px-16 py-2  w-full">
            <img src={Logo} className="h-20 w-20" alt="Ecole international de kigali"/>
            <p className="text-4xl text-green-700">Ecole international de Kigali</p>
        </div>
    )
}
