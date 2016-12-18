import React, {Component, PropTypes} from 'react'

export default class Switcher extends Component {
    static propTypes = {
      name: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired,
      checked: PropTypes.string,
      onChange: PropTypes.func.isRequired,
    }

    render() {
      const items = this.props.items.map(item => (
        <p key={item.value}>
          <input type="radio" name={this.props.name} value={item.value} checked={item.value==this.props.checked} onChange={this.props.onChange}/> {item.label}
        </p>
      ))
      return (
        <div>
          {items}
        </div>
      )
    }
}
