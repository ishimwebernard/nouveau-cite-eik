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

export default function Main() {
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
        </Switch>
    )
}
