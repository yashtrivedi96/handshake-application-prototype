import React from 'react';
import CompanyHeader from '../CompanyHeader';
import {Button} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateStatus } from '../../actions';


class ViewStudentApplication extends React.Component {
    constructor(){
        super();
        this.state = {}
    }

    componentDidMount() {

    }
    onAccept = () => {
        const studentId = this.props.location.state.student.stuedntId;
        const reqObj = {
            appllicationId: this.props.location.state.student._id,
            status: 'Reviewed'
        }
        this.props.updateStatus(studentId, reqObj);
    }

    onReject = () => {
        const studentId = this.props.location.state.student.stuedntId;
        const reqObj = {
            appllicationId: this.props.location.state.student._id,
            status: 'Declined'
        }
        this.props.updateStatus(studentId, reqObj);
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
                        <h3>{this.props.location.state.student.name}</h3>
                    </div>
                    <div>
                        University: {this.props.location.state.student.university}
                    </div>
                    <div>
                        Major: {this.props.location.state.student.major}
                    </div>
                    <div>
                        GPA: {this.props.location.state.student.cgpa}
                    </div>
                    <div style={{marginTop: '50px'}}>
                        <div>
                            <Button primary onClick={this.onAccept}>Reviewed</Button>
                            <Button color='red' onClick={this.onReject}>Declined</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { updateStatus })(ViewStudentApplication);