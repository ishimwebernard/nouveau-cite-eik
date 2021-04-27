import React, { useState } from 'react';

const Header = ({ title }) =>{
    return (
        <div className="px-6 bg-green-700">
              <p className="text-gray-100 text-xl py-2">{title}</p>  
        </div>
    )
}

const MenuItem = ({ itemText, itemArray, itemLink }) =>{
    const [expanded, setExpanded] = useState(false)
    const rows = [];

    if(itemArray !== undefined){
        for(let counter=0; counter< itemArray.length; counter++){
            rows.push(<p className="text-gray-900 text-md ml-4 p-0 ">{itemArray[counter]}</p>)
        }
    }

    console.log(itemArray);
    return (
        <div className="px-6 cursor-pointer ">
                <p className="font-semibold text-md "  onClick={()=>{
                    setExpanded(!expanded);
                }}    >{itemText}</p>
                {expanded ? rows : ''}
                
        </div>
    )
}

export default function Menu() {
    return (
        <div>
            <Header title="Menu"  />
            <MenuItem itemText="Home" />
            <MenuItem itemText="About" itemArray={["Who we are", "Mission and vision", "Head of School welcome"]}/>
            <MenuItem itemText="Strategy" itemArray={["Who we are", "Mission and vision"]}/>
            <MenuItem itemText="Environment" itemArray={["Who we are", "Mission and vision"]}/>
            <MenuItem itemText="Contact" itemArray={["Who we are", "Mission and vision"]}/>
            <MenuItem itemText="Gallery" itemArray={["Who we are", "Mission and vision"]}/>
        </div>
    )
}
