import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header.js';
import Homepage_2 from './Components/Homepage-2.js';
import Homepage_3 from './Components/Homepage-3.js';
import Homepage_4 from './Components/Homepage-4.js';
import Homepage_5 from './Components/Homepage-5.js';
import Homepage_6 from './Components/Homepage-6.js';
import Homepage_7 from './Components/Homepage-7.js';
import Homepage_8 from './Components/Homepage-8.js';
import Homepage_9 from './Components/Homepage-9.js';
import Myfotter from './Components/myfooter.js';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('Header-Container'));
ReactDOM.render(<Homepage_2 />, document.querySelector('.Homepge-2'));
ReactDOM.render(<Homepage_3 />, document.querySelector('.Homepge-3'));
ReactDOM.render(<Homepage_4 />, document.querySelector('.Homepge-4'));
ReactDOM.render(<Homepage_5 />, document.querySelector('.Homepge-5'));
ReactDOM.render(<Homepage_6 />, document.querySelector('.Homepge-6'));
ReactDOM.render(<Homepage_7 />, document.querySelector('.Homepge-7'));
ReactDOM.render(<Homepage_8 />, document.querySelector('.Homepge-8'));
ReactDOM.render(<Homepage_9 />, document.querySelector('.Homepge-9'));
ReactDOM.render(<Myfotter />, document.querySelector('.footerblock'));
serviceWorker.unregister();
