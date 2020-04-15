import React from 'react';
import Header from './Header';
import ApplicationItem from './ApplicationItem';
import ApplicationSideList from './ApplicationSideList';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { fetchStudentProfile } from '../actions';

class Application extends React.Component {
  constructor() {
    super();
    this.state = { applications: [], currentPageNumber: 1 };
  }

  componentDidMount() {
    const studentId = '5e87e9c65410160a6a5926e3';
    this.props.fetchStudentProfile(studentId);
  }

  paginate = number => this.setState({currentPageNumber: number});

  render() {
    const indexOfLastPost = this.state.currentPageNumber*5;
    const indexOfFirstPost = indexOfLastPost - 5;
    const currentPosts = this.props.applications.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <div style={{float: 'left', width: '25%', marginLeft: '30px', marginTop: '20px'}}>
            <ApplicationSideList />
          </div>
          <div style={{float: 'left', marginLeft: '10px', width: '70%', marginTop: '20px'}}>
            {currentPosts.map(application => {
              return (
                <div className='ui raised segment' style={{ width: '75%' }}>
                  <ApplicationItem key={application._id} application={application} />
                </div>
              );
            })}
            <div>
            <Pagination postsPerPage={5} totalPosts={this.props.applications.length} paginate={this.paginate}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if(!state.profile.applications) {
    return {applications: []}
  }
  return {
    applications: state.profile.applications
  }
}

export default connect(mapStateToProps, { fetchStudentProfile })(Application);
