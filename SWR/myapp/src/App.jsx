import { useState } from 'react'

import './App.css'
import { GitHubUsers } from './GitHubUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <GitHubUser/>
    </>
  )
}

export default App
