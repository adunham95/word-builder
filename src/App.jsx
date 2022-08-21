import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { registerSW } from 'virtual:pwa-register'
import './App.css'
import { RealodPrompt } from './Components/ReloadPrompt/RealodPrompt'
import { WordBoard } from './Components/WordBoard/WordBoard'
import Builder from './Pages/builder'

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
      </Routes>
      {/* <RealodPrompt /> */}
    </div>
  )
}

export default App
