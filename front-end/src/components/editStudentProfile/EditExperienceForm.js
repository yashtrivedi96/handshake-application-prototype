import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateStudentProfile } from '../../actions';

const companyName = [
  { text: 'Google', value: 'Google' },
  { text: 'Fortunata Fashions', value: 'Fortunata Fashions'},
  { text: 'Tesla', value: 'Tesla' },
  { text: 'Central Perk', value: 'Central Perk' },
  { text: 'Facebook', value: 'Facebook' },
  { text: 'Amazon', value: 'Amazon' },
  { text: 'Microsoft', value: 'Microsoft'}
];
const designation = [
  { text: 'Application Developer', value: 'Application Developer' },
  { text: 'Assistant', value: 'Assistant' },
  { text: 'Performance Engineer', value: 'Performance Engineer' },
  { text: 'Waitress', value: 'Waitress' },
  { text: 'Software Engineer', value: 'Software Engineer' },
  { text: 'Professor', value: 'Professor' }
];
const fromDate = [
  { text: '2015', value: '2015' },
  { text: '2016', value: '2016' },
  { text: '2017', value: '2017' },
  { text: '2018', value: '2018' }
];
const toDate = [
  { text: '2016', value: '2016' },
  { text: '2017', value: '2017' },
  { text: '2018', value: '2018' },
  { text: '2019', value: '2019' },
  { text: '2020', value: '2020' }
];
const location = [
  { text: 'New York', value: 'New York' },
  { text: 'Seattle', value: 'Seattle' },
  { text: 'san francisco', value: 'san francisco'}
];

class EditExperienceForm extends React.Component {
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

  onCancel = () => {
    this.props.toggle();
  };

  onSave = e => {
    e.preventDefault();
    const data = {
      company: this.state.company == '' ? this.props.data.company : this.state.company,
      jobTitle: this.state.jobTitle == '' ? this.props.data.jobTitle : this.state.jobTitle,
      startDate: this.state.startDate == '' ? this.props.data.startDate : this.state.startDate,
      endDate: this.state.endDate == '' ? this.props.data.endDate : this.state.endDate,
      location: this.state.location == '' ? this.props.data.location : this.state.location,
      description: this.state.description === '' ? this.props.data.description : this.state.description
    };
    console.log(data);
    const id = this.props.data._id;
    const list = [...this.props.experience];
    list.filter((experience) => {
      if(experience._id === id) {
        experience.company = data.company;
        experience.jobTitle = data.jobTitle;
        experience.startDate = data.startDate;
        experience.endDate = data.endDate;
        experience.location = data.location;
        experience.description = data.description;
      }
      return experience;
    })
    // axios
    //   .put(`http://18.206.154.118:8080/api/student/experience/${id}`, data, {
    //     headers: { 'Content-Type': 'application/json' }
    //   })
    //   .then(res => {
    //     console.log(res);
    //     if (res.status === 200) {
    //       this.props.onUpdateExperience({ ...data, experience_id: id });
    //       console.log(res.data.result);
    //     } else {
    //       console.log(res);
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    console.log(list);
    const studentId = '5e996d140c49d423b10b0e68 ';
    this.props.updateStudentProfile(studentId, {experience: list})
    this.props.toggle();
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
                value={this.state.company}
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

export default connect(mapStateToProps, { updateStudentProfile })(EditExperienceForm);
