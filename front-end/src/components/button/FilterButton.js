import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const FilterButton = ({value}) => (
  <Dropdown
    text={value}
    icon='filter'
    floating
    labeled
    button
    className='icon'
  >
    <Dropdown.Menu>
      <Dropdown.Header icon='tags' content='Filter by tag' />
      <Dropdown.Item>Ascending</Dropdown.Item>
      <Dropdown.Item>Descending</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default FilterButton