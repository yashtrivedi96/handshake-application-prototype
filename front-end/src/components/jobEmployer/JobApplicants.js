import React from 'react';
import { Redirect } from 'react-router';
import Header from '../Header';
import JobItemApplicant from './JobItemApplicant';
import Pagination from '../Pagination';

class JobApplicants extends React.Component {
  constructor() {
    super();
    this.state = { applications: [], redirect: '', currentPageNumber: 1 };
  }
  componentDidMount() {
    if (this.props.location.state == undefined) {
      this.setState({ redirect: <Redirect to='/company/job/view' /> });
    } else {
      
    }
  }

  paginate = number => this.setState({currentPageNumber: number});

  render() {
    const indexOfLastPost = this.state.currentPageNumber*5;
    const indexOfFirstPost = indexOfLastPost - 5;
    const currentPosts = this.props.location.state.jobs[0].students.slice(indexOfFirstPost, indexOfLastPost)
    //const currentPosts = this.props.location.jobs.students.slice(indexOfFirstPost, indexOfLastPost);
    
    return (
      <div>
        {this.state.redirect}
        <div>
          <Header />
        </div>
        <div className='ui segment' style={{ marginTop: '0px', paddingLeft: '40px' }}>
          <b>
            <h3>
              Applications for Job ID: {this.props.location.state.jobs[0]._id}
            </h3>
          </b>
        </div>
        <div>
          {this.state.redirect == '' &&
            currentPosts.map(application => {
              return (
                <div className='ui raised segment' style={{ marginLeft: '20px', width: '70%' }}>
                  <JobItemApplicant key={application._id} application={application} />
                </div>
              );
            })}
            <div style={{float: 'left', marginLeft: '20px'}}>
            <Pagination postsPerPage={5} totalPosts={this.props.location.state.jobs[0].students.length} paginate={this.paginate}/>
            </div>
        </div>
      </div>
    );
  }
}

export default JobApplicants;
