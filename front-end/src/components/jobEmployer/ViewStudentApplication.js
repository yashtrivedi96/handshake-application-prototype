import React from 'react';
import CompanyHeader from '../CompanyHeader';
import {Button} from 'semantic-ui-react';
import axios from 'axios';


class ViewStudentApplication extends React.Component {
    constructor(){
        super();
        this.state = {}
    }

    componentDidMount() {

    }
    onAccept = () => {
        
    }

    onReject = () => {
        
    }
    render() {
        
        return (
            <div>
                <div>
                    <CompanyHeader />
                </div>
                <div style={{width: '50%', float: 'left', marginLeft: '20px', marginTop: '20px'}}>
                <iframe src='https://test-handshake.s3.amazonaws.com/resume_17' height='700' width='100%'></iframe>
                </div>
                <div className='ui segment' style={{width: '45%', float: 'left', marginLeft: '20px', marginTop: '20px'}}>
                    <div>
                        <h3>{this.props.location.state.student.student_name}</h3>
                    </div>
                    <div>
                        University: {this.props.location.state.student.student_college_name}
                    </div>
                    <div>
                        Major: {this.props.location.state.student.major}
                    </div>
                    <div>
                        
                    </div>
                    <div style={{marginTop: '50px'}}>
                        <div>
                            <Button primary onClick={this.onAccept}>Accept</Button>
                            <Button color='red' onClick={this.onReject}>Reject</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewStudentApplication;