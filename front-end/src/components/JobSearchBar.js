import React from 'react';
import ToggleButton from './button/ToggleButton';
import FilterButton from './button/FilterButton';
import { connect } from 'react-redux';
import { filterJobs } from '../actions';
import { Item } from 'semantic-ui-react';

class JobSearchBar extends React.Component {
  constructor() {
    super();
    this.state = {job: '', location: '', prevFilter: []}
  }

  onChangeJobSearch = (e) => {
    this.setState({job: e.target.value}, () => {
      const list = this.props.jobs.filter((item) => {
        if(item.title && item.title.toLowerCase().search(this.state.job) != -1) {
          return item;
        }
      })
      console.log("List ", list);
      this.props.filterJobs(list);
    })
  }

  onChangeLocationSearch = (e) => {
    this.setState({location: e.target.value}, () => {
      const list = this.props.jobs.filter((item) => {
        if(item.location && item.location.toLowerCase().search(this.state.location) != -1) {
          return item;
        }
      })
      console.log("List ", list);
      this.props.filterJobs(list);
    })
  }

  onSelectHandler = (value) => {
    console.log("value ", value);
    
    if(value != '') {
      this.setState({prevFilter: this.props.filters})
      const list = this.props.filters.filter((item) => {
        if(item.category && item.category.toLowerCase().search(value.toLowerCase()) != -1) {
          return item
        }
      })
      this.props.filterJobs(list);
    } else {
      this.props.filterJobs(this.state.prevFilter)
    }

    
  }

  onSort = (value) => {
    if(value) {
      const list = this.props.filters.reverse();
      this.props.filterJobs(list);
    } else {
      const list = this.props.filters.reverse();
      this.props.filterJobs(list);
    }
    
  }


  onFilter = () => {
    const list = this.props.jobList.filter((item) => {
      if(item.job_title.toLowerCase().search(this.state.job) != -1 && item.job_category.search('Intern') != -1) {
        return Item;
      }
    })
    this.props.filetrJobs(list);
  }

  render() {
    return (
      <div className='ui raised segment' style={{marginLeft: '40px', marginRight: '40px', marginTop: '20px', height: '24%'}}>
        <div>
          <div style={{ width: '48%', float: 'left' }}>
            <div className='ui icon input' style={{ width: '100%' }}>
              <input type='text' placeholder='Job titles, employers, or keywords' value={this.state.job} onChange={this.onChangeJobSearch} />
              <i className='search icon'></i>
            </div>
          </div>
          <div style={{width: '48%', float: 'right', marginLeft: '20px'}}>
            <div className='ui icon input' style={{ width: '100%' }}>
              <input type='text' placeholder='Location' value={this.state.location} onChange={this.onChangeLocationSearch}/>
              <i className='search icon'></i>
            </div>
          </div>
        </div>
        <div>
          <div role='list' className='ui bulleted horizontal link list' style={{ marginTop: '10px' }}>
            <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
              software
            </a>
            <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
              computer science
            </a>
            <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
              developer
            </a>
            <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
              information technology
            </a>
            <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
              data science
            </a>
            <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
              machine learning
            </a>
          </div>
        </div>
        <div style={{marginTop: '10px', marginBottom: '10px'}}>
          <ToggleButton value='Full-Time' onSelectHandler={this.onSelectHandler}></ToggleButton>
          <ToggleButton value='Part-Time' onSelectHandler={this.onSelectHandler}></ToggleButton>
          <ToggleButton value='Internship' onSelectHandler={this.onSelectHandler}></ToggleButton>
          <ToggleButton value='On-Campus' onSelectHandler={this.onSelectHandler}></ToggleButton>
          <FilterButton value='Application-Deadline' onSort={this.onSort}></FilterButton>
          <FilterButton value='Posting Date' onSort={this.onSort}></FilterButton>
        </div>
      </div>
    );
  }
  
};

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
    filters: state.filter
  }
}

export default connect(mapStateToProps, { filterJobs })(JobSearchBar);
