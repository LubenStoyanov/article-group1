import { useState } from 'react'
import reactLogo from './assets/react.svg'
 import './App2.css'
import ArticleHTML from './ArticleHTML'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <ArticleHTML />
      </div>
    
    </div>
  )
}

export default App
