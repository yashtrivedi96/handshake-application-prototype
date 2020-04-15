import React from 'react';
import {Link} from 'react-router-dom'; 

const JobMenu = () => {
    return (
        <div>
            <div className="ui pointing secondary menu" style={{paddingTop: '5px', paddingBottom: '5px'}}>
            <div className="item" style={{marginLeft: '30px'}}>
                <h3>Job Search</h3>
            </div>
                <div className="right menu" style={{marginRight: '40px'}} >
                    <Link to='/applications' className="item">Applications</Link>
                    <Link className="item">On-Campus Interviews</Link>
                </div>
            </div>
        </div>
    );
}

export default JobMenu;