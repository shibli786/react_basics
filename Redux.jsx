
import React from 'react'

import ReactDOM from 'react-dom'

import { createStore } from 'redux';

var defaultState = {
  todo: {
    items: []
  }
};

function addTodo(message) {
  return {
    type: 'ADD_TODO',
    message: message,
    completed: false
  };
}

function completeTodo(index) {
  return {
    type: 'COMPLETE_TODO',
    index: index
  };
}
 
function deleteTodo(index) {
  return {
    type: 'DELETE_TODO',
    index: index
  };
}
 
function clearTodo() {
  return {
    type: 'CLEAR_TODO'
  };
}



// reducer function is a callback function
function todoApp(state, action) {
  // Add the reducer logic that we added in the previous steps...


		 switch(action.type){
		case 'ADD_TODO':
		console.info("todo reducer is called");
		var newState = Object.assign({},state);
		newState.todo.items.push({
			message: action.message,
			completed:false
		});
		return newState;
		case 'COMPLETE_TODO':
				console.info("cOMPLETE todo reducer is called");

		var newState =Object.assign({},state);
		newState.todo.items[action.index].completed=true;
		return newState;
		case 'DELETE_TODO':
			console.info("deLETE todo reducer is called");

				var items = [].concat(state.todo.items);
				items.splice(action.index,1);
			var newState = Object.assign({},state,{todo :{
				items:items
			}});
			return newState;

		case 'CLEAR_TODO':
			return Object.assign({},state,{
				todo:{
					items:[]
				}
			});

default:
	return state;

  }
}
var store = createStore(todoApp, defaultState);

export class AddTodoForm extends React.Component{

	componentWillMount(){

		console.info("AddTodoForm componentWillMount");
	}

	constructor(){
		super();
		this.state={
			message :'',

		}
		this.onTextChanged = this.onTextChanged.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

onTextChanged(e){
	var message =e.target.value;
	this.setState({message:message});

}

onSubmit(e){
	e.preventDefault();
	store.dispatch(addTodo(this.state.message));
	this.setState({message:this.state.message});
	document.getElementById('input-text').value='';

}

render(){


	return(<div>
		
		<form onSubmit={this.onSubmit}>
		<input id='input-text' type= "text" placeholder="Add Task" onChange={this.onTextChanged}/>
		<button type="submit">Submit</button>
	</form>

	</div>);
}

}


class TodoItem extends React.Component{


	componentWillMount(){

		console.info("TODOItem componentWillMount");
	}


	  onDeleteClick() {
    store.dispatch(deleteTodo(this.props.index));
  }
 
  onCompletedClick() {
    store.dispatch(completeTodo(this.props.index));
  }
 
	render(){


		console.info("TODOItem render IS CALLED");

		return (  <li>
        <a href="#" onClick={this.onCompletedClick.bind(this)}>{this.props.message.trim()}</a> 
        <a href="#" onClick={this.onDeleteClick.bind(this)} style={{textDecoration: 'none'}}>[x]</a>
      </li>);

	}



}

export class TodoList extends React.Component {

constructor()
{
super();

this.state={

items :[]

}



}

componentWillMount(){
	console.info("TODOLISt componentWillMount");


store.subscribe(()=>{
		console.info("TODOLISt . subscribe ");


	var state = store.getState();
	this.setState({
		items: state.todo.items
	});
});

	
}


render(){

var items =[];



this.state.items.forEach((item, index)=> {
	console.log(items);
	console.log(index);

	items.push(
	<TodoItem
		key={index}
		index={index}
		message={item.message}
		completed ={item.completed}
	/>);	
});

if(items.length==0){

	return(
		<p>
			<i>Please add something top do.
				
			</i>

		</p>);

}
return (<ol>

	{
		items
	}
	

</ol>);

}
}



export class Status extends React.Component{


constructor(){
super();



this.handleClick = this.handleClick.bind(this);

}

handleClick(){


  //alert("Button is clicked");
ReactDOM.render(<CompletedList />,document.getElementById('comp-list'));

}

render(){

return (<div>
	
<button onClick={this.handleClick}>Completed</button>

</div>);

}

}

class CompletedList extends React.Component{

	constructor(){
		super();
		this.state={
			items:[],
		
		}

	}
componentWillMount(){

	store.subscribe(()=>{

		var state=store.getState();
		this.setState({
			items:state
		});


	});

}
	render(){
		var completedItems=[];

		this.state.items.forEach((items, incex)=>{

			if(items.completed){
				completedItems.push(
					<li> {items.message}</li>
					);
			}

		});
		return(

			<ul>
			{completedItems}
			</ul>

			);

	}
}




