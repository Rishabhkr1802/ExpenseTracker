import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import "../UI/Card.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpenseChart";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  /* let filterInfoText = "2019, 2021 & 2022";

  if (selectedYear === "2020") {
    setDisplayYear = "2021, 2022 & 2023";
  } else if (selectedYear === "2021") {
    setDisplayYear = "2020, 2022 & 2023";
  } else if (selectedYear === "2022") {
    setDisplayYear = "2020, 2021 & 2023";
  } else {
    setDisplayYear = "2020, 2021 & 2022";
  } */

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  /*  let expenseContent = <p>No Expense Found</p>;      //display list wth of storing variables
  if (filterExpenses.length > 0) {
    expenseContent = filterExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  } */

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <p className="text-light">Data for year 2021,2022 & 2023 is hidden.</p>
        <ExpensesChart expenses={filterExpenses} />
        {/* Conditional Rendering */}
        {/* we can also achieve with && operator.  */}
        {filterExpenses.length === 0 ? (
          <p className="display-4 text-light text-center mt-3">
            No Expenses Found
          </p>
        ) : (
          filterExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })
        )}
        {/* we can also achieve with && operator. instead of ternary operator */}
        {/* {filterExpenses.length === 0 && <p>No Expense Found</p>}
        {filterExpenses.length > 0 && 
          filterExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })
        } */}
        {/* Another way of display list wth of storing variable */}
        {/* {expenseContent} */}
        {/* Filter expenses using dropdown */}
        {/* {filterExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })} */}
        {/* Dynamic List Display */}
        {/* {props.items.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })} */}
        {/* Static List display */}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </>
  );
}
export default Expense;