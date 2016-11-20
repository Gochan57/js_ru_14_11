import React, { Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            commOpened: false,
        }
    }

    render() {
        const { article } = this.props
        const comments = <CommentList comments={article.comments} commOpened={this.state.commOpened} />
        const body = this.state.isOpen
          ? <section>
              <p>{article.text}</p>
              <button onClick = {this.commButtonClick}>{this.state.commOpened ? '- Скрыть комментарии' : '+ Показать комментарии'}</button>
              {comments}
            </section>
          : null

        return (
            <section>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
            </section>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    commButtonClick = ev => {
      this.setState({
        commOpened: !this.state.commOpened,
      })
    }
}

export default Article
