import handshakeAPI from '../apis/handshakeAPI';

export const fetchStudentProfile = (id) => async dispatch => {
    const response = await handshakeAPI.get(`/students/${id}`);    
    dispatch({
        type: 'FETCH_STUDENT_PROFILE',
        payload: response.data
    })
    dispatch(filterApplications(response.data.applications))
}

export const updateStudentProfile = (id, req) => async dispatch => {
    const response = await handshakeAPI.put(`/students/${id}`, req);
    dispatch({
        type: 'UPDATE_STUDENT_PROFILE',
        payload: response.data
    })
    dispatch(filterApplications(response.data.applications))
}

export const filterApplications = (applications) => {
    return {
        type: 'FILTER_APPLICATIONS',
        payload: applications
    }
}

export const fetchJobs = (studentId) => async (dispatch, getState) => {
    const response = await handshakeAPI.get('/jobs');
    dispatch({
        type: 'FETCH_JOBS',
        payload: response.data
    })
    
    dispatch(filterJobs(response.data));
    dispatch(fetchStudentProfile(studentId));
}

export const filterJobs = (jobs) => {
    return {
        type: 'FILTER_JOBS',
        payload: jobs
    }
}

export const fetchEvents = () => async dispatch => {
    const response = await handshakeAPI.get('/events');
    dispatch({
        type: 'FETCH_EVENTS',
        payload: response.data
    })
    dispatch(filterEvents(response.data));
}

export const filterEvents = (events) => {
    return {
        type: 'FILTER_EVENTS',
        payload: events
    }
}

export const fetchStudents = () => async dispatch => {
    const response = await handshakeAPI.get('/students');
    dispatch({
        type: 'FETCH_STUDENTS',
        payload: response.data
    })
    dispatch(filterStudents(response.data));
}

export const filterStudents = (students) => {
    return {
        type: 'FILTER_STUDENTS',
        payload: students
    }
}

export const fetchCompanyProfile = (id) => async dispatch => {
    const response = await handshakeAPI.get(`/employers/${id}`);
    dispatch({
        type: 'FETCH_COMPANY_PROFILE',
        payload: response.data
    })
}

export const fetchCompanyJobs = (companyName) => async dispatch => {
    const response = await handshakeAPI.get(`/jobs?name=${companyName}`);
    dispatch({
        type: 'FETCH_COMPANY_JOBS',
        payload: response.data
    })
}

export const fetchCompanyEvents = (companyName) => async dispatch => {
    const response = await handshakeAPI.get(`/events?name=${companyName}`);
    dispatch({
        type: 'FETCH_COMPANY_EVENTS',
        payload: response.data
    })
}

export const fetchChats = (studentId) => async dispatch => {
    const response = await handshakeAPI.get(`/chats/students/${studentId}`);
    dispatch({
        type: 'FETCH_CHATS',
        payload: response.data
    })
}

export const fetchMessages = (chatId) => async dispatch => {
    const response = await handshakeAPI.get(`/chats/${chatId}`);
    console.log("status", response.status)
    dispatch({
        type: 'FETCH_MESSAGES',
        payload: response.data
    })
}

export const addMessages = (chatId, req) => async dispatch => {
    const response = await handshakeAPI.put(`/chats/${chatId}`, req);
    dispatch({
        type: 'ADD_MESSAGES',
        payload: response.data
    })
}

export const applyJobs = (jobId, req) => async dispatch => {
    const response = await handshakeAPI.put(`/applications/new/${jobId}`, req);
    dispatch({
        type: 'APPLY_JOBS',
        payload: response.data  
    })
    console.log("reponse ", response.data)
}