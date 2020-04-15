import React from 'react';
import Header from './Header';
import RegisteredEventItem from './RegisteredEventItem';
import EventSideList from './EventSideList';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { fetchStudentProfile } from '../actions';

class ViewRegisteredEvent extends React.Component {
  constructor() {
    super();
    this.state = { registeredEvents: [], currentPageNumber: 1 };
  }

  componentDidMount() {
    const id = '5e87e9c65410160a6a5926e3'
    this.props.fetchStudentProfile(id);
  }

  paginate = number => this.setState({currentPageNumber: number});

  render() {
    const indexOfLastPost = this.state.currentPageNumber*5;
    const indexOfFirstPost = indexOfLastPost - 5;
    const currentPosts = this.props.registeredEvents.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <div>
        <Header />
        <div className='ui segment' style={{ marginTop: '0px', paddingLeft: '40px' }}>
          <b>
            <h3>Registered Events</h3>
          </b>
        </div>
        <div className='container'>
          <div className='ui items' style={{ float: 'left', width: '60%' }}>
            {currentPosts.map(event => {
              return (
                <div className='ui raised segment' style={{marginTop: '40px', marginLeft: '40px', marginBottom: '20px', marginRight: '20px', paddingTop: '10px'}}>
                  <RegisteredEventItem key={event._id} event={event} />
                </div>);
            })}
            <div style={{marginLeft: '40px'}}>
            <Pagination postsPerPage={5} totalPosts={this.props.registeredEvents.length} paginate={this.paginate}/>
            </div>
          </div>
          <div
            style={{float: 'left',marginTop: '60px',marginLeft: '30px',marginRight: '40px'}}>
            <EventSideList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if(!state.profile.registeredEvents) {
    return {registeredEvents: []}
  }
  return {registeredEvents: state.profile.registeredEvents}
}

export default connect(mapStateToProps, { fetchStudentProfile })(ViewRegisteredEvent);
