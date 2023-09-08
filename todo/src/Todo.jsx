import { useState } from 'react';

export default function Todo({ i, todo }) {
    let [edit, setEdit] = useState(false);

    if (edit) {
        return <li key={i}>
            <input type="text" value={todo} /> 
            <button onClick={() => deleteTodo(i)}>Delete</button>
            <button onClick={() => saveTodo(i)}>Save</button>
        </li> 
    } else {
        return <li key={i}>
            {todo} 
            <button onClick={() => deleteTodo(i)}>Delete</button>
            <button onClick={() => setEdit(true)}>Edit</button>
        </li> 
    }
}