import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers/index';
import App from './components/App';

const store = createStore(allReducers);

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
