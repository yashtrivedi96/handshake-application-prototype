import React from 'react';
import { connect } from 'react-redux';
import { filterApplications } from '../actions';

class ApplicationSideList extends React.Component {
  state = {status: ''}


  onChangeHandler = (e) => {
    this.setState({status: e.target.value}, () => {
      const list = this.props.applications.filter((item) => {
        if(item.status.toLowerCase().search(this.state.status.toLowerCase()) != -1) {
          return item;
        }
      })
      console.log(list);
      this.props.filterApplications(list)
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
              <input class='prompt' type='text' value={this.state.status} placeholder='Filter by status...' onChange={this.onChangeHandler} />
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
  if(!state.profile.applications) {
    return {applications: []}
  }
  return {
    applications: state.profile.applications
  }
}

export default connect(mapStateToProps, { filterApplications })(ApplicationSideList);
