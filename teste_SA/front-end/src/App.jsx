import { useState } from 'react'
import './App.css'

function App() {
 
  const [userName, setUserName] = useState("")

  function handleClick (e) {

    console.log({userName})

  }

  function handleChange (e) {

    setUserName(e.target.value)
    console.log({userName})


  }

  return (
    <>
     <div>

      <input type="text" value={userName} onChange={handleChange}/>
      <button onClick={handleClick}>CADASTRAR</button>

     </div>

    </>
  )
}

export default App
