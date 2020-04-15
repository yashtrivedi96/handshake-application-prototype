import React from 'react';
import Header from './Header';
import ButtonMenu from './ButtonMenu';
import EventItem from './EventItem';
import EventSideList from './EventSideList';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingEvents: [],
      searchEvents: [],
      currentPageNumber: 1
    };
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  paginate = number => this.setState({currentPageNumber: number});

  render() {
    const indexOfLastPost = this.state.currentPageNumber*5;
    const indexOfFirstPost = indexOfLastPost - 5;
    const currentPosts = this.props.filters.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <div>
        <Header />
        <div className='container'>
          <div>
            <ButtonMenu />
          </div>
          <div className='ui items' style={{ float: 'left', width: '60%' }}>
            {currentPosts.map(event => {
              return (
                <div className='ui raised segment' style={{ marginTop: '40px', marginLeft: '40px', marginBottom: '20px', marginRight: '20px', paddingTop: '10px'}}>
                  <EventItem key={event._id} event={event} />
                </div>
              );
            })}
            <div style={{marginLeft: '40px'}}>
            <Pagination postsPerPage={5} totalPosts={this.props.filters.length} paginate={this.paginate} />
            </div>
          </div>
          <div
            style={{float: 'left', marginTop: '60px', marginLeft: '30px', marginRight: '40px'}}>
            <EventSideList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    filters: state.eventsFilteredList
  }
}

export default connect(mapStateToProps, { fetchEvents })(Event);
