import React from 'react'

function Comment(props) {
  const { comment } = props

  return (
    <div>
      <p><b>{comment.user}</b></p>
      <p>{comment.text}</p>
    </div>
  )
}

export default Comment
