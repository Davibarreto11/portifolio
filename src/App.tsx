import React from 'react'

import './styles/global.css'

import { NavBar } from './components/NavBar'

const App: React.FC = () => {
  return (
    <div style={{ paddingRight: '8%', paddingLeft: '8%' }}>
      <NavBar />
    </div>
  )
}

export default App
