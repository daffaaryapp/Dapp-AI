import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <>
      <Sidebar/>
      <Main />
      <Analytics />
    </>
  )
}

export default App
