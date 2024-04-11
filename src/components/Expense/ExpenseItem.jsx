import React from "react";
import "./ExpenseItem.css";
import "../UI/Card.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">Rs {props.amount}</div>
        </div>
      </Card>
    </>
  );
}

export default ExpenseItem;

/* Example of Handling Event & update UI with the value title using useState Hook...
  we need to replace props.title to {title} & add <button onClick={updateTitle}>Title</button>
  const [title, setTitle] = useState(props.title);
  function updateTitle() {
    setTitle('Updated title');
  } */