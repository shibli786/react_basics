import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.jsx';
//import Test from './Test.jsx';
import Validation from './Validation.jsx';
import ComponentApi from './Component.jsx';
// import {App,Home,About,Contact} from './Forms.jsx';
//import { Router, Route, browserHistory  } from 'react-router'

import {AddTodoForm ,TodoList,Status} from './Redux.jsx';

//import { BrowserRouter as Router, Route } from 'react-router-dom'; 


//ReactDOM.render(<Test />,document.getElementById('app'));

//ReactDOM.render(<Validation />,document.getElementById('val'));

//ReactDOM.render(<ComponentApi />,document.getElementById('val'));

/*
ReactDOM.render(
   <Router>
      <Route path = "/" component = {App}>
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
   
, document.getElementById('app'));*/

ReactDOM.render(
	<div>
	<h1>Todo</h1>
	<AddTodoForm />
	<Status/>
	<TodoList />
	</div>
	,document.getElementById('app')



	);