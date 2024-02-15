import React from 'react'

interface SectionProps {
  children: any
  level: 'home' | 'aboutMe' | 'projects' | 'barSkill' | 'contacts'
}

const Section: React.FC<SectionProps> = ({ children, level }) => {
  return (
    <div
      id={level}
      className={`flex justify-center min-h-screen mt-4 ${level === 'barSkill' ? 'bg-[#457B9D] min-h-[10vh]' : ''}`}
    >
      <div className='flex' style={{ width: '80%' }}>
        {children}
      </div>
    </div>
  )
}

export default Section
