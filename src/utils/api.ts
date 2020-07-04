import axios from 'axios';
import BuildConfig from './../app/config/buildConfig';

const defaultHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const instance = axios.create({
  baseURL: BuildConfig['localhost'].apiDomain,
  timeout: 5000,
  headers: defaultHeader,
  withCredentials: true,
});

const returnJson = (response:any) => response.data;

const standardResponse = (response:any) => {
  if (response.status < 400) {
    return returnJson(response);
  }
  return Promise.reject(returnJson(response));
};

const api = () => {
  let opt = {
    instance,
  };

  return {
    setOptions: (options: any) => {
      opt = {
        ...opt,
        ...options,
      };
    },
    get: (url:any, query:any = {}) => (
      opt.instance.get(url, {
        params: query,
      }).then(standardResponse)
    ),
    post: (url:any, data:any) => (
      opt.instance.post(url, data).then(standardResponse)
    ),
    delete: (url:any) => (
      opt.instance.delete(url).then(standardResponse)
    ),
  };
};

export default api();
