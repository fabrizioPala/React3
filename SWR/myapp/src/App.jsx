import { useState } from 'react'

import './App.css'
import { GitHubUsers } from './GitHubUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <GitHubUsers/>
    </>
  )
}

export default App
