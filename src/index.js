import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

require(`./components/${process.env.COMPONENT}`)
require(`./components copy/${process.env.COMPONENT}`)
require(`./components copy 2/${process.env.COMPONENT}`)
require(`./components copy 3/${process.env.COMPONENT}`)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
