import { createStore, compose, applyMiddleware } from 'redux'
import { mainReducer } from './reducers/index'
import thunk from 'redux-thunk'

export const initialState = {
  itemsToDisplay: [],
  count: 5,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = createStore(
  mainReducer,
  initialState,
  // the third argument is going always to be a function, needed for activate specific middlewares,
  // plugins or extensions
  composeEnhancers(applyMiddleware(thunk))
)

export default configureStore