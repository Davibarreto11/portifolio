import React from 'react'

import './styles/global.css'

import Section from './components/Section'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { BarSkill } from './components/BarSkill'
import { AboutMe } from './components/AboutMe'
import { Projects } from './components/Projects'
import { Contacts } from './components/Contacts'
import { Footer } from './components/Footer'

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
      <Section level='aboutMe'>
        <AboutMe />
      </Section>
      <Section level='projects'>
        <Projects />
      </Section>
      <Section level='contacts'>
        <Contacts/>
      </Section>
      <Footer />
    </div>
  )
}

export default App
