import React from 'react';
import Navbar from '../SideBar.jsx';
import {Footer} from '../footer/footer.jsx';
import {AboutUs} from '../aboutus/about.jsx';
import {Contact} from '../contact/contact.jsx';


export class Main extends React.Component{

render(){

return(
	<div>
	<Navbar home={Home} about={AboutUs} contact={Contact}/>
	<Footer />
	</div>


	);

}

}


export class Home  extends React.Component{


	render(){
					//var height=screen.height-240;

	var style={
	height:'379px',
	background:'#f5f5dc'

}

		return(

		<div style={style}>Home Page</div>

	);

	}
}




