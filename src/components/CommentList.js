import React from 'react'
import Comment from './Comment'

function CommentList(props) {

    const { comments } = props
    const commentItems = comments ? comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>) : <li>Пока нет ни одного комментария</li>
    const visibleItems = props.commOpened ? commentItems : null
    return(
        <ul>
          { visibleItems }
        </ul>
    )
}

export default CommentList
