import useSWR, { SWRConfig } from "swr";

function useGitHubUser({ username }) {
  const { data, error, mutate } = useSWR(username ? `https://api.github.com/users/${username}` : null);

  function handleRefresh(){
    mutate()
  }

  return {
    user: data,
    error: error,
    isLoading: username && !data && !error,
    onRefresh: handleRefresh
  };
}

export default useGitHubUser;

// App.js
function App() {
  return (
    <SWRConfig value={{}}>
      {/* Il resto del tuo componente */}
    </SWRConfig>
  );
}

export default App;
