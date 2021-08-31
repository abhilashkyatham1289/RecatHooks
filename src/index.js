import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { AuthConextProvider } from './store/auth-context';

ReactDOM.render(<AuthConextProvider><App /></AuthConextProvider>, document.getElementById('root'));
