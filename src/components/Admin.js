import React, { useState, useEffect } from "react";
import "../Pages.css";
import "../MediaQueries.css";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8080";

function Admin() {
  const navigate = useNavigate();

  // to hold data for users. Initial state is an empty array
  const [users, setUsers] = useState([]);

  //to hold data for messages sent from contact form. Initial state is an empty array
  const [sends, setSends] = useState([]);

  //To get Users
  useEffect(() => {
    //Get Request to get all users
    fetch(`${url}/auth/admin/users`, {
      method: "GET",
    })
      //if successful, show the users and if not, show an error
      .then((response) => response.json()) //to convert response into json
      .then((result) => {
        console.log(result); //print converted result to console
        setUsers(users.data);
      })
      .catch((error) => console.log("Request failed", error));
  }, [users]);

  //To create User
  const handleCreateUser = () => {
    fetch(`${url}/admin/users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  //To edit User
  const handleEditUser = (userId) => {
    fetch(`${url}/admin/users/edit/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  //To delete User
  const handleDeleteUser = (userId) => {
    fetch(`${url}/admin/users/delete/${userId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  //useEffect to use setter function for users imported from signUp data
  useEffect(() => {
    //Get Request to get all users
    fetch(`${url}/admin/messages`)
      //if successful, show the users and if not, show an error
      .then((response) => response.json()) //to convert response into json
      .then((result) => {
        console.log(result); //print converted result to console
        setSends(sends);
      })
      .catch((error) => console.log("Request failed", error));
  }, [sends]);

  const handleDeleteMessage = (sendId) => {
    fetch(`${url}/api/books/delete/${sendId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const handleEditMessage = (sendId) => {
    navigate("/update");
  };

  return (
    <>
      <main>
        <section className="section-container margin-space">
          <h1 className="h1-title">ADMIN ACCESS</h1>
        </section>
        <section className="section-container">
          <div className="content-wrapper">
            {/* Signed up Users Data */}
            <h2>Users</h2>
            <table className="table">
              <thead className="table-heading">
                <tr>
                  <th>FIRST NAME</th>
                  <th>LAST NAME</th>
                  <th>EMAIL</th>
                  <th>USERNAME</th>
                  {/* <th>PASSWORD</th> */}
                </tr>
              </thead>
              <tbody className="table-body">
                {users.map((user) => {
                  return (
                    <tr className="table-row" key={user.id}>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.username}</td>
                      {/* <td>{user.password}</td> */}
                      <td>
                        <button
                          className="btn"
                          onClick={() => handleCreateUser()}
                        >
                          CREATE
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-edit"
                          onClick={() => handleEditUser(user.id)}
                        >
                          EDIT
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-delete"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section for Messages from Contact Form */}
        <section className="section-container">
          <div className="content-wrapper">
            {/* Messages Data */}
            <h2>Messages</h2>
            <table className="table">
              <thead className="table-heading">
                <tr>
                  <th>FIRST NAME</th>
                  <th>LAST NAME</th>
                  <th>MESSAGE</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {sends.map((send) => {
                  return (
                    <tr className="table-row" key={send.id}>
                      <td>{send.firstName}</td>
                      <td>{send.lastName}</td>
                      <td>{send.email}</td>
                      <td>{send.username}</td>
                      <td>{send.password}</td>
                      <td>
                        <button
                          className="btn btn-edit"
                          onClick={() => handleEditMessage(send.id)}
                        >
                          EDIT
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-delete"
                          onClick={() => handleDeleteMessage(send.id)}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}

export default Admin;
