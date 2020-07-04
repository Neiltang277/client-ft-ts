import ReactDOM from 'react-dom';
import './index.less';
import * as serviceWorker from './serviceWorker';
import {createApp, createStore} from './app';
import { createBrowserHistory } from 'history'

const { store, history } = createStore(createBrowserHistory(), {});
const application = createApp(store, history);

ReactDOM.render(
  application,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
