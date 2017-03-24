import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.jsx';
//import Test from './Test.jsx';
// import Validation from './Validation.jsx';
// import ComponentApi from './Component.jsx';


 import {App,Home,Contact,About} from './Forms.jsx';

import {AddTodoForm ,TodoList,Status} from './Redux.jsx';


import { BrowserRouter as Router,  Route,Link } from 'react-router-dom';



//ReactDOM.render(<Test />,document.getElementById('app'));

//ReactDOM.render(<Validation />,document.getElementById('val'));

//ReactDOM.render(<ComponentApi />,document.getElementById('val'));

ReactDOM.render(<App />,document.getElementById('app'));