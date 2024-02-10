import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Welcome } from './Welcome';
import { Counter } from './Counter';
import { ShowGitHubUser } from './ShowGitHubUser';
import { NotFound } from './NotFound';
import { GitHubUserList } from './GigHubUserList';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome name="Fabrizio" age="29" />} />
        <Route path='/contatore' element={<Counter />} />
        <Route path='/utenti/:username' element={<ShowGitHubUser />} />
        <Route path='*' element={<NotFound />} />
       

      </Routes>
      
      <Link to={"/contatore"}>Counter</Link>
      <Link to={"/"}>Welcome</Link>
      <Link to={"/utenti/fabrizioPala"}>ShowGitHubUser</Link>
      
    </>
  );
}

export default App;

