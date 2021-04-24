import React from 'react'

const Header = ({ title }) =>{
    return (
        <div className="px-6 bg-green-700">
              <p className="text-gray-100 text-xl py-2">{title}</p>  
        </div>
    )
}

const MenuItem = ({ itemText }) =>{
    return (
        <div className="  px-6 cursor-pointer">
                <p className="text-gray-900 text-md ">{itemText}</p>
        </div>
    )
}

export default function Menu() {
    return (
        <div>
            <Header title="Menu" />
            <MenuItem itemText="Home"/>
            <MenuItem itemText="About"/>
            <MenuItem itemText="Strategy"/>
            <MenuItem itemText="Environment"/>
            <MenuItem itemText="Contact"/>
            <MenuItem itemText="Gallery"/>
        </div>
    )
}
