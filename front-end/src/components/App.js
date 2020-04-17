import React from 'react';
import Event from './Event';
import Students from './Students'
import Jobs from './Jobs';
import Login from './studentLoginPage/Login';
import Register from './studentLoginPage/Register';
import EventPost from './eventEmployer/EventPost';
import ViewEventEmployer from './eventEmployer/ViewEventEmployer';
import ViewStudentProfile from './viewStudentProfile/ViewStudentProfile';
import SingleEvent from './eventEmployer/SingleEvent';
import EventPageStudent from './EventPageStudent';
import ViewRegisteredEvent from './ViewRegisteredEvent';
import JobPost from './jobEmployer/JobPost';
import ViewJobs from './jobEmployer/ViewJobs';
import JobApplicants from './jobEmployer/JobApplicants';
import ViewStudentApplication from './jobEmployer/ViewStudentApplication';
import Application from './Application';
import StudentProfile from './editStudentProfile/StudentProfile';
import CompanyProfile from './editCompanyProfile/CompanyProfile';
import MessageStudent from './chat/MessageStudent';
import MessageCompany from './chatCompany/MessageCompany';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/student/login' component={Login} />
        <Route path='/student/register' component={Register} />
        <Route path='/student/event' component={EventPageStudent} />
        <Route path='/student/registered/event' component={ViewRegisteredEvent} />
        <Route path='/companyprofile' component={CompanyProfile} />
        <Route path='/companyeventpost' component={EventPost} />
        <Route path='/companyjobpost' component={JobPost} />
        <Route path='/company/job/view' component={ViewJobs} />
        <Route path='/company/job/applicants' component={JobApplicants} />
        <Route path='/company/job/student/application' component={ViewStudentApplication} />
        <Route path='/applications' component={Application} />
        <Route path='/company/myevent' component={SingleEvent} />
        <Route path='/company/post' component={ViewEventEmployer} />  
        <Route path='/student/profile' component={ViewStudentProfile} />
        <Route path='/event' component={Event} />
        <Route path='/students' component={Students} />
        <Route path='/my' component={StudentProfile} />
        <Route path='/jobs' component={Jobs} />
        <Route path='/message' component={MessageStudent} />
        <Route path='/company/message' component={MessageCompany} />
      </div>
    </Router>
  )
}

export default App;
