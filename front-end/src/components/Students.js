import React from 'react';
import Header from './Header';
import StudentSideList from './StudentSideList';
import StudentItem from './StudentItem';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { fetchStudents } from '../actions';

class Students extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedStudent: '',
      students: [],
      education: [],
      work: [],
      searchStudent: [],
      currentPageNumber: 1
    };
  }

  componentDidMount() {
    this.props.fetchStudents();
  }

  onSkillSearch = list => {
    this.setState({ searchStudent: list });
  };

  paginate = number => this.setState({currentPageNumber: number});

  render() {
    const indexOfLastPost = this.state.currentPageNumber*5;
    const indexOfFirstPost = indexOfLastPost - 5;
    const currentPosts = this.props.filters.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <div>
        <Header />
        <div className='ui segment' style={{ marginTop: '0px', paddingLeft: '40px' }}>
          <b>
            <h3>Explore Students</h3>
          </b>
        </div>
        <div className='container' style={{ marginLeft: '40px', marginTop: '30px' }}>
          <div style={{ float: 'left', width: '25%', marginLeft: '30px' }}>
            <StudentSideList />
          </div>
          <div style={{ float: 'left', marginLeft: '15px', width: '65%' }}>
            <div>
              {currentPosts.map(student => {
                return (
                  <div className='ui raised segment' style={{ height: '110px', marginBottom: '20px' }}>
                    <StudentItem key={student._id} student={student} />
                  </div>
                );
              })}
            </div>
            <Pagination postsPerPage={5} totalPosts={this.props.filters.length} paginate={this.paginate}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students,
    filters: state.studentsFilteredList
  }
}

export default connect(mapStateToProps, { fetchStudents })(Students);
