import { combineReducers } from "redux";
import reducers from "./testReduces";
import { connectRouter } from "connected-react-router";
import { History } from "history";


/**
 * 通过combineReducers 将store 当中的state导出
 */

const createRootReducers = (history: History) => combineReducers({
    test: reducers,
    router: connectRouter(history)
})

export default createRootReducers

