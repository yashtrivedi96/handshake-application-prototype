import React from 'react';
import CompanyHeader from '../CompanyHeader';
import JobItemEmployer from './JobItemEmployer';
import Pagination from '../Pagination';
import { connect } from 'react-redux';
import { fetchCompanyJobs } from '../../actions';

class ViewJobs extends React.Component {
  constructor() {
    super();
    this.state = { jobs: [], currentPageNumber: 1 };
  }

  componentDidMount() {
    this.props.fetchCompanyJobs('Ralph Lauren');
  }

  paginate = number => this.setState({currentPageNumber: number});

  render() {
    const indexOfLastPost = this.state.currentPageNumber*5;
    const indexOfFirstPost = indexOfLastPost - 5;
    const currentPosts = this.props.jobs.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <div>
        <div>
          <CompanyHeader />
        </div>
        <div className='ui segment' style={{ marginTop: '0px', paddingLeft: '40px', marginBottom: '20px'}}>
          <b>
            <h3>Job Postings</h3>
          </b>
        </div>
        {currentPosts.map(job => {
          return (
            <div className='ui raised segment' style={{ marginLeft: '20px', width: '70%', marginBottom: '20px' }}>
              <JobItemEmployer key={job} job={job} />
            </div>
          );
        })}
        <Pagination postsPerPage={5} totalPosts={this.props.jobs.length} paginate={this.paginate}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.companyJobs
  }
}

export default connect(mapStateToProps, { fetchCompanyJobs })(ViewJobs);
