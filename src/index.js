import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import { Provider } from 'react-redux'
import DevTools from './containers/DevTools';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            <DevTools/>
        </div>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
