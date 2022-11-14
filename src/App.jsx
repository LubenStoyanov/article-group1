import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ReactArticle from './assets/ReactArticle/ReactArticle'
import Main from './assets/ReactArticle/Main'
import Carousel from './assets/ReactArticle/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
              <ReactArticle />
              <Main />
              <Carousel />
    </div>
  )
}

export default App
