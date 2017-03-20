import React from 'react'


class Validation extends React.Component
{

	constructor(){
		 super();
		
      this.state = {
         data: []
	}
	      this.setStateHandler = this.setStateHandler.bind(this);
	      this.setForceUpdateHandler = this.setForceUpdateHandler.bind(this)

	}

setStateHandler() {
	  var item = "state is setted ..  ";
      var myArray = this.state.data;
      myArray.push(item);
      this.setState({data: myArray});

  }
  setForceUpdateHandler(){
  	this.forceUpdate();

  }

render(){


return (
		<div>

		<button onClick={this.setStateHandler}>Set State</button>
		<h4>State Array: {this.state.data}</h4>


		<button onClick={this.setForceUpdateHandler}>Force State</button>
		<h4>State Array: {Math.random()}</h4>
			
	<h1>
		{this.props.propArray}
	</h1>

	<h1>
		{this.props.propBool}
	</h1>
	<h1>
		{this.props.propFunc}
	</h1>
	<h1>
		{this.props.propNumber}
	</h1>
	<h1>
		{this.props.propString}
	</h1>
	<h3>Object: {this.props.propObject.objectName1}</h3>
            <h3>Object: {this.props.propObject.objectName2}</h3>
            <h3>Object: {this.props.propObject.objectName3}</h3>


		</div>
	);

}



}
Validation.propTypes = {
   propArray: React.PropTypes.array.isRequired,
   propBool: React.PropTypes.bool.isRequired,
   propFunc: React.PropTypes.func,
   propNumber: React.PropTypes.number,
   propString: React.PropTypes.string,
   propObject: React.PropTypes.object
}
Validation.defaultProps = {
   propArray: [1,2,3,4,5],
   propBool: true,
   propFunc: function(e){return e},
   propNumber: 1,
   propString: "String value...",
	
   propObject: {
      objectName1:"objectValue1",
      objectName2: "objectValue2",
      objectName3: "objectValue3"
   }
}
export default Validation;