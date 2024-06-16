import React, { useState } from "react";
import "../Pages.css";
import "../MediaQueries.css";

const url = "http://localhost:8080";

function FinancialTracker() {
  //set initial state of inputs for financial tracker
  const [trackerInput, setTrackerInput] = useState({});

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  const handleCreateExpenses = (e) => {
    const body = {
      category: e.target.category.value,
      date: e.target.date.value,
      amount: e.target.amount.value,
      note: e.target.note.value,
    };

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
        setTrackerInput(trackerInput);
      })
      .catch((error) => console.log(error));
  };

  //Retrieve Expenses
  // const handleGetExpenses = () => {
  //   fetch(`${url}/financial/tracker/entry/create`, {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result.data);
  //       setTrackerInput(trackerInput);
  //     })
  //     .catch((error) => console.log(error));
  // };

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
              <div className="input-container">
                <div className="category transactions">
                  <label htmlFor="category">Category: </label>
                  <select
                    id="category"
                    name="category"
                    onChange={handleInputChange}
                    required
                  >
                    <option></option>
                    <option value="income">Income</option>
                    <option value="morgage-rent">Mortgage/Rent</option>
                    <option value="utilities">Utilities</option>
                    <option value="insurance">Insurance</option>
                    <option value="food">Food/Drinks</option>
                    <option value="transportation">Transportation</option>
                    <option value="health-wellness">Health/Wellness</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="miscellaneous">Miscellaneous</option>
                  </select>
                </div>

                {/* Date */}
                <div className="transactions">
                  <label htmlFor="date">Date: </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    onChange={handleInputChange}
                    required
                  />

                  {/* Amount */}
                  <label htmlFor="amount">Amount: </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="$"
                    onChange={handleInputChange}
                    required
                  />

                  {/* Notes */}
                  <label htmlFor="note">Note: </label>
                  <textarea
                    type="text"
                    id="note"
                    name="note"
                    placeholder="Add a Note"
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <div className="done-btn">
                  <button
                    id="add-transaction"
                    className="btn add-btn"
                    type="submit"
                  >
                    ADD
                  </button>
                </div>
              </div>
              {/* Expenses List */}
              <div className="expenses-list">
                <h2 className="h2-title left-colored-title">Expenses</h2>
                {/* <table className="table">
                  <thead className="table-heading">
                    <tr>
                      <th>CATEGORY</th>
                      <th>DATE</th>
                      <th>AMOUNT</th>
                      <th>NOTE</th>
                      <th>EDIT</th>
                      <th>DELETE</th>
                    </tr>
                  </thead>
                  <tbody className="expense-table-body">
                    <tr className="expenses-table-row">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="edit">
                        <button className="btn btn-edit">EDIT</button>
                      </td>
                      <td className="delete">
                        <button className="btn btn-delete">DELETE</button>
                      </td>
                    </tr>
                    <tr className="expenses-table-row">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="edit">
                        <button className="btn btn-edit">EDIT</button>
                      </td>
                      <td className="delete">
                        <button className="btn btn-delete">DELETE</button>
                      </td>
                    </tr>
                    <tr className="expenses-table-row">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="edit">
                        <button className="btn btn-edit">EDIT</button>
                      </td>
                      <td className="delete">
                        <button className="btn btn-delete">DELETE</button>
                      </td>
                    </tr>
                    <tr className="expenses-table-row">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="edit">
                        <button className="btn btn-edit">EDIT</button>
                      </td>
                      <td className="delete">
                        <button className="btn btn-delete">DELETE</button>
                      </td>
                    </tr>
                    <tr className="expenses-table-row">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="edit">
                        <button className="btn btn-edit">EDIT</button>
                      </td>
                      <td className="delete">
                        <button className="btn btn-delete">DELETE</button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="total-container">
                      <td className="total">TOTAL:</td>
                      <td id="total-amount"></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table> */}
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default FinancialTracker;
