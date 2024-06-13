import React from "react";

function FinancialTracker() {
  return (
    <div>
      <main>
        <section className="section-container">
          <div className="content-wrapper">
            <h1 className="h1-title">LET'S BUDGET!!</h1>
            <p className="budget-details">
              Use our easy-to-navigate expense tracker and add your expenses and
              income to learn how to better balance your funds.
            </p>
            <h2 className="h2-title left-colored-title">Transactions</h2>
            <div className="transactions-container">
              <div className="input-container">
                <div className="category transactions">
                  <label htmlFor="selected-category">Category: </label>
                  <select id="selected-category" required>
                    <option></option>
                    <option value="income">Income</option>
                    <option value="housing">Mortgage/Rent</option>
                    <option value="utilities">Utilities</option>
                    <option value="insurance">Insurance</option>
                    <option value="food">Food/Drinks</option>
                    <option value="transportation">Transportation</option>
                    <option value="personal-care">Health/Wellness</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="miscellaneous">Miscellaneous</option>
                  </select>
                </div>

                {/* Date */}
                <div className="transactions">
                  <label htmlFor="date">Date: </label>
                  <input type="date" id="date-input" required />

                  {/* Amount */}
                  <label htmlFor="amount">Amount: </label>
                  <input
                    type="number"
                    id="amount-input"
                    placeholder="$"
                    required
                  />

                  {/* Notes */}
                  <label htmlFor="notes">Note: </label>
                  <textarea
                    type="text"
                    id="note-input"
                    placeholder="Add a Note"
                    required
                  ></textarea>
                </div>
                <div className="done-btn">
                  <button id="add-transaction" className="btn add-btn">
                    ADD
                  </button>
                </div>
              </div>
              {/* Expenses List */}
              <div className="expenses-list">
                <h2 className="h2-title left-colored-title">Expenses</h2>
                <table className="table">
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
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FinancialTracker;
