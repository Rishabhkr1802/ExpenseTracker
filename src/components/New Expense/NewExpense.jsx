import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import "./ExpenseForm.css";

const NewExpense = (props) => {
  function onSaveExpenseDataHandler(expensesData) {
    const acceptExpenseData = {
      ...expensesData,
      id: Math.random().toString()
    }
    props.onSaveExpenseToAppJS(acceptExpenseData);
  }

  return (
    <>
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
      </div>
    </>
  );
};
export default NewExpense;
