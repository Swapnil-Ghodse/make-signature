import { useEffect, useState } from 'react'
import Canvas from './components/Canvas'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      
      <Canvas />
      <button className="btn btn-outline btn-error">Clear</button>
    </>
  )
}

export default App
