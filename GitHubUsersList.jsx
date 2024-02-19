import React from "react";
import { Route, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

function GithubUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://api.github.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="hubList">
        <div className="out">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              <li key={0}>
                <Link to={`/users/fabrizioPala`}>fabrizioPala</Link>
              </li>
              {users.map((user) => {
                return (
                  <li key={user.id}>
                    <Link to={`/users/${user.login}`}>{user.login}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <Outlet />
      </div>
    </>
  );
}

function IndexRoute() {
  return <p>Add a user and select it</p>;
}

export default function App() {
  return (
    <div>
      <Route index element={<IndexRoute />} />
      <Route element={<GithubUserList />} />
    </div>
  );
}
