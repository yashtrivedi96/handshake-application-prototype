import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateStudentProfile } from '../../actions';

class Skills extends React.Component {
  constructor() {
    super();
    this.state = { current_skill: '' };
  }

  componentDidMount() {
    // if (this.props.skill.skillSet != null) {
    //   this.setState({ skills: this.props.skill.skillSet.split(',') });

  }

  onAdd = e => {
    e.preventDefault();
    console.log(this.state.current_skill)
    const list = [...this.props.skill, this.state.current_skill];
    const id = '5e996d140c49d423b10b0e68'
    this.props.updateStudentProfile(id, {skillSet: list})
    this.setState({ current_skill: '' });
  };

  onChangeHandler = e => {
    this.setState({ current_skill: e.target.value });
  };
  onDeleteSkill = e => {
    console.log(e.target.id);
    const list = this.props.skill.filter(item => {
      if (e.target.id !== item) {
        return item;
      }
    });
    const id = '5e996d140c49d423b10b0e68'
    this.props.updateStudentProfile(id, {skillSet: list})
  };

  renderSkills = skill => {
    return (
      <Label as='a' style={{ marginBottom: '5px' }}>
        {skill}
        <Icon name='delete' id={skill} onClick={this.onDeleteSkill} />
      </Label>
    );
  };
  render() {
    return (
      <div>
        <div className='ui raised card' style={{ padding: '10px' }}>
          <div style={{ marginBottom: '30px' }}>
            <h3>Skills</h3>
          </div>
          <div style={{ marginBottom: '20px' }}>
            {this.props.skill && this.props.skill.map(skill => {
              return this.renderSkills(skill);
            })}
          </div>
          <div>
            <form className='ui form'>
              <input
                type='text'
                placeholder='Add more skills'
                value={this.state.current_skill}
                onChange={this.onChangeHandler}
              />
              <div style={{ marginTop: '10px' }}>
                <button class='ui positive button' onClick={this.onAdd}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("My State ", state)
  return {
    skill: state.profile.skillSet
  }
}

export default connect(mapStateToProps, {updateStudentProfile})(Skills);
