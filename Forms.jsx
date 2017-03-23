import React from 'react'
import ReactDOM from 'react-dom';
//import { Router, Route, browserHistory, IndexRoute  } from 'react-router'


export class App extends React.Component{

render(){
return (
<div>

	<ul>
		<li>Home</li>
		<li>About</li>
		<li>Contact</li>
	</ul>
	
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

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
	
), document.getElementById('app'))

