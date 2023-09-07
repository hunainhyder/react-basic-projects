import { useState } from 'react';
import ExpenseTile from './components/ExpenseTile'

function App() {
  let [expenses, setExpenses] = useState([]);
  let [expense, setExpense] = useState(0);

  const addExpense = newExpense => {
    setExpenses([...expenses, newExpense]);
  }

  return (
    <>
      <input type="number" onChange={e => setExpense(e.target.value)} />
      <button onClick={() => addExpense(expense)}>Add Expense</button>
      {expenses.map((curr, i) => {
        return <ExpenseTile key={i} value={curr} />
      })}
    </>
  )
}

export default App
