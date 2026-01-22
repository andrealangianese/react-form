import { useState } from 'react'
import Articles from './components/ArticlesList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Articles />
    </>
  )
}

export default App
