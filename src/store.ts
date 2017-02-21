import {createStore, applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers/index";
import {browserHistory} from 'react-router';

//TODO Setup store with Redux devTools, possibly this way
/*const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);*/
//TODO add Hot reloading reducers

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export const history = syncHistoryWithStore(browserHistory, store);

const generateStore = () => {
  //TODO run the sagas here, and test that the middleware works
  return store;
};

export default generateStore;
