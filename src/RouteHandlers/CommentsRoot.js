import React, { Component, PropTypes } from 'react'
import CommentsPaginator from '../components/CommentsPaginator'

class CommentRoot extends Component {
    static propTypes = {

    };
    //возможно лучше хранить просто актуальный словарь
    static contextTypes = {
      language: PropTypes.string,
      dictionary: PropTypes.object
    }

    render() {
        //общее замечание по всем местам: лучше в самих компонентах абстрагироваться от контекста, если он часто нужен. 
        //Например сделав декоратор(по примеру connect) или, скажем, LocalizedText компонент по примеру Link
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
