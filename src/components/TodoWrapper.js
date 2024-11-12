import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { isEditable } from '@testing-library/user-event/dist/utils';

import { v4 as uidv4 } from 'uuid'; 
uidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState ([]);
    const addTodo = todo => {
        setTodos([...todos, {id:uidv4(), task:todo, completed: false, isEditable: false}]);
        console.log(todos);

    }
  return (
    <div className='TodoWrapper'>
      <TodoForm  addTodo = {addTodo}/> 
    </div>
  )
}

export default TodoWrapper
