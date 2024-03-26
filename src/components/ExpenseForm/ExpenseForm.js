import React, { useEffect, useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ expenses, addExpense, expenseToUpdate, changeExpenseToUpdate }) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  // Use the useEffect hook here, to check if an expense is to be updated
  // If yes, the autofill the form values with the text and amount of the expense
  useEffect(() => {
    console.log("EX: ",expenseToUpdate, ";;", expenses);
    if(expenseToUpdate != null) {
      let expense = expenses[expenseToUpdate];
      
      expenseTextInput.current.value = expense.text;
      expenseAmountInput.current.value = expense.amount;
    }
  }, [expenseToUpdate]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseText = expenseTextInput.current.value;
    const expenseAmount = expenseAmountInput.current.value;
    if (parseInt(expenseAmount) === 0) {
      return;
    }

    if (expenseToUpdate == null) {
      const expense = {
        text: expenseText,
        amount: expenseAmount,
        id: new Date().getTime()
      };
      addExpense(expense);
    } else {
      const expense = {
        text: expenseText,
        amount: expenseAmount,
        id: expenses[expenseToUpdate].id
      };
      changeExpenseToUpdate(expenseToUpdate, expense);
    }
    clearInput();
    return;
    
    // Logic to update expense here
  };

  const clearInput = () => {
    expenseAmountInput.current.value = "";
    expenseTextInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      {/* Change text to Edit Transaction if an expense is to be updated */}
      {expenseToUpdate==null ? <h3>Add new transaction</h3> : <h3> Edit transaction</h3> }
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
      />
      <button className={styles.submitBtn}>
        {/* Change text to Edit Transaction if an expense is to be updated */}
        {expenseToUpdate==null ? <span>Add Transaction</span> : <span>Edit Transaction</span>}
      </button>
    </form>
  );
};

export default ExpenseForm;
