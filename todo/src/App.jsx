import { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  let [todos, setTodos] = useState([]);
  let [todo, setTodo] = useState("");
  let [edit, setEdit] = useState(false);
  
  let deleteTodo = i => {
    let newTodos = [...todos];

    newTodos.splice(i, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <h1>Todo</h1>
      <input type="text" placeholder="Enter a todo" onChange={e => setTodo(e.target.value)} />
      <button onClick={() => setTodos([...todos, todo])}>Add Todo</button>
      <ul>
        {todos.map((curr, i) => <Todo key={i} todo={curr} />)}
      </ul>
    </>
  )
}

export default App
