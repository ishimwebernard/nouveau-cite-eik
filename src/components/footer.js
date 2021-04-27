import React from 'react'

const FooterList = ({title, links}) => {
    const rows = [];
    links.forEach((link)=>{
            rows.push(
                <p className="text-md text-gray-100">{link}</p>
            )
    })
    return (
        <div>
            <p className="text-2xl text-yellow-400">{title}</p>
            {rows}
        </div>
    );
}

export default function Footer() {
    return (
       <div className="grid grid-cols-13 bg-green-700 p ">
            <div className="col-span-8 col-start-7 x-4 py-4 items-top text-center flex space-x-20 ">
            <FooterList title="Address" links={["KN 180 ST", "+245345634", "info@spam.gmai"]}/>
            <FooterList title="Quick Menu" links={["Home", "About", "School Organization"]}/>
            <FooterList title="Learning" links={["Primary School", "Nursery School"]}/>
        </div>
       </div>
    )
}
