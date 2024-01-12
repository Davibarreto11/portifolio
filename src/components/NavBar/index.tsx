import React, { useState } from 'react'

export const NavBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const buttonClasses = isVisible
    ? 'hidden w-full md:flex md:items-center md:w-auto bg-none'
    : 'w-full md:flex md:items-center md:w-auto bg-[#457B9D] md:bg-opacity-0'

  return (
    <header>
      <nav className='w-full flex items-center justify-between flex-wrap pt-6'>
        <h1 className='text-lg text-[#F1FAEE] ml-14 md:text-2xl xl:text-3xl 2xl:text-4xl'>
          <a href='#Home'>Davi Artur</a>
        </h1>
        <svg
          xmlns='https://www.w3.org/2000/svg'
          className='
          block
          mr-14
          h-6
          w-6
          cursor-pointer
          md:hidden'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          onClick={() => { setIsVisible(!isVisible) }}
        >
          <path d='M4 6h16M4 12h16M4 18h16'></path>
        </svg>
        <button className={buttonClasses}>
          <ul className='md:flex d:justify-between text-sm text-[#F1FAEE] md:text-xl xl:text-2xl 2xl:text-3xl md:mr-24'>
            <li>
              <a className='block py-2 md:p-4 hover:translate-y-[-5px]' href='#Home'>Home</a>
            </li>
            <li>
              <a className='block py-2 md:p-4 hover:translate-y-[-5px]' href='#About'>About</a>
            </li>
            <li>
              <a className='block py-2 md:p-4 hover:translate-y-[-5px]' href='#Projects'>Projects</a>
            </li>
            <li>
              <a className='block py-2 md:p-4 hover:translate-y-[-5px]' href='#Contacts'>Contacts</a>
            </li>
          </ul>
        </button>
      </nav>
    </header>
  )
}
