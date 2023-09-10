import { useState } from 'react';

export default function Todo({ i, todo, funcs }) {
    let [edit, setEdit] = useState(false);
    let [newVal, setNewVal] = useState("");
    let initialValue = todo;

    if (edit) {
        return <li key={i}>
            <input type="text" value={initialValue} onChange={e => setNewVal(e.target.value)} /> 
            <button onClick={() => funcs[0](i)}>Delete</button>
            <button onClick={() => funcs[1](i, newVal)}>Save</button>
        </li> 
    } else {
        return <li key={i}>
            {todo} 
            <button onClick={() => funcs[0](i)}>Delete</button>
            <button onClick={() => setEdit(true)}>Edit</button>
        </li> 
    }
}