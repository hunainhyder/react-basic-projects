import { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  let [todos, setTodos] = useState([]);
  let [todo, setTodo] = useState("");

  let deleteTodo = i => {
    let newTodos = [...todos];

    newTodos.splice(i, 1);
    setTodos(newTodos);
  }

  let saveTodo = (i, newVal) => {
    let newTodos = [...todos];

    newTodos.splice(i, 1, newVal);
    setTodos(newTodos);

    setEdit(false)
  }

  let handleAddTodo = () => {
    if (todo.trim() === "") { return; }
    setTodos([...todos, todo]);
  }

  return (
    <>
      <h1>Todo</h1>
      <input type="text" placeholder="Enter a todo" onChange={e => setTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((curr, i) => <Todo key={i} todo={curr} funcs={[deleteTodo, saveTodo]} />)}
      </ul>
    </>
  )
}

export default App
