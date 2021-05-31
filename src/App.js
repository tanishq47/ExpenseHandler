import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 110,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 5000,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 35000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 2000,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; //here we are dependeing upon the prev state of the array so we have used this method
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
