import React from 'react'

import { FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi'

export const Footer: React.FC = () => {
  return (
    <div className='bg-[#457B9D] flex flex-col items-center'>
      <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl mt-4'>Davi Artur</h3>
      <strong className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl mt-2'>There is the dream, there is the way</strong>
      <div className='w-4/5 flex items-center justify-evenly mt-2 mb-2 sm:justify-center'>
        <FiLinkedin className='w-1/12 sm:mr-6' size={50}/>
        <FiInstagram className='w-1/12 sm:mr-6' size={50}/>
        <FiGithub className='w-1/12 sm:mr-6' size={50}/>
      </div>
    </div>
  )
}
