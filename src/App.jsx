import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>React Core Concept Recap</h3>
      <ul>
        <li>Components</li>
        <li>Jsx</li>
        <li>Props</li>
        <li>EventHandler</li>
        <li>State</li>
        <li>Data Load</li>
      </ul>
      <hr />
      <Post></Post>
    </>
  )
}

export default App
