import React from 'react';
import {BrowserRouter as Router, Link,Route,Switch} from 'react-router-dom';



export class SideBar extends React.Component{

	render(){


var style2={
        padding: '10px',
        width: '40%',
        background: '#f0f0f0'
      };
 var style1={
 	 display: 'flex' ,
 }
		return(
			<Router>
				<div style={style1}>
					<div style={style2}>
						<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/bubblegum">BubbleGum</Link></li>
						<li><Link to="/shoelaces">Shoelaces</Link></li>

						</ul>
					</div>
		
					 <Switch>
				         <Route path="/bubblegum" component={Home}/>
				         <Route path="/shoelaces" component={ShoeLaces}/>
				         <Route component={NoMatch}/>
					</Switch>
				</div>
		
			</Router>);

		
		
	}
}

export class BubbleGum extends React.Component{


	render(){

		console.log("BubbleGum is called");

return(

		<div>bubblegum!</div>

	);

	}
}

export class ShoeLaces extends React.Component{


	render(){
		console.log("Shoelaces is called");

		return(<div>ShoeLaces!</div>);

	}
}

export class Home  extends React.Component{


	render(){

		return(

		<div>Idklsdklkl</div>

	);

	}
}

class Main extends React.Component{

render(){


	return(<div>
		<p>Main </p>
		{this.props.name}

		</div>);

		
	
}

}


const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)
