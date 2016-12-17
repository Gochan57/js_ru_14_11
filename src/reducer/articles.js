import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'
import { Map } from 'immutable'

const defaultArticles = normalizedArticles.reduce((arr, article) => {
    return arr.set(article.id, article)
}, new Map({}))

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
          return articlesState.delete(payload.articleId)
        // case ADD_COMMENT:
        //   return articlesState.setIn()
    }

    return articlesState
}
