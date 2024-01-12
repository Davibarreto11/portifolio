import React from 'react'
import { FiAlignRight } from 'react-icons/fi'

export const NavBar: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <h1>
        <a href='#Home'>Davi Artur</a>
      </h1>
      <FiAlignRight size={25} color='#F1FAEE'/>
      <ul>
        <li><a href='#Home'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Projects'>Projects</a></li>
        <li><a href='#Contacts'>Contacts</a></li>
      </ul>
    </div>
  )
}
