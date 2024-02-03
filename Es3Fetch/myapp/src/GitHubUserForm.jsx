import React, { useState } from "react";
import { GitHubUser } from "./GitHubUser"; 

export function GithubUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      setUsernames([...usernames, searchTerm]);
    }
    setSearchTerm("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search User:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      <ul>
        {usernames.map((username) => (
          <li key={username}>
            <GitHubUser username={username} />
          </li>
        ))}
      </ul>
    </div>
  );
}
