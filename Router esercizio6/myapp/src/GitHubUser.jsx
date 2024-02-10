import { useEffect, useState } from "react";

export function GitHubUser({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((error) => {
        console.error("Error fetching GitHub user:", error);
      });
  }, [username]);

  return (
    <div>
      {data && (
        <>
          <h2>{data.login}</h2>
          <h3>ID: {data.id}</h3>
          <img src={data.avatar_url} alt="" />
        </>
      )}
    </div>
  );
}
