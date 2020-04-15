import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class ToggleButton extends Component {
  state = {}
  handleClick = () =>
    this.setState((prevState) => ({ active: !prevState.active }), () => {
      if(this.state.active) {
        this.props.onSelectHandler(this.props.value);
      } else {
        this.props.onSelectHandler('');
      }
    })

  render() {
    const { active } = this.state

    return (
      <Button primary-basic style={{borderRadius: '25px'}} toggle active={active} onClick={this.handleClick}>
        {this.props.value}
      </Button>
    )
  }
}

export default ToggleButton;