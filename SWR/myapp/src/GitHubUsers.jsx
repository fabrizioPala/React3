import React from 'react'
import useSWrR from 'swr'
const fetcher = url=>fetch(url).then(response=> response.json())
export  function GitHubUsers() {
    const {data,error}=useSWrR('https://api.github.com/users',fetcher)

  return(
    <div>
        {!data && !error && <h3>Loading..</h3>}
        {error&&<h3>Errore!</h3>}
        {data&& !error&&<ul>
            {data.map(user=> (
                
                <li><a href={`/utenti/${user.login}`}>{user.login}</a></li>
            ))}
            </ul>}
    </div>
  )
}
