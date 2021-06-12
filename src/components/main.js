import React, {createContext, useState} from 'react';
import UserContext from './userGLobal'
import Index from './index';
import MissionAndVision from './missionandvision'
import { BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom'
import {toast, ToastContainer} from "react-toastify"
import WhoWeAre from './whoweare';
import DutiesOfParents from './dutiesOfParents' 
import DutiesOfStudents from './dutiesOfStudents'
import DutiesOfTeachers from './dutiesOfTeachers'
import HeadOfSchoolWelcome from './headofschoolwelcome'
import extracuriculatactivities from './extracuricularActivities'
import studentclubs from './studentsClub'
import ContactUs from './contactUs'
import schoollab from '../assets/schoollab.jpg'
import MyAccount from './MyAccount'
import StudentAccount from './student'
import NewsViewer from './newsViewer'
import News from './news'
const news = [
    {title: 'Bernard gets turing award', body: 'Ohh my', image: {schoollab}}
]
export default function Main() {
    var row = [];
    const [user, setUser] = useState(null)
    for(var i = 0; i< news.length; i++){
        var route = news[i].title.toString().replaceAll(' ', '_');
        row.push(<Route exact path={route} render={NewsViewer}/>       )
    }


    return (
        <Switch className='w-full h-full'>           
                  <UserContext.Provider value={{user, setUser}}>
                  <Route exact path="/whoweare" component={WhoWeAre}/>
                  <Route exact path="/" component={Index} />
                  <Route exact path="/missionandvision" component={MissionAndVision} />
                  <Route exact path="/dutiesofparents" component={DutiesOfParents} />
                  <Route exact path="/dutiesofstudents" component={DutiesOfStudents} />
                  <Route exact path="/dutiesofteachers" component={DutiesOfTeachers} />
                  <Route exact path="/hoswelcome" component={HeadOfSchoolWelcome} />
                  <Route exact path="/extracuriculatactivities" component={extracuriculatactivities} />
                  <Route exact path="/studentclubs" component={studentclubs} />
                  <Route exact path="/contact" component={ContactUs} />
                  <Route exact path="/news" component={News} />
                  <Route exact path="/student" component={StudentAccount}/>
                  <Route exact path="/myaccount" component={MyAccount}/>
                  {
                    news.forEach(()=>{
                        return <Route exact path={route} render={NewsViewer}/> 
                    })
                  }
                {row}
                  </UserContext.Provider>
        </Switch>
    )
}

