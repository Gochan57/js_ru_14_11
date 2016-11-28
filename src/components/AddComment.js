import React, { Component } from 'react'

class AddComment extends Component {
  state = {
    //ок, только сюда еще user следовало поместить
    value: ''
  }

  render() {
    return (
      <div>
        <textarea value={this.state.value} onChange={this.handleChange.bind(this)}/>
        <p><button>Add Comment</button></p>
      </div>
    )
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }
}

export default AddComment
