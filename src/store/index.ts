import { applyMiddleware, compose, legacy_createStore } from 'redux'
import { createBrowserHistory } from 'history'
import createRootReducers from './reducers'
import { routerMiddleware } from 'connected-react-router'

/**
 * @description  redux store数据 
 */
const history = createBrowserHistory()

const store = legacy_createStore(
    createRootReducers(history),
    compose(
        applyMiddleware(
            routerMiddleware(history)
        )
    )
)

export { store, history }
