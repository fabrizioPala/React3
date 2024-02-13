import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Index } from "./Index";

export function GitHubUserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        async function fetchApi() {
            try {
                const response = await fetch("https://api.github.com/users");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchApi();
    }, []);

    return (
        <>
            <Routes>
                <Route path="/index" element={<Index />} />
                <Route path="/add-user" element={<AddUserMessage />} />
            </Routes>
        
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                           
                            <li><Link to={`/utenti/${user.login}`}>{user.login}</Link></li>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

function AddUserMessage() {
    return <p>Add a user and select it</p>;
}
