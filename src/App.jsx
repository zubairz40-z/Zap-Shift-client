import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Toaster position="top-right" reverseOrder={false} />
      {/* Your routes/components */}
    </>
     
  )
}

export default App
