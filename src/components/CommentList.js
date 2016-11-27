import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import AddComment from './AddComment'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }


    componentWillReceiveProps() {
        //console.log('---', 'CL receiving props')
    }

    componentWillUpdate() {
        //console.log('---', 'CL will update')
    }


    render() {
        return (
            <div>
                {this.getButton()}
                {this.getList()}
            </div>
        )
    }


    getButton() {
        const { comments, isOpen, toggleOpen } = this.props
        let text = 'Add first comment'
        if ( comments.length){
          text = (isOpen ? 'hide' : 'show') + ' comment'
        }
        return <a href="#" onClick = {toggleOpen}>{text}</a>
    }

    getList() {
        const { comments, isOpen } = this.props
        if (!isOpen) return null
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return (
          <div>
            <ul>{commentItems}</ul>
            <AddComment/>
          </div>
        )
    }
}

export default toggleOpen(CommentList)
