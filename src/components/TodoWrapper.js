import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { isEditable } from '@testing-library/user-event/dist/utils';

import { v4 as uidv4 } from 'uuid'; 
import Todo from './Todo';
uidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState ([
        
    ]);
    const addTodo = todo => {
        setTodos([...todos, {id:uidv4(), task:todo, completed: false, isEditable: false}]);
        console.log(todos);

    }
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };
  return (
    <div className='TodoWrapper'>
      <TodoForm  addTodo = {addTodo}/> 
      {todos.map((todo , index) =>(
        <Todo task={todo} key={index} toggleComplete={toggleComplete} />

      ) )}
      
    </div>
  )
}

export default TodoWrapper
