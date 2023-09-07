import { useState } from 'react';
import ExpenseTile from './components/ExpenseTile'

function App() {
  let [expenses, setExpenses] = useState([]);
  let [expense, setExpense] = useState(0);

  const addExpense = newExpense => {
    setExpense([...expenses, newExpense]);
    console.log(expenses);
  }

  return (
    <>
      <input type="number" onChange={e => setExpense(e.target.value)} />
      <button onClick={() => addExpense(addExpense(expense))}>Add Expense</button>
      <ExpenseTile />
    </>
  )
}

export default App
