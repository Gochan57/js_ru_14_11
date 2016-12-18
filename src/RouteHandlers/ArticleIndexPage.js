import React, { Component, PropTypes } from 'react'

class ArticleIndexPage extends Component {
    static propTypes = {

    };

    static contextTypes = {
      language: PropTypes.string,
      dictionary: PropTypes.object
    }

    render() {
        return (
            <h1>
                {this.context.dictionary['Choose your article'][this.context.language]}
            </h1>
        )
    }
}

export default ArticleIndexPage
