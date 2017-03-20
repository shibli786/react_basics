import React from 'react'


class ComponentApi extends React.Component{

	constructor(){
		super();

	this.state={

		number:0,
	}

	this.handleClick = this.handleClick.bind(this);


	}	


	handleClick(){
		console.log('hey i am called');

    this.setState({number: this.state.number + 1})
	}


	render(){

		return (
			<div>
			<button onClick={this.handleClick}>Increment</button>	
			<Content number={this.state.number} />

			</div>

			);


		}
}



class Content extends React.Component {
	
componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }

	render(){

		return (
			<div>
			<h1>
				{this.props.number}

			</h1>


			</div>

			);
				}


	}

export default ComponentApi;