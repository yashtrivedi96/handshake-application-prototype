import React from 'react';
import CompanyHeader from '../CompanyHeader';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateStatus, fetchStudentProfile } from '../../actions';


class ViewStudentApplication extends React.Component {
    constructor(){
        super();
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchStudentProfile(this.props.location.state.student.studentId)
    }
    onAccept = () => {
        const studentId = this.props.location.state.student.studentId;
        const reqObj = {
            appllicationId: this.props.location.state.student._id,
            status: 'Reviewed'
        }
        this.props.updateStatus(studentId, reqObj);
    }

    onReject = () => {
        const studentId = this.props.location.state.student.studentId;
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
                <iframe src='https://test-handshake.s3.amazonaws.com/resume_5e996d140c49d423b10b0e68' height='700' width='100%'></iframe>
                </div>
                <div className='ui segment' style={{width: '45%', float: 'left', marginLeft: '20px', marginTop: '20px'}}>
                    <div>
                        <Link to={{pathname: '/company/student', state: { student: this.props.profile }}}><h3>{this.props.location.state.student.name}</h3></Link>
                    </div>
                    <div>
                        University: {this.props.location.state.student.university}
                    </div>
                    <div>
                        Major: {this.props.location.state.student.major}
                    </div>
                    <div>
                        ID: {this.props.location.state.student.studentId}
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

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
} 

export default connect(mapStateToProps, { updateStatus, fetchStudentProfile })(ViewStudentApplication);