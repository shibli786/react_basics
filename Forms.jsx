import React from 'react'
import ReactDOM from 'react-dom';
//import { Router, Route, browserHistory, IndexRoute  } from 'react-router'

import { BrowserRouter as Router,  Route,Link } from 'react-router-dom';

export class App extends React.Component{

render(){
return (
<div>
<Router>
    <div>
      <ul>
        <li><Link to="/">App</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>


      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>

     <Route path="/home/:id" component={Home}/>

    </div>
  </Router>
	
 {this.props.children}

</div>
	);

}


} 


export class Home extends React.Component{

render(){
	 return (
         <div>
            <h1>Home...</h1>
         </div>
      )
}

}



export class Contact extends React.Component{

render(){
	 return (
         <div>
            <h1>Contact...</h1>
         </div>
      )
}

}

export class About extends React.Component{

render(){
	 return (
         <div>
            <h1>About...</h1>
         </div>
      )

}
}


