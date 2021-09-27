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
       <div className=" bg-green-700">
            <div className=" md:flex px-4 py-4 items-top text-left md:space-x-20 ">
            <FooterList title="Address" links={["B.POST 3123", "+250788305488", "symka2001@yahoo.fr"]}/>
            <FooterList title="Quick Menu" links={["Home", "About", "School Organization"]}/>
            <FooterList title="Learning" links={["Primary School", "Nursery School"]}/>
        </div>
       </div>
    )
}
