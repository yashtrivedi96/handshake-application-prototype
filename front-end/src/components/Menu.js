import React from 'react';
import {Link} from 'react-router-dom'; 
import usericon from '../images/user.png';

const Menu = () => {
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
                    <Link to='/jobs' className="item">Jobs</Link>
                    <Link to='/event' className="item">Events</Link>
                    <Link to='/student/registered/event' className="item">Registered Events</Link>
                    <Link to='/students' className="item">Students</Link>
                    <Link to='/my' className="item"><img class="ui avatar image" src={usericon}></img></Link>
                </div>
            </div>
        </div>
    );
}

export default Menu;