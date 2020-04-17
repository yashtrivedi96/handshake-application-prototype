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
    const studentId = '5e996d140c49d423b10b0e68';
    this.props.fetchStudentProfile(studentId);
  }

  paginate = number => this.setState({currentPageNumber: number});

  render() {
    const indexOfLastPost = this.state.currentPageNumber*5;
    const indexOfFirstPost = indexOfLastPost - 5;
    const currentPosts = this.props.filters.slice(indexOfFirstPost, indexOfLastPost);
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
            <Pagination postsPerPage={5} totalPosts={this.props.filters.length} paginate={this.paginate}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if(state.applicationsFilteredList) {
    return {
      filters: state.applicationsFilteredList
    }
  }
  return {
    filters: []
  }
}

export default connect(mapStateToProps, { fetchStudentProfile })(Application);
