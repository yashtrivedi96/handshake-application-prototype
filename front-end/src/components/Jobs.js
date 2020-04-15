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
import { fetchJobs, filterJobs } from '../actions';


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
    this.props.fetchJobs();
    this.setState({ selectedJob: this.props.jobs[0]})
   
  }

  onSelectJob = (job, company_name) => {
    this.setState({ selectedJob: job, company_name: company_name });
  };

  onClickUpload = () => {
    const id = 17;
    const fd = new FormData();
    console.log('uploading...');
    fd.append('upl', this.state.selectedFile);
    axios
      .post(`http://18.206.154.118:8080/api/student/upload/resume/${id}`, fd)
      .then(res => {
        if (res.status === 200) {
          axios
            .post(
              'http://18.206.154.118:8080/api/application',
              {
                application_status: 'pending',
                application_date: 'Feb 2020',
                student_id: id,
                company_id: this.state.selectedJob.company_id,
                job_id: this.state.selectedJob.job_id
              },
              { headers: { 'Content-Type': 'application/json' } }
            )
            .then(res => {
              if (res.status === 200) {
                console.log(res.data.result);
              }
            });
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
              Job Requirements: {}
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
    filters: state.filter
  }
}

export default connect(mapStateToProps, { fetchJobs, filterJobs })(Jobs);
