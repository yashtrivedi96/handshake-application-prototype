import React from 'react';
import Header from '../Header';
import Bio from './Bio';
import Education from './Education';
import Experience from './Experience';
import AddForm from './AddForm';
import Skills from './Skills';
import AddExperienceForm from './AddExperienceForm';
import { Form, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchStudentProfile, updateStudentProfile } from '../../actions';

class StudentProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      basicDetail: [],
      educationDetails: [],
      experienceDetails: [],
      showAddForm: false,
      showTextFrom: false,
      showAddExperienceForm: false,
      tempCareerObjective: ''
    };
  }
  componentDidMount() {
    const id = '5e87e9c65410160a6a5926e3';
    this.props.fetchStudentProfile(id);
  }

  onAddSchoolClick = () => {
    this.setState({ showAddForm: !this.state.showAddForm });
  };

  onAddSchool = () => {
    this.setState({ showAddForm: !this.state.showAddForm });
  };

  onAddExperienceClick = () => {
    this.setState({ showAddExperienceForm: !this.state.showAddExperienceForm });
  };

  onAddExperience = () => {
    // console.log('new', experience);
    // const list = [...this.state.experienceDetails, experience];
    // console.log(list);
    // this.setState({ experienceDetails: list });
    this.setState({ showAddExperienceForm: !this.state.showAddExperienceForm });
  };

  onAddJourney = () => {
    this.setState({ showTextFrom: !this.state.showTextFrom });
  };

  onCancelTextArea = () => {
    this.setState({ showTextFrom: !this.state.showTextFrom });
  };

  onSaveTextArea = () => {
    const studentId = '5e87e9c65410160a6a5926e3'
    this.props.updateStudentProfile(studentId, {careerObjective: this.state.tempCareerObjective})
    this.setState({ showTextFrom: !this.state.showTextFrom });
  };

  onChangeCareerObjective = e => {
    this.setState({ tempCareerObjective: e.target.value });
  };

  onUpdateEducation = education => {
    console.log(education);
    const data = this.state.educationDetails.map(item => {
      if (item.education_id === education.education_id) {
        return education;
      }
      return item;
    });
    this.setState({ educationDetails: data });
  };

  onUpdateExperience = experience => {
    console.log(experience);
    const data = this.state.experienceDetails.map(item => {
      if (item.experience_id === experience.experience_id) {
        return experience;
      }
      return item;
    });
    this.setState({ experienceDetails: data });
  };

  renderTextForm = () => {
    return (
      <div>
        <Form>
          <div style={{ marginBottom: '10px' }}>
            <p>
              <text style={{ color: 'blue' }}>
                What are you passionate about? What are you looking for on
                Handshake? What are your experiences or skills?
              </text>
            </p>
            <TextArea
              rows={2}
              placeholder=''
              value={this.state.tempCareerObjective}
              onChange={this.onChangeCareerObjective}
            />
          </div>
          <div>
            <button class='ui button' onClick={this.onCancelTextArea}>
              Cancel
            </button>
            <button class='ui positive button' onClick={this.onSaveTextArea}>
              Save
            </button>
          </div>
        </Form>
      </div>
    );
  };
  render() {
    console.log("My profile ", this.props.profile)
    return (
      <div style={{ backgroundColor: '' }}>
        <div>
          <Header />
        </div>
        <div style={{float: 'left', width: '25%', marginTop: '20px', marginLeft: '10%'}}>
          <div style={{ marginBottom: '20px' }}>
            <Bio bio={this.props.profile} />
          </div>
          <div>
            <Skills />
          </div>
        </div>
        <div style={{float: 'left', width: '52.5%', marginLeft: '20px', marginTop: '20px'}}>
          <div style={{ marginBottom: '20px' }}>
            <div className='ui raised segment'>
              <b>My Journey</b>
              <i className='pencil alternate icon' style={{ float: 'right' }} onClick={this.onAddJourney} ></i>
              <div style={{ marginTop: '10px' }}>
                {!this.state.showTextFrom &&
                      <p style={{ fontSize: '20px' }}>
                        {this.props.profile.careerObjective}
                      </p>
                }
                {this.state.showTextFrom && this.renderTextForm()}
              </div>
            </div>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <div className='ui raised segment'>
              <b>Education</b>
              <div className='ui items'>
                {this.props.profile.education && this.props.profile.education.map(education => {
                  return (
                    <Education
                      key={education._id}
                      onUpdateEducation={this.onUpdateEducation}
                      education={education}
                    />
                  );
                })}
              </div>
              <div>
                {!this.state.showAddForm && (
                  <button class='fluid ui button' onClick={this.onAddSchoolClick} >
                    Add School
                  </button>
                )}
                {this.state.showAddForm && (
                  <AddForm onAddSchool={this.onAddSchool} toggle={this.onAddSchoolClick}/>
                )}
              </div>
            </div>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <div className='ui raised segment'>
              <b>Work & Volunteer Experience</b>
              <div className='ui items'>
                {this.props.profile.experience && this.props.profile.experience.map(experience => {
                  return (
                    <Experience key={experience._id} onUpdateExperience={this.onUpdateExperience  } experience={experience} />
                  );
                })}
              </div>
              <div>
                {!this.state.showAddExperienceForm && (
                  <button class='fluid ui button' onClick={this.onAddExperienceClick}>
                    Add Work Experience
                  </button>
                )}
                {this.state.showAddExperienceForm && (
                  <AddExperienceForm onAddExperience={this.onAddExperience} toggle={this.onAddExperienceClick} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps, {fetchStudentProfile, updateStudentProfile})(StudentProfile);
