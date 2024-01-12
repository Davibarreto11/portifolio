import React from 'react'

import './styles/global.css'

import Section from './components/Section'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { BarSkill } from './components/BarSkill'

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Section level='home'>
        <Home />
      </Section>
      <Section level='barSkill'>
        <BarSkill />
      </Section>
    </div>
  )
}

export default App
