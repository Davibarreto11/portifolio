import React from 'react'

interface SectionProps {
  children: any
  level: 'home' | 'about' | 'barSkill' | 'contacts'
}

const Section: React.FC<SectionProps> = ({ children, level }) => {
  return (
    <div
      id={level}
      className={`flex justify-center ${level === 'barSkill' ? 'bg-[#81b398]' : ''}`}
      style={{ minHeight: '100vh' }}
    >
      <div className='flex' style={{ width: '80%' }}>
        {children}
      </div>
    </div>
  )
}

export default Section
