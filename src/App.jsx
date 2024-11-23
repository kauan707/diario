import { useState } from 'react'
import Login from './components/Login'
import Diario from './components/Diario'

function App() {
  const [autorizado, setAutorizado] = useState(false)

  return (
    <>
      {autorizado ?
        <Diario />
      :
        <Login />
      }
    </>
  )
}

export default App
