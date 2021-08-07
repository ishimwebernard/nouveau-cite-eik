import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function CustomButton({good, text, loading}) {
    return (
        <p className="font-bold mt-4  text-gray-100 text-lg cursor-pointer flex space-x-2 title-confortaa">
            <span className={`rounded-lg flex px-2 py-2 title-confortaa ${good ? 'button-background title-confortaa':'gray-grad'}`}>
           <div className={`${loading ? '':'hidden'}`} >
           <Loader type="TailSpin" color="#fff" height={20} width={20} />
           </div>


            {text}
        </span>
        </p>
    )
}
