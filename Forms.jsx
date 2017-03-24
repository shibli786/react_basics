import React from 'react'
import ReactDOM from 'react-dom';
//import { Router, Route, browserHistory, IndexRoute  } from 'react-router'

import { BrowserRouter as Router,  Route,Link,Switch } from 'react-router-dom';

export class App extends React.Component{

render(){
return (
<div>
<Router>
    <div>
      <ul>
        <li><Link to="/">App</Link></li>
        <li><Link to="/home/aaa">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
               <li><Link to="/will-not-match">will-not-match</Link></li>

        <li><Link to="/child">Child</Link></li>
      </ul>

      <Switch>
       <Route path="/about" component={About}/>
       <Route path="/home" component={Home}/>
       <Route path="/contact" component={Contact}/>

       <Route path="/child" component={Child}/>

     <Route path="/:id/:name" component={Child}/>
           <Route component={NoMatch}/>
</Switch>


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


const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)


const Child = ({ match }) => (
  <div>
  <h2>Child Component is loaded</h2>
    <h3>ID: {match.params.id}</h3>
<h3>Name: {match.params.name}</h3>    
      {console.log(match)}
  </div>
)
