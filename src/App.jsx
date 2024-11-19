import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const App = () => {
  return (
    <>
      <Sidebar/>
      <Main />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
