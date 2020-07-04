import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
  } from 'redux';
  import { connectRouter, routerMiddleware } from 'connected-react-router';
  import reduxThunk from 'redux-thunk';
  import reducers from './../reducers';
  
  function createAppStore(history:any, preloadedState = {}) {
    // enhancers
    let composeEnhancers = compose;
  
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-underscore-dangle
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }
  
    // middlewares
    const middlewares = [
      routerMiddleware(history),
      reduxThunk,
    ];
  
    const createRootReducer = (history: any) => combineReducers({
      router: connectRouter(history),
      ...reducers
    })
  
    const store = createStore(
      createRootReducer(history),
      preloadedState,
      composeEnhancers(applyMiddleware(...middlewares)),
    );
  
    return {
      store,
      history,
    };
  }
  
  export default createAppStore;
  