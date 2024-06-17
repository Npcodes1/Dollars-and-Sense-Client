import React, { useState } from "react";
import "../Pages.css";
import "../MediaQueries.css";

const url = "http://localhost:8080";

const FinancialTracker = () => {
  //To detect the changes in state
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState();
  const [note, setNote] = useState("");
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState("");
  const [history, setHistory] = useState([]);

  //Add a new entry to history
  const addEntry = () => {
    const newEntry = {
      category: category,
      date: date,
      amount: amount,
      note: note,
    };

    history.push(newEntry);
    setHistory(history);
  };

  const handleTotalInputChange = (e) => {
    setTotal(parseInt(e.target.total.value));
  };

  const handleCreateExpenses = (e) => {
    e.preventDefault(); //to double check everything is working before it refreshes
    // to tell whether it's income or expense
    if (category === "income") {
      // if selected category is income, add amount to total
      setTotal(parseInt(total) + parseInt(amount));
      setIncome(parseInt(income) + parseInt(amount));
    } else {
      // if selected category is expense, subtract amount from total
      setTotal(parseInt(total) - parseInt(amount));
      setExpense(parseInt(expense) - parseInt(amount));
    }

    const body = {
      category: e.target.category.value,
      date: e.target.date.value,
      amount: e.target.amount.value,
      note: e.target.note.value,
    };

    // console.log(body);

    fetch(`${url}/financial/tracker/entry/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <main>
        <section className="section-container">
          <div className="content-wrapper">
            <h1 className="h1-title">LET'S BUDGET!!</h1>
            <p className="budget-details">
              Use our easy-to-navigate expense tracker and add your expenses and
              income to learn how to better balance your funds.
            </p>
            <h2 className="h2-title left-colored-title">Transactions</h2>
            <form
              className="transactions-container"
              onSubmit={handleCreateExpenses}
            >
              <div className="input-container transactions">
                <div className="transactions">
                  <label htmlFor="budget">Enter Your Budget: </label>
                  <input
                    type="number"
                    id="budget"
                    name="budget"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                  />
                </div>
                <div className="category transactions">
                  <label htmlFor="category">Category: </label>
                  <select
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option></option>
                    <option value="Income">Income</option>
                    <option value="Mortgage-Rent">Mortgage/Rent</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Food">Food/Drinks</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Health-wellness">Health/Wellness</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                  </select>
                </div>

                {/* Date */}
                <div className="transactions">
                  <label htmlFor="date">Date: </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />

                  {/* Amount */}
                  <label htmlFor="amount">Amount: </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={amount}
                    placeholder="$"
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />

                  {/* Notes */}
                  <label htmlFor="note">Note: </label>
                  <textarea
                    type="text"
                    id="note"
                    name="note"
                    value={note}
                    placeholder="Add a Note"
                    onChange={(e) => setNote(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="done-btn">
                  <button
                    id="add-transaction"
                    className="btn add-btn"
                    type="submit"
                    onClick={addEntry}
                  >
                    ADD
                  </button>
                </div>
              </div>
              <hr />
              <h2 className="h2-title left-colored-title">
                Your Total is:
                <span onChange={handleTotalInputChange}> $</span>
              </h2>
              <hr />
              {/* Expenses List */}
              <div className="expenses-list">
                <h2 className="h2-title left-colored-title history-title">
                  History
                </h2>
                <div className="history">
                  <ul className="history-list">
                    {history.map((item, key) => (
                      //to make sure to have a unique id when creating each list>
                      <li key={key}>
                        <span>{item.key}</span>{" "}
                        <span>Category: {item.category}</span>
                        <span>Date: {item.date}</span>{" "}
                        <span>Amount: ${item.amount}</span>
                        <span>Note: {item.note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default FinancialTracker;
