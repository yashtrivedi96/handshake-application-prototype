import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class FilterButton extends Component {
  state = {}
  handleClick = () =>
    this.setState((prevState) => ({ active: !prevState.active }), () => {
      if(this.state.active) {
        this.props.onSort(true);
      } else {
        this.props.onSort(false);
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

export default FilterButton;