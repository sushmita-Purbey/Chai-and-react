import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Sushmita",
    age:22
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-800 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Sushmita" btnText="visit me" />
      <Card username="chaiaurcode"  btnText="click me"/>
      
      
      </>
  )
}

export default App
