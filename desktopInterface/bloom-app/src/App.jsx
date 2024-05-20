import { useState } from 'react'
import './App.css'
import Moon from './assets/new-moon.svg'

function App() {

  return (
    <>
    <div className="grid grid-cols-2 h-screen">
        <div className="flex flex-col justify-center items-start p-10">
          <div className="mb-4"><h1 className="font-bold">BLOOM</h1></div>
          <div><p className="font-medium text-base">Save your knowledge. Share them too.</p></div>
        </div>

        <div className="flex justify-center items-center p-10">
          <img src={Moon} alt="Moon photo" className="max-w-full h-auto" />
        </div>
    </div>
    </>
  )
}

export default App
