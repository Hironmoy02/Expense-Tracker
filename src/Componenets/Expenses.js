import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import Card from "./Card";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  console.log("Props = ", props);
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (event) => {
    const selectedYear = event.target.value;
    console.log("New yea set hocche = ", selectedYear)
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });



  return (
    <div>
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
    <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
  );
}

export default Expenses;
