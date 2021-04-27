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
                <Router>
                    <Link to={k}  onClick={()=>{
                        setRedundant(!redundant);
                    }}>
                <p className="text-gray-900 text-md ml-4 p-0 ">{itemArray[counter].text}</p>
                </Link>

                </Router>
            )
        }
    }

    console.log(itemArray);
    return (
        <div className="px-6 cursor-pointer ">
                <p className="font-semibold text-md "  onClick={()=>{
                    setExpanded(!expanded);
                }}    >{itemText}</p>
                {expanded ? <Router>{rows}</Router> : ''}
        </div>
    )
}

export default function Menu() {
    return (
        <div>
            <Header title="Menu"  />
            <MenuItem itemText="Home" />
            <MenuItem itemText="About" itemArray={[{text:"Who we are", route:"whoweare"}, {text:"Mission and vision", route:"missionandvision"}, {text:"Head of School welcome", route:"hoswelcome"}]}/>
            {/* <MenuItem itemText="Strategy" itemArray={["Who we are", "Mission and vision"]}/>
            <MenuItem itemText="Environment" itemArray={["Who we are", "Mission and vision"]}/>
            <MenuItem itemText="Contact" itemArray={["Who we are", "Mission and vision"]}/>
            <MenuItem itemText="Gallery" itemArray={["Who we are", "Mission and vision"]}/> */}
        </div>
    )
}
