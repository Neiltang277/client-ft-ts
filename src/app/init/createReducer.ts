import createReducer from './../../utils/formatReducer';

const defaultState = () => ({
  isLogin: false,
});


const loginSuccess = (state:any, action:any) => ({
  ...state,
  isLogin: true,
  user: action.payload,
});

export default createReducer(defaultState, {
  APP_LOGIN_SUCCESS: loginSuccess,

});
