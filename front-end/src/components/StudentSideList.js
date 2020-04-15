import React from 'react';
import { connect } from 'react-redux';
import { filterStudents } from '../actions'; 

class StudentSideList extends React.Component {
  constructor() {
    super();
    this.state = {name: '', collegeName: '', major: ''}
  }
  onChangeName = (e) => {
    this.setState({name: e.target.value}, () => {
      const list = this.props.students.filter((item) => {
        if(item.name != null && item.name.toLowerCase().search(this.state.name.toLowerCase()) != -1) {
          return item;
        }
      })
      console.log(list);
      this.props.filterStudents(list);
    })
  }

  onChangeUniversity = (e) => {
    this.setState({collegeName: e.target.value}, () => {
      const list = this.props.students.filter((item) => {
        if(item.collegeName != null && item.collegeName.toLowerCase().search(this.state.collegeName) != -1) {
          return item;
        }
      })
      console.log(list);
      this.props.filterStudents(list);
    })
  }

  onChangeMajor = (e) => {
    this.setState({major: e.target.value}, () => {
      const list = this.props.students.filter((item) => {
        if(item.major != null && item.major.toLowerCase().search(this.state.major.toLowerCase()) != -1) {
          return item;
        }
      })
      console.log(list);
      this.props.filterStudents(list);
    })
  }

  render() {
    return (
      <div className='ui vertical menu' style={{ width: '250px' }}>
        <div className='item'>
          <div className='header'>Filters</div>
        </div>
        <div className='item'>
          <div className='header'>Name</div>
          <div class='ui search'>
            <div class='ui icon input' style={{ marginTop: '10px' }}>
              <input class='prompt' type='text' value={this.state.name} placeholder='Enter name..' onChange={this.onChangeName} />
              <i class='search icon'></i>
            </div>
            <div class='results'></div>
          </div>
        </div>
        <div className='item'>
        <div className='header'>College Name</div>
          <div class='ui search'>
            <div class='ui icon input' style={{ marginTop: '10px' }}>
              <input class='prompt' type='text' value={this.state.collegeName} placeholder='Enter college..' onChange={this.onChangeUniversity} />
              <i class='search icon'></i>
            </div>
            <div class='results'></div>
          </div>
        </div>
        <div className='item'>
        <div className='header'>Major</div>
          <div class='ui search'>
            <div class='ui icon input' style={{ marginTop: '10px' }}>
              <input class='prompt' type='text' value={this.state.major} placeholder='Enter major..' onChange={this.onChangeMajor} />
              <i class='search icon'></i>
            </div>
            <div class='results'></div>
          </div>
        </div>
        <div className='item'>
          <div className='header'>Support</div>
          <div className='menu'>
            <a className='item'>E-mail Support</a>
            <a className='item'>FAQs</a>
          </div>
        </div>
        <div className='item'>
          <div className='header'>Schools</div>
        </div>
        <div className='item'>
          <div className='header'>Support</div>
          <div className='menu'>
            <a className='item'>E-mail Support</a>
            <a className='item'>FAQs</a>
          </div>
        </div>
      </div>
    );
  }
  
};

const mapStateToProps = (state) => {
  return {
    students: state.students,
    filters: state.studentsFilteredList
  }
}

export default connect(mapStateToProps, { filterStudents })(StudentSideList);
