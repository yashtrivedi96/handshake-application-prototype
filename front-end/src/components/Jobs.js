import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import JobMenu from './JobMenu';
import JobSearchBar from './JobSearchBar';
import JobItemStudent from './JobItemStudent';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { fetchJobs, filterJobs, applyJobs, fetchStudentProfile } from '../actions';


class Jobs extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      jobsSearch: [],
      selectedJob: '',
      company_name: '',
      selectedFile: null,
      currentPageNumber: 1
    };
  }

  useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    input: {
      display: 'none'
    }
  }));


  componentDidMount() {
    const studentId = '5e996d140c49d423b10b0e68';
    this.props.fetchJobs(studentId);
    this.setState({ selectedJob: this.props.jobs[0]})
   
  }

  onSelectJob = (job) => {
    this.setState({ selectedJob: job });
  };

  onClickUpload = () => {
    console.log("click")
    const reqObj = {
          student: {
            name: this.props.profile.name,
		        studentId: this.props.profile._id,
		        university: this.props.profile.collegeName,
		        major: this.props.profile.major,
		        cgpa: this.props.profile.cgpa
          }
    }
    this.props.applyJobs(this.state.selectedJob._id, reqObj);
    const id = '5e996d140c49d423b10b0e68';
    const fd = new FormData();
    console.log('uploading...');
    fd.append('upl', this.state.selectedFile);
    axios
    .post(`http://localhost:3000/applications/${id}/resume`, fd)
      .then(res => {
        if (res.status === 200) {
          console.log(res);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  onSelectFile = e => {
    this.setState({ selectedFile: e.target.files[0] });
  };

  onSearch = list => {
    this.setState({ jobsSearch: list });
  };

  paginate = number => this.setState({currentPageNumber: number});

  render() {
    // if(this.props.jobs) {
    //   this.props.filterJobs(this.props.jobs)
    // }
    const indexOfLastPost = this.state.currentPageNumber*5;
    const indexOfFirstPost = indexOfLastPost - 5;
    const currentPosts = this.props.filters.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <div>
        <Header />
        <JobMenu />
        <div>
          <JobSearchBar jobSearch={this.onSearch} jobList={this.state.jobs} />
        </div>
        <div style={{marginTop: '20px', marginLeft: '20px', width: '50%',float: 'left', marginBottom: '20px'}}>
          {currentPosts.map(job => {
            return (
              <div className='ui raised segment' style={{ marginLeft: '20px', width: '100%' }}>
                <JobItemStudent key={job._id} job={job} onSelectJob={this.onSelectJob} />
              </div>
            );
          })}
          <Pagination postsPerPage={5} totalPosts={this.props.filters.length} paginate={this.paginate}/>
        </div>
        <div
          style={{
            marginLeft: '30px',
            marginTop: '20px',
            marginRight: '',
            float: 'left',
            width: '43%'
          }}
        >
          <div className='ui raised segment'>
            <div>
              <h3>{this.state.selectedJob && this.state.selectedJob.title}</h3>
            </div>
            <div>{this.state.selectedJob && this.state.selectedJob.name}</div>
            <div>Job category: {this.state.selectedJob && this.state.selectedJob.category}</div>
            <div>Description: {this.state.selectedJob && this.state.selectedJob.jobDescription}</div>
            <div>
              Job Location: {this.state.selectedJob && this.state.selectedJob.location}
            </div>
            <div>
              Deadline: {this.state.selectedJob && this.state.selectedJob.deadline}
            </div>
            <div>
              Posting Date: {this.state.selectedJob && this.state.selectedJob.postingDate}
            </div>
            <div>
              <input
                className={this.useStyles.input}
                id='outlined-button-file'
                multiple
                type='file'
                onChange={this.onSelectFile}
              />
              <Button
                variant='contained'
                color='primary'
                className={this.useStyles.button}
                onClick={this.onClickUpload}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
    filters: state.filter,
    profile: state.profile
  }
}

export default connect(mapStateToProps, { fetchJobs, filterJobs, applyJobs, fetchStudentProfile })(Jobs);
