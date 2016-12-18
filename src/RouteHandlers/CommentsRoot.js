import React, { Component, PropTypes } from 'react'
import CommentsPaginator from '../components/CommentsPaginator'

class CommentRoot extends Component {
    static propTypes = {

    };

    static contextTypes = {
      language: PropTypes.string,
      dictionary: PropTypes.object
    }

    render() {
        return (
            <div>
                <h1>{this.context.dictionary['Comments pagination'][this.context.language]}</h1>
                {this.props.children}
                <CommentsPaginator />
            </div>
        )
    }
}

export default CommentRoot
