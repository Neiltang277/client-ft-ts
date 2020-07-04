import api from './../../utils/api';
import createAsyncAction from './../../utils/asyncAction';


const getCities = () => (
  createAsyncAction('APP_GET_CITIES', () => (
    api.get('/common/cities')
  ))
);

const getProvinces = () => (
  createAsyncAction('APP_GET_PROVINCES', () => (
    api.get('/common/provinces')
  ))
);

const getNotices = () => (
  createAsyncAction('APP_GET_NOTICES', () => (
    api.get('/notices')
  ))
);

const deleteNotice = (id:any) => {
  const action = createAsyncAction('APP_DELETE_NOTICE', () => (
    api.delete(`/notices/${id}`)
  ));

  return (dispatch:any) => (
    action(dispatch)
      .then((callbackAction:any) => {
        if (callbackAction.type === 'APP_DELETE_NOTICE_SUCCESS') {
          return getNotices()(dispatch);
        }
        return null;
      })
  );
};

const login = (username:any, password:any) => (
  createAsyncAction('APP_LOGIN', () => (
    api.post('/login', {
      username,
      password,
    })
  ))
);

const resetLoginErrorMsg = () => ({
  type: 'APP_RESET_LOGIN_ERROR_MSG',
});

const loginUser = (username:any, password:any) => {
  const action = login(username, password);
  let storage = window.localStorage;

  return (dispatch:any) => (
    action(dispatch)
      .then(((callbackAction:any) => {
        if (callbackAction.type === 'APP_LOGIN_SUCCESS') {


          storage.setItem('item', JSON.stringify(callbackAction.payload));
          return getNotices()(dispatch);
        }
        if (callbackAction.type === 'APP_LOGIN_ERROR') {
          return setTimeout(() => dispatch(resetLoginErrorMsg()), 1500);
        }
        return null;
      }))
  );
};

const logout = () => {
  let storage = window.localStorage;
  storage.removeItem('user');

  return ({
    type: 'APP_LOGOUT',
  });
};

const updateNotification = (notification:any) => ({
  type: 'APP_UPDATE_NOTIFICATION',
  payload: notification,
});

const resetNotification = () => ({
  type: 'APP_RESET_NOTIFICATION',
});

export default {
  login,
  loginUser,
  resetLoginErrorMsg,
  logout,
  getNotices,
  deleteNotice,
  updateNotification,
  resetNotification,
  getProvinces,
  getCities
};
