import React from 'react';
import {BrowserRouter as Router, Link,Route,Switch} from 'react-router-dom';



export default class NavBar extends React.Component{

	render(){


var style={
	    textAlign: 'center',
    	width: '100%',
        marginTop: 0,
   		 top: 0,
    	padding: 21,
    	background: 'blanchedalmond',
        marginBottom: 0,
      };
 var style1=
 {
 	 display: 'inline',
    margin:10
    }


		return(
			<Router>
				<div>
					<div >
						<ul style={style}>
						<li style={style1}><Link to="/home">Home</Link></li>
						<li  style={style1}><Link to="/about-us">About us</Link></li>
						<li  style={style1}><Link to="/contact">Contact </Link></li>

						</ul>
					</div>
		
					 <Switch>

					     <Route path="/home" component={this.props.home}/>
				         <Route path="/about-us" component={this.props.about}/>
				         <Route path="/contact" component={this.props.contact}/>

				         <Route component={NoMatch}/>
					</Switch>
				</div>
		
			</Router>);

		
		
	}
}








const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)
