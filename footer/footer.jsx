import React from 'react'



export class Footer extends React.Component{

render(){

var style={
	height: 200,
    background: 'black',
    color: 'white',
    textAlign: 'center',
    display: 'table',
    width: '100%',

}
var style2={
	verticalAlign: 'middle',
    display: 'table-cell',

}

return(
<div style={style}>
<p style={style2}>Copyright @react Devlopement 2016-17</p>


</div>

	);

}

}
