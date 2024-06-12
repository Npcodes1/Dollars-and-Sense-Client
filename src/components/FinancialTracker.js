import React from "react";

function FinancialTracker() {
  return (
    <div>
      <section class="section-container">
        <div class="content-wrapper">
          <h1 class="h1-title">LET'S BUDGET!!</h1>
          <p class="budget-details">
            Use our easy-to-navigate expense tracker and add your expenses and
            income to learn how to better balance your funds.
          </p>
          <h2 class="h2-title left-colored-title">Transactions</h2>
          <div class="transactions-container">
            <div class="input-container">
              <div class="category transactions">
                <label for="selected-category">Category: </label>
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

              {/* <!-- Date --> */}
              <div class="transactions">
                <label for="date">Date: </label>
                <input type="date" id="date-input" required />

                {/* <!-- Amount --> */}
                <label for="amount">Amount: </label>
                <input
                  type="number"
                  id="amount-input"
                  placeholder="$"
                  required
                />

                {/* <!-- Notes --> */}
                <label for="notes">Note: </label>
                <textarea
                  type="text"
                  id="note-input"
                  placeholder="Add a Note"
                  required
                ></textarea>
              </div>
              <div class="done-btn">
                <button id="add-transaction" class="btn add-btn">
                  ADD
                </button>
              </div>
            </div>
            {/* <!-- Expenses List --> */}
            <div class="expenses-list">
              <h2 class="h2-title left-colored-title">Expenses</h2>
              <table class="table">
                <thead class="table-heading">
                  <tr>
                    <th>CATEGORY</th>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                    <th>NOTE</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                  </tr>
                </thead>
                <tbody class="expense-table-body">
                  <tr class="expenses-table-row">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="edit">
                      <button class="btn btn-edit">EDIT</button>
                    </td>
                    <td class="delete">
                      <button class="btn btn-delete">DELETE</button>
                    </td>
                  </tr>
                  <tr class="expenses-table-row">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="edit">
                      <button class="btn btn-edit">EDIT</button>
                    </td>
                    <td class="delete">
                      <button class="btn btn-delete">DELETE</button>
                    </td>
                  </tr>
                  <tr class="expenses-table-row">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="edit">
                      <button class="btn btn-edit">EDIT</button>
                    </td>
                    <td class="delete">
                      <button class="btn btn-delete">DELETE</button>
                    </td>
                  </tr>
                  <tr class="expenses-table-row">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="edit">
                      <button class="btn btn-edit">EDIT</button>
                    </td>
                    <td class="delete">
                      <button class="btn btn-delete">DELETE</button>
                    </td>
                  </tr>
                  <tr class="expenses-table-row">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="edit">
                      <button class="btn btn-edit">EDIT</button>
                    </td>
                    <td class="delete">
                      <button class="btn btn-delete">DELETE</button>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="total-container">
                    <td class="total">TOTAL:</td>
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
    </div>
  );
}

export default FinancialTracker;
