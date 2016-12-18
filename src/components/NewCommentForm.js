import React, { Component, PropTypes } from 'react'

class NewCommentForm extends Component {
    state = {
        text: '',
        user: ''
    }

    static contextTypes = {
        language: PropTypes.string,
        dictionary: PropTypes.object
    }

    handleChange = field => ev => {
        if (ev.target.value.length > 5) return
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.props.addComment(this.state, this.props.articleId)
        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                {this.context.dictionary['comment'][this.context.language]}: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                {this.context.dictionary['user'][this.context.language]}: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default NewCommentForm
