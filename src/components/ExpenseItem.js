import "./ExpenseItem.css";
import ExpressDate from "./ExpenseDate";
import React, { useState } from "react";
import Card from "./Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log('React evaluate each state')
  // function clickHandle
  const clickHandle = () => {
    setTitle('Updated')
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpressDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandle}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
