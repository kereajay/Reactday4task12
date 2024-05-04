import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Card" 
import { Data } from "./Data";

function App() {
 

  return (
    <>
    {
      Data.map((item ,idx)=>{
        return <Card key={idx} metaData={item} />
      })
    }

    
    </>
  )
}

export default App
