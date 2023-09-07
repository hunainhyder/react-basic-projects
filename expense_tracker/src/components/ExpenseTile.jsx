import './ExpenseTile.css';

export default function ExpenseTile({ value }) {
    let tileType = (value >= 0) ? "Income" : "Expense";

    return <div className={tileType}>
        <h2>{tileType}</h2>
        <p>{value}</p>
    </div>
}