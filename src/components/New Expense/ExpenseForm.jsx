import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //There are two type of approaches to update dom wth of useState

  // 1. Declaring seperate state for all input values
  const [inputTitle, setTitle] = useState("");
  const [inputAmount, setAmount] = useState("");
  const [inputDate, setDate] = useState("");

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={inputTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.1"
              step="0.01"
              value={inputAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2001/01/01"
              step="2023/12/31"
              value={inputDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};
export default ExpenseForm;

// 2. Declare single state for all input values
/* const [userInput, setUserInput] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  });

  function titleChangeHandler(event) {
    setUserInput({
      ...userInput, //which is used to remember previous state value  bcoz it reset all value of state
      inputTitle: event.target.value,
    });
    // OR
    // setUserInput((prevState) => {
    //     return { ...prevState , inputTitle: event.target.value};
    // });
  }
  function amountChangeHandler(event) {
    setUserInput({
      ...userInput, //which is used to remember previous state value  bcoz it reset all value of state
      inputAmount: event.target.value,
    });
    // OR
    // setUserInput((prevState) => {
    //     return { ...prevState , inputAmount: event.target.value};
    // });
  }
  function dateChangeHandler(event) {
    setUserInput({
      ...userInput, //which is used to remember previous state value  bcoz it reset all value of state
      inputDate: event.target.value,
    });
    // OR
    // setUserInput((prevState) => {
    //     return { ...prevState , inputDate: event.target.value};
    // });
  } */

/* 
  //OR
  //These is alternative approach to handle event instead of using 3 handler function we can make a single also

  function inputHandler(identifier, value) {
    if (identifier === "title") {
      setTitle(value);
    } else if (identifier === "amount") {
      setAmount(value);
    } else {
      setImmediate(value);
    }
  }
  // Ways of calling generic handler function
  // onChange={ (event)=> {inputHandler('inputTitle',event.target.value)}}
  // onChange={ (event)=> {inputHandler('inputAmount',event.target.value)}}
  // onChange={ (event)=> {inputHandler('inputDate',event.target.value)}}
   */
