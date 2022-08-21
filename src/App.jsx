import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { registerSW } from 'virtual:pwa-register'
import './App.scss'
import { WordBoard } from './Components/WordBoard/WordBoard'
import Builder from './Pages/builder'
import Letters from './Pages/letters'

function App() {
  registerSW({ immediate: true })

  const updateSW = registerSW({
    onNeedRefresh() {},
    onOfflineReady() {},
  })

  console.log(updateSW)
  return (
    <div>
      <Routes>
        <Route path="/" element={<WordBoard />} />
        <Route path="builder" element={<Builder />} />
        <Route path="letters" element={<Letters />} />
      </Routes>
      {/* <RealodPrompt /> */}
    </div>
  )
}

export default App
