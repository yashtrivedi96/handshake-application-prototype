import React from 'react';
import EditExperienceForm from './EditExperienceForm';
class Experience extends React.Component {
  constructor() {
    super();
    this.state = {showAddExperienceForm: false}
  }

  onClickHandler = () => {
    this.setState({showAddExperienceForm: !this.state.showAddExperienceForm});
  }


  renderForm = () => {
    return (
      <div>
        <div>
          <div className='item'>
            <div className='ui mini spaced image' style={{ float: 'left', marginRight: '10px', marginBottom: '40px' }}>
              <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </div>
            <div className='middle aligned content'>
              <div className='header'>
              <i className='pencil alternate icon' onClick={this.onClickHandler} style={{ float: 'right' }}></i>
                  <h4>{this.props.experience.company}</h4>
              </div>
              <div className='meta'>
                <div>
                  <span className='designation'>{this.props.experience.jobTitle}</span>
                </div>
                <div>
                  <span className='date'>{this.props.experience.startDate} - {this.props.experience.endDate} | {this.props.experience.location}</span>
                </div>
              </div>
              <div className='description'>Work Summary: {this.props.experience.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
}
};

  render() {
    return (
        <div>
          <div>
            <div className='item'>
              {!this.state.showAddExperienceForm && this.renderForm()}
              {this.state.showAddExperienceForm && <EditExperienceForm data={this.props.experience} toggle={this.onClickHandler} onUpdateExperience={this.props.onUpdateExperience}/>}
            </div>
          </div>
        </div>
      );
  }

export default Experience;