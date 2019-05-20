import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router/immutable';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import rootReducer from './reducers';

/* eslint no-underscore-dangle: 0 */
export default function configureStore(initialState, history) {
  const composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const middleware = composeEnhancers(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  );

  const store = createStore(rootReducer(history), fromJS(initialState), middleware);

  return store;
}
