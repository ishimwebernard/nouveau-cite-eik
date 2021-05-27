import React from 'react';
import Index from './index';
import MissionAndVision from './missionandvision'
import { BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom'
import WhoWeAre from './whoweare';
import DutiesOfParents from './dutiesOfParents' 
import DutiesOfStudents from './dutiesOfStudents'
import DutiesOfTeachers from './dutiesOfTeachers'
import HeadOfSchoolWelcome from './headofschoolwelcome'
import extracuriculatactivities from './extracuricularActivities'
import studentclubs from './studentsClub'
import ContactUs from './contactUs'
import Girl from '../assets/Image13.jpg';
import NewsViewer from './newsViewer'
import News from './news'
const news = [
    {title: 'Bernard gets turing award', body: 'Ohh my', image: {Girl}}
]
export default function Main() {
    var row = [];
    for(var i = 0; i< news.length; i++){
        var route = news[i].title.toString().replaceAll(' ', '_');
        row.push(<Route exact path={route} render={NewsViewer}/>       )
    }
    return (
        <Switch>
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
                  {
                    news.forEach(()=>{
                        return <Route exact path={route} render={NewsViewer}/> 
                    })
                  }
                {row}
        </Switch>
    )
}

