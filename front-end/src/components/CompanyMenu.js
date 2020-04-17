import React from 'react';
import {Link} from 'react-router-dom'; 
import usericon from '../images/user.png';

const CompanyMenu = () => {
    return (
        <div>
            <div className="ui pointing secondary menu" style={{paddingTop: '10px', paddingBottom: '10px'}}>
            <div className="item">
                <div className="ui icon input" style={{marginLeft: '70px', width: '350px'}} > 
                    <input type="text" placeholder="Search" />
                    <i aria-hidden="true" className="search icon"></i>
                </div>
            </div>
                <div className="right menu">
                    <Link to='/companyjobpost' className="item">Job Post</Link>
                    <Link to='/companyeventpost' className="item">Event Post</Link>
                    <Link to='/company/job/view' className="item">Job Postings</Link>
                    <Link to='' className="item">Event Postings</Link>
                    <Link to='/students' className="item">Students</Link> 
                    <Link to='/company/message' className="item">Messages</Link>
                    <Link to='/companyprofile' className="item"><img class="ui avatar image" src={usericon}></img></Link>
                </div>
            </div>
        </div>
    );
}

export default CompanyMenu;