import React from "react";
import { GitHubUser } from "./GitHubUser"; // Assicurati di aggiustare il percorso di importazione

export function GitHubUserList({ usernames }) {
  return (
    <ul>
      {usernames.map((username) => (
        <li key={username}>
          <GitHubUser username={username} />
        </li>
      ))}
    </ul>
  );
}