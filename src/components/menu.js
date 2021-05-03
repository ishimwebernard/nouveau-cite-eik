import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Link, NavLink
  } from "react-router-dom";
  import WhoWeAre from './whoweare.js';
const Header = ({ title }) =>{
    return (
        <div className="px-6 bg-green-700">
              <p className="text-gray-100 text-xl py-2">{title}</p>  
        </div>
    )
}

const MenuItem = ({ itemText, itemArray, itemLink }) =>{
    const [expanded, setExpanded] = useState(false);
    const [redundant, setRedundant] = useState(false);
    const rows = [];
    if(itemArray !== undefined){
        for(let counter=0; counter< itemArray.length; counter++){
            let k= "/"+itemArray[counter].route;

            rows.push(
                    <Link to={k}  onClick={()=>{
                        setRedundant(!redundant);
                    }}>
                <p className="text-gray-900 text-md ml-4 p-0 ">{itemArray[counter].text}</p>
                </Link>
            )
        }
    }

    console.log(itemArray);
    return (
        <div className="px-6 cursor-pointer ">
                <p className="font-semibold text-md "  onClick={()=>{
                    setExpanded(!expanded);
                }}    >{itemText}</p>
                {expanded ? <div>{rows}</div> : ''}
        </div>
    )
}

export default function Menu() {
    return (
        <div>
            <Header title="Menu"  />
            <Link to="/">
            <p className="font-semibold text-md px-6 cursor-pointer text-gray-900 ">Home</p>
            </Link>
            <MenuItem itemText="About" itemArray={[{text:"Who we are", route:"whoweare"}, {text:"Mission and vision", route:"missionandvision"}, {text:"Head of School welcome", route:"hoswelcome"}]}/>
            <MenuItem itemText="Strategy" itemArray={[{text:"Duties of parents", route:"dutiesofparents"}, {text:"Duties of Students", route:"dutiesofstudents"}, {text:"Duties of Teachers", route:"dutiesofteachers"}]}/>
            <Header title="Login"/>
            <LoginSnippet />
        </div>
    )
}

const LoginSnippet = () =>{
    return (
        <div>
            <input className="transparent border-b-2 focus:outline-none" placeholder="Enter your email"/>
        </div>
    )
}
