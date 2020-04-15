import React from 'react';
import CompanyHeader from '../CompanyHeader';
import EventItemEmployer from './EventItemEmployer';
import Pagination from '../Pagination';
import { connect } from 'react-redux';
import { fetchCompanyEvents } from '../../actions';

class ViewEventEmployer extends React.Component {
  constructor() {
    super();
    this.state = { posts: [], currentPageNumber: 1 };
  }

  componentDidMount() {
    this.props.fetchCompanyEvents('Google');
  }

  paginate = number => this.setState({currentPageNumber: number});

  render() {
    const indexOfLastPost = this.state.currentPageNumber*5;
    const indexOfFirstPost = indexOfLastPost - 5;
    const currentPosts = this.props.events.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <div>
        <div>
          <CompanyHeader />
        </div>
        {this.props.events.map(event => {
          return (
            <div className='ui raised segment' style={{ marginLeft: '20px', width: '70%' }}>
              <EventItemEmployer key={event._id} event={event} />
            </div>
          );
        })}
        <div style={{marginLeft: '20px'}}>
        <Pagination postsPerPage={5} totalPosts={this.props.events.length} paginate={this.paginate}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.companyEvents
  }
}

export default connect(mapStateToProps, { fetchCompanyEvents })(ViewEventEmployer);
