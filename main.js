import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.jsx';
//import Test from './Test.jsx';
// import Validation from './Validation.jsx';
// import ComponentApi from './Component.jsx';


 import {App,Contact,About} from './Forms.jsx';

import {AddTodoForm ,TodoList,Status} from './Redux.jsx';
import {NavBar} from './SideBar.jsx';
import {Main} from './main/Main.jsx';





//ReactDOM.render(<Test />,document.getElementById('app'));

//ReactDOM.render(<Validation />,document.getElementById('val'));

//ReactDOM.render(<ComponentApi />,document.getElementById('val'));

// /ReactDOM.render(<App />,document.getElementById('app'));
ReactDOM.render(<Main />,document.getElementById('app'));