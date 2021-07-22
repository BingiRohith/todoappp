import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Todo from './Components/todo';
import { render } from '@testing-library/react';
import TodoForm from './Components/TodoForm';

class App extends Component  {
  constructor(props) {
    super(props)

    this.state ={
      todos:[
      {id: 1,  title:"Cleaning house",complete:false},
      {id: 2,  title:"Washing clothes",complete:false},
      {id: 3,  title:"shopping",complete:false},
     ],
    };
  }
addTodo=(title)=>{
  console.log(title);
  let todos=[...this.state.todos];
  let id=todos[todos.length-1]?todos[todos.length-1]['id']+1:0;
  let newTodo={
    id,
    title,
    complete:false
  };
  todos.push(newTodo);
  this.setState({todos});
};

completeTodo = (id)=>{
  let todos=[...this.state.todos];
  todos.filter(todo=>{
    if(todo.id===id){
      todo.complete=true;
}
  });
  this.setState({todos});
};
deleteTodo=(id)=>{
  let todos=[...this.state.todos];
  todos.filter((todo,index)=>{
    if(todo.id===id){
      todos.splice(index,1);
    }
  });
  this.setState({ todos  });
}
  render(){
  return (
    <div>
          <h1 className="heading">TODOAPP</h1>
          <div className="todo1">
          {this.state.todos.map(todo=>(
           <Todo key={todo.id} todo={todo} completeTodo={(id)=>this.completeTodo(id)}
           deleteTodo={(id)=>this.deleteTodo(id)}/> 
          ))}
          </div>
          <TodoForm addTodo={(todo)=>this.addTodo(todo)}/>
    </div>
  );
  }
}

export default App;
