import { useState } from 'react'
import Articles from './components/Articles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Articles />
    </>
  )
}

export default App
