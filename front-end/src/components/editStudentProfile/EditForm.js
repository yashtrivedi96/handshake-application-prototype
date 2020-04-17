import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateStudentProfile } from '../../actions'


const university = [
  { text: 'San Jose State University', value: 'San Jose State University' },
  {text: 'University of Southern California', value: 'University of Southern California'},
  {text: 'Columbia University', value: 'Columbia University'},
  { text: 'Lincoln School', value: 'Lincoln School' }
];
const degree = [
  { text: 'Masters', value: 'Masters' },
  { text: 'Bachelors', value: 'Bachelors' }
];
const major = [
  { text: 'Computer Science', value: 'Computer Science' },
  { text: 'Commerce', value: 'Commerce' },
  { text: 'Fashion', value: 'Fashion' },
  { text: 'Computer Engineering', value: 'Computer Engineering' },
  { text: 'Software Engineering', value: 'Software Engineering' }
];
const year = [
  { text: '2020', value: '2020' },
  { text: '2019', value: '2019' },
  { text: '2018', value: '2018' },
  { text: '2017', value: '2017' },
  { text: '2016', value: '2016' },
  { text: '2015', value: '2015' }
];

class EditForm extends React.Component {
  constructor() {
    super();
    this.state = {
      university: '',
      degree: '',
      major: '',
      yearOfPassing: '',
      cgpa: ''
    };
  }

  onCancel = () => {
    this.props.toggle();
  };

  onSave = e => {
    e.preventDefault();
    const data = {
      university: this.state.university == '' ? this.props.data.university : this.state.university,
      degree: this.state.degree == '' ? this.props.data.degree : this.state.degree,
      major: this.state.major == '' ? this.props.data.major : this.state.major,
      yearOfPassing: this.state.yearOfPassing == ''? this.props.data.yearOfPassing: this.state.yearOfPassing,
      cgpa: this.state.cgpa === '' ? this.props.data.cgpa : this.state.cgpa
    };
    console.log(data);
    const id = this.props.data._id;
    const list = [...this.props.education]
    list.filter((education) => {
      if(education._id === id) {
        education.university =  data.university;
        education.degree = data.degree;
        education.major = data.major;
        education.yearOfPassing = data.yearOfPassing;
        education.cgpa = data.cgpa;
      }
      return education
    })
    console.log(list);
    const studentId = '5e996d140c49d423b10b0e68';
    this.props.updateStudentProfile(studentId, {education: list})
    this.props.toggle();
  };

  onChangeHandlerCollege = (e, { value }) => {
    this.setState({ university: value }, () => {
      console.log('Dropdown', this.state.university);
    });
  };

  onChangeHandlerDegree = (e, { value }) => {
    this.setState({ degree: value }, () => {
      console.log('Dropdown', this.state.degree);
    });
  };

  onChangeHandlerMajor = (e, { value }) => {
    this.setState({ major: value }, () => {
      console.log('Dropdown', this.state.major);
    });
  };

  onChangeHandlerYear = (e, { value }) => {
    this.setState({ yearOfPassing: value }, () => {
      console.log('Dropdown', this.state.yearOfPassing);
    });
  };

  onChangeHandlerGPA = e => {
    this.setState({ cgpa: e.target.value }, () => {
      console.log('input', this.state.cgpa);
    });
  };

  render() {
    return (
      <div>
        <div>
          <form className='ui equal width form'>
            <div class='field'>
              <label>School Name</label>
              <Dropdown
                placeholder='School'
                fluid
                search
                selection
                value={
                  this.state.university == ''
                    ? this.props.data.university
                    : this.state.university
                }
                options={university}
                onChange={this.onChangeHandlerCollege}
              />
            </div>
            <div class='field'>
              <label>Degree</label>
              <Dropdown
                placeholder='Degree'
                fluid
                search
                selection
                value={
                  this.state.degree == ''
                    ? this.props.data.degree
                    : this.state.degree
                }
                options={degree}
                onChange={this.onChangeHandlerDegree}
              />
            </div>
            <div class='field'>
              <label>major</label>
              <Dropdown
                placeholder='Major'
                fluid
                search
                selection
                value={
                  this.state.major == ''
                    ? this.props.data.major
                    : this.state.major
                }
                options={major}
                onChange={this.onChangeHandlerMajor}
              />
            </div>
            <div class='fields'>
              <div class='field'>
                <label>Passing Year</label>
                <Dropdown
                  placeholder='Passing Year'
                  fluid
                  search
                  selection
                  value={
                    this.state.yearOfPassing == ''
                      ? this.props.data.yearOfPassing
                      : this.state.yearOfPassing
                  }
                  options={year}
                  onChange={this.onChangeHandlerYear}
                />
              </div>
              <div class='field'>
                <label>GPA</label>
                <input
                  type='text'
                  value={
                    this.state.cgpa === ''
                      ? this.props.data.cgpa
                      : this.state.cgpa
                  }
                  placeholder='GPA'
                  onChange={this.onChangeHandlerGPA}
                />
              </div>
            </div>
            <div>
              <button class='ui button' onClick={this.onCancel}>
                Cancel
              </button>
              <button class='ui positive button' onClick={this.onSave}>
                Save
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
    education: state.profile.education
  }
}

export default connect(mapStateToProps, {updateStudentProfile})(EditForm);
