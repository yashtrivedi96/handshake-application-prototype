import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Button } from 'semantic-ui-react';
import alt from '../../images/alt.png';
import { connect } from 'react-redux';
import { fetchCompanyJobs } from '../../actions';

class JobItemEmployer extends React.Component {
  constructor() {
    super();
    this.state = { redirect: '', company_name: '' };
  }
  componentDidMount() {
    // const id = 2;
    // axios
    //   .get(`http://18.206.154.118:8080/api/employer/${id}`)
    //   .then(res => {
    //     if (res.status === 200) {
    //       console.log(res.data.result);
    //       this.setState({ company_name: res.data.result[0].company_name });
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
  onClickHandler = () => {
    this.setState({
      redirect: (
        <Redirect
          to={{
            pathname: '/company/job/applicants',
            state: { jobs: this.props.jobs }
          }}
        />
      )
    });
  };

  render() {
    return (
      <div>
        {this.state.redirect}
        <div className='item container'>
          <div
            className='ui tiny image'
            style={{ float: 'left', marginRight: '10px', padding: '5px' }}
          >
            <img src={alt} />
          </div>
          <div className='content'>
            <Button
              color='blue'
              className='ui right floated button'
              onClick={this.onClickHandler}
            >
              View Applicants
            </Button>
            <a className='header'>
              <h4>
                {this.props.job.title} | {this.props.job.companyName} | (Job
                ID: {this.props.job._id})
              </h4>
            </a>
            <div className='meta'>
              <div>
                <span className='cinema'>
                  Descriptions: {this.props.job.jobDescription}
                </span>
              </div>
              <div>
                <span className='cinema'>
                  Job Category: {this.props.job.category}
                </span>
              </div>
              <div>
                <span className='cinema'>
                  Location: {this.props.job.location}
                </span>
              </div>
            </div>
            <div className='description'>
              <div></div>
            </div>
            <div className='extra'></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.companyJobs
  }
}

export default connect(mapStateToProps, { fetchCompanyJobs })(JobItemEmployer);