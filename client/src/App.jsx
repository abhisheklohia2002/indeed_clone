import { useState } from 'react'

import './App.css'
import AllRoute from './route/AllRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<AllRoute/>
    </>
  )
}

export default App
