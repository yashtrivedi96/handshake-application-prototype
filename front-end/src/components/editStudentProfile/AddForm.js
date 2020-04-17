import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateStudentProfile } from '../../actions';

// const university = [
//   { text: 'San Jose State University', value: 'San Jose State University' },
//   {
//     text: 'University of Southern California',
//     value: 'University of Southern California'
//   },
//   { text: 'Mumbai University', value: 'Mumbai University' }
// ];
// const degree = [
//   { text: 'Masters', value: 'masters' },
//   { text: 'Bachelors', value: 'bachelors' },
//   { text: 'BE', value: 'BE' }
// ];
// const major = [
//   { text: 'computer science', value: 'computer science' },
//   { text: 'Computer Engineering', value: 'Computer Engineering' },
//   { text: 'Software engineering', value: 'Software engineering' }
// ];
// const year = [
//   { text: '2021', value: '2021' },
//   { text: '2020', value: '2020' },
//   { text: '2016', value: '2016' }
// ];

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

class AddForm extends React.Component {
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
  componentDidMount() {}
  onCancel = () => {
    this.props.toggle();
  };

  onSave = e => {
    e.preventDefault();
    console.log(this.state);
    const list = [...this.props.education, this.state];
    const studentId = '5e996d140c49d423b10b0e68';
    this.props.updateStudentProfile(studentId, {education: list})
    this.props.onAddSchool()
    // axios
    //   .post('http://18.206.154.118:8080/api/student/education/17', this.state, {
    //     headers: { 'Content-Type': 'application/json' }
    //   })
    //   .then(res => {
    //     if (res.status === 200) {
    //       console.log(res.data.result.insertId);
    //       this.props.onAddSchool({
    //         ...this.state,
    //         education_id: res.data.result.insertId,
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
    console.log(this.props.data);
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
                options={university}
                value={this.state.university}
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
                options={degree}
                value={this.state.degree}
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
                options={major}
                value={this.state.major}
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
                  options={year}
                  value={this.state.yearOfPassing}
                  onChange={this.onChangeHandlerYear}
                />
              </div>
              <div class='field'>
                <label>GPA</label>
                <input
                  type='text'
                  value={this.state.cgpa}
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
  return ({
    education: state.profile.education
  })
}

export default connect(mapStateToProps, {updateStudentProfile})(AddForm);
