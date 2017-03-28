import React from 'react';


export class Contact extends React.Component{




	render(){
		var height=screen.height-240;
var style={
	height:'379px',
	background:'#f5f5dc'

}

		console.log("Shoelaces is called "+screen.height);

		return(<div style={style}>Contact Us</div>);

	}
}