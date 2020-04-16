import {combineReducers} from 'redux';
import profileReducer from './profileReducer';
import jobReducer from './jobReducer';
import eventReducer from './eventReducer';
import studentReducer from './studentReducer';
import companyRedcuer from './companyReducer';
import companyJobsReducer from './companyJobsReducer';
import companyEventsReducer from './companyEventsReducer';
import filterJobsReducer from './filterJobsReducer';
import filterStudentsReducer from './filterStudentsReducer';
import filterEventsReducer from './filterEventsReducer';
import filterApplicationsReducer from './filterApplicationsReducer';
import chatReducer from './chatReducer';
import messageReducer from './messageReducer';
import createChatsReducer from './createChatsReducer';

export default combineReducers({
    profile: profileReducer,
    jobs: jobReducer,
    events: eventReducer,
    students: studentReducer,
    company: companyRedcuer,
    companyJobs: companyJobsReducer,
    companyEvents: companyEventsReducer,
    filter: filterJobsReducer,
    studentsFilteredList: filterStudentsReducer,
    eventsFilteredList: filterEventsReducer,
    applicationsFilteredList: filterApplicationsReducer,
    chats: chatReducer,
    conversation: messageReducer,
    firstChat: createChatsReducer
})

