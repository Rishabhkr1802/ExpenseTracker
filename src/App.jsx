import React, { useState } from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/New Expense/NewExpense";

export default function App() {
  const dummyExpenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 54400,
      date: new Date(2020, 12, 12),
    },
    {
      id: 2,
      title: "Bike Insurance",
      amount: 54434,
      date: new Date(2020, 10, 15),
    },
    {
      id: 3,
      title: "Plane Insurance",
      amount: 54464,
      date: new Date(2021, 9, 14),
    },
    {
      id: 4,
      title: "Home Insurance",
      amount: 53400,
      date: new Date(2022, 8, 13),
    },
    {
      id: 5,
      title: "Health Insurance",
      amount: 54400,
      date: new Date(2020, 1, 12),
    },
    {
      id: 6,
      title: "Car Insurance",
      amount: 54434,
      date: new Date(2020, 5, 15),
    },
  ];
  const [expenses, setExpenses] = useState(dummyExpenses);
  function onSaveExpenseDataHandler(expensesData) {
    setExpenses((prevState) => {
      return [expensesData, ...prevState];
    });
  }
  //    OR
  /* function onSaveExpenseDataHandler(exp){
    setExpenses( (prevState) => {return [exp,...prevState]});
  } */

  return (
    <>
      <h1 className="display-4 text-center bg-dark text-light p-2">
        Expense Tracker Application
      </h1>
      <NewExpense onSaveExpenseToAppJS={onSaveExpenseDataHandler} />
      <Expense items={expenses} />
    </>
  );
}
