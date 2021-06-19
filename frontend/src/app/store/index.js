import {combineReducers, createStore} from 'redux'
import { todosReducer } from './todosReducer'
 

const store = createStore(
    combineReducers({
        todos: todosReducer,
        filter: (state=0,action) => state
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store
