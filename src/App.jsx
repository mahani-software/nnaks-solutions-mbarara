import { useState } from 'react'
import ElectronicsShop from "./electronicsShop"

function App() {
  const [count, setCount] = useState(0)

  return (
    <ElectronicsShop/>
  )
}

export default App
