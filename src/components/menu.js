import React, { useState } from 'react';
import {Link} from "react-router-dom";
import CustomButton from './Button';
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
                <p className="text-gray-900 text-md ml-4 p-0 p-2 ">{itemArray[counter].text}</p>
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
        <div className="flex flex-col space-y-2">
            <Header title="Menu"  />
            <Link to="/">
            <p className="font-semibold text-md px-6 cursor-pointer text-gray-900 ">Home</p>
            </Link>
            <MenuItem itemText="About" itemArray={[{text:"Who we are", route:"whoweare"}, {text:"Mission and vision", route:"missionandvision"}, {text:"Head of School welcome", route:"hoswelcome"}]}/>
            <MenuItem itemText="Strategy" itemArray={[{text:"Duties of parents", route:"dutiesofparents"}, {text:"Duties of Students", route:"dutiesofstudents"}, {text:"Duties of Teachers", route:"dutiesofteachers"}]}/>
            <MenuItem itemText="Student Life" itemArray={[{text:"Extracuricular Activities", route:"extracuriculatactivities"}, {text:"Student Clubs", route:"studentclubs"}]}/>
            <MenuItem itemText="News and Events" itemArray={[{text:"News", route:"news"}, {text:"Events", route:"events"}]}/>
              <Link to="/">
            <p className="font-semibold text-md px-6 cursor-pointer text-gray-900 ">Contact Us</p>
            </Link>
            <Header title="Login"/>
            <LoginSnippet />
        </div>
    )
}

const LoginSnippet = () =>{
    return (
        <div>
            <input className="transparent bg-transparent p-2 w-full border-2 rounded-md border-green-700 focus:outline-none" placeholder="Enter your email"/>
            <input className="transparent mt-2 bg-transparent p-2 w-full border-2 rounded-md border-green-700 focus:outline-none" type="password" placeholder="Enter your password"/>
            <CustomButton text="Login" good={true} />
        </div>
    )
}
