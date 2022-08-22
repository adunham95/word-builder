import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { registerSW } from 'virtual:pwa-register'
import './App.scss'
import Header from './Components/Header/Header'
import { WordBoard } from './Components/WordBoard/WordBoard'
import { useQuery } from './Functions/Hooks/useQuery'
import Builder from './Pages/builder'
import Letters from './Pages/letters'
import Numbers from './Pages/numbers'

function App() {
  const query = useQuery()
  let showBanner = query.banner ? false : true
  registerSW({ immediate: true })

  const updateSW = registerSW({
    onNeedRefresh() {},
    onOfflineReady() {},
  })

  console.log(updateSW)

  return (
    <div>
      {showBanner ? <Header /> : ''}
      <Routes>
        <Route path="/" element={<WordBoard />} />
        <Route path="builder" element={<Builder />} />
        <Route path="letters" element={<Letters />} />
        <Route path="numbers" element={<Numbers />} />
      </Routes>
      {/* <RealodPrompt /> */}
    </div>
  )
}

export default App
