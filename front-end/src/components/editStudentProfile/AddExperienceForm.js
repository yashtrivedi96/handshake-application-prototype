import React from 'react';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateStudentProfile } from '../../actions';

const companyName = [
  { text: 'Google', value: 'Google' },
  { text: 'Tesla', value: 'Tesla' },
  { text: 'Facebook', value: 'Facebook' }
];
const designation = [
  { text: 'Application Developer', value: 'Application Developer' },
  { text: 'Performance Engineer', value: 'Performance Engineer' },
  { text: 'Software Engineer', value: 'Software Engineer' }
];
const fromDate = [
  { text: '2015', value: '2015' },
  { text: '2016', value: '2016' },
  { text: '2017', value: '2017' }
];
const toDate = [
  { text: '2018', value: '2018' },
  { text: '2019', value: '2019' },
  { text: '2020', value: '2020' }
];
const location = [
  { text: 'Mumbai', value: 'Mumbai' },
  { text: 'San Jose', value: 'San Jose' },
  { text: 'San Andreas', value: 'San Andreas' }
];

class AddExperienceForm extends React.Component {
  constructor() {
    super();
    this.state = {
      company: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      location: '',
      description: ''
    };
  }
  componentDidMount() {}
  onCancel = () => {
    this.props.toggle();
  };

  onSave = e => {
    e.preventDefault();
    const list = [...this.props.experience, this.state];
    const studentId = '5e87e9c65410160a6a5926e3';
    this.props.updateStudentProfile(studentId, {experience: list})
    this.props.onAddExperience();
    // console.log(this.state);
    // axios
    //   .post(
    //     'http://18.206.154.118:8080/api/student/experience/17',
    //     this.state,
    //     { headers: { 'Content-Type': 'application/json' } }
    //   )
    //   .then(res => {
    //     if (res.status === 200) {
    //       console.log(res.data.result.insertId);
    //       this.props.onAddExperience({
    //         ...this.state,
    //         experience_id: res.data.result.insertId,
    //         student_id: 17
    //       });
    //     } else {
    //       console.log(res);
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  onChangeHandlerCompanyName = (e, { value }) => {
    this.setState({ company: value }, () => {
      console.log('Dropdown', this.state.company);
    });
  };

  onChangeHandlerDesignation = (e, { value }) => {
    this.setState({ jobTitle: value }, () => {
      console.log('Dropdown', this.state.jobTitle);
    });
  };

  onChangeHandlerFromDate = (e, { value }) => {
    this.setState({ startDate: value }, () => {
      console.log('Dropdown', this.state.startDate);
    });
  };

  onChangeHandlerToDate = (e, { value }) => {
    this.setState({ endDate: value }, () => {
      console.log('Dropdown', this.state.endDate);
    });
  };

  onChangeHandlerCompanyLocation = (e, { value }) => {
    this.setState({ location: value }, () => {
      console.log('Dropdown', this.state.location);
    });
  };

  onChangeHandlerWorkSummary = e => {
    this.setState({ description: e.target.value }, () => {
      console.log('input', this.state.description);
    });
  };

  render() {
    console.log(this.props.data);
    return (
      <div>
        <div>
          <form className='ui equal width form'>
            <div class='field'>
              <label>Company Name</label>
              <Dropdown
                placeholder='Company Name'
                fluid
                search
                selection
                options={companyName}
                value={this.state.name}
                onChange={this.onChangeHandlerCompanyName}
              />
            </div>
            <div class='field'>
              <label>Designation</label>
              <Dropdown
                placeholder='Designation'
                fluid
                search
                selection
                options={designation}
                value={this.state.jobTitle}
                onChange={this.onChangeHandlerDesignation}
              />
            </div>
            <div class='field'>
              <label>From</label>
              <Dropdown
                placeholder='Starting Date'
                fluid
                search
                selection
                options={fromDate}
                value={this.state.startDate}
                onChange={this.onChangeHandlerFromDate}
              />
            </div>
            <div class='fields'>
              <div class='field'>
                <label>To</label>
                <Dropdown
                  placeholder='Passing Year'
                  fluid
                  search
                  selection
                  options={toDate}
                  value={this.state.endDate}
                  onChange={this.onChangeHandlerToDate}
                />
              </div>
            </div>
            <div class='field'>
              <label>Company Location</label>
              <Dropdown
                placeholder='Location'
                fluid
                search
                selection
                options={location}
                value={this.state.location}
                onChange={this.onChangeHandlerCompanyLocation}
              />
            </div>
            <div class='field'>
              <label>Work Summary</label>
              <input
                type='text'
                value={this.state.description}
                placeholder='Work Summary'
                onChange={this.onChangeHandlerWorkSummary}
              />
            </div>
            <div>
              <button class='ui primary button' onClick={this.onSave}>
                Save
              </button>
              <button class='ui button' onClick={this.onCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    experience: state.profile.experience
  }
}

export default connect(mapStateToProps, { updateStudentProfile })(AddExperienceForm);
