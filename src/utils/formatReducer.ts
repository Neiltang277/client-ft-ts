import get from 'lodash/get';

interface Action {
  type?: string
}

function createReducer(defaultState: any, handlers: any) {
  if (typeof defaultState !== 'function') {
    throw new Error('[createReducer] defaultState should be a function');
  }

  function reducer(state = defaultState(), action: Action) {
    if (!action || typeof action.type !== 'string') {
      return state;
    }

    const handler = get(handlers, action.type);

    if (typeof handler === 'function') {
      return handler(state, action);
    }

    return state;
  }

  reducer.defaultState = defaultState;
  reducer.handlers = handlers;

  return reducer;
}

export default createReducer;
