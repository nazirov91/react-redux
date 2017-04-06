import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import Body from '../components/Body';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Require the style
require('../../scss/style.scss');

const App = () => {
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    );
};

export default App;