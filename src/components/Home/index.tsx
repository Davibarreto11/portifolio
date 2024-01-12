import React from 'react'
import Button from '../button'

import Profile from '../../assets/profile-pic.png'

export const Home: React.FC = () => {
  return (
    <div className='w-full flex flex-col items-center md:flex-row md:justify-between'>
      <div className='flex flex-col items-center md:items-start' >
        <h2 className='text-4xl md:text-5xl lg:text-7xl xl:text-9xl mt-6'>Hello</h2>
          <p
          className="
          text-2xl
          md:text-3xl
          lg:text-5xl
          xl:text-7xl
          sticky
          before:absolute
          before:h-1
          before:w-24
          md:ml-14
          md:before:w-56
          before:bg-[#E63946]
          before:left-[-2px]
          md:before:left-[-225px]
          before:top-10
          md:before:top-[24px]
          lg:before:top-[36px]
          xl:before:top-[56px]
          mt-2
          mb-6
          "
          >
            I`m Davi
          </p>
        <h3 className='text-3xl md:text-3xl lg:text-5xl xl:text-7xl'>Fullstack developer</h3>

        <div className='flex items-center'>
          <Button type='red' label='My projects'/>
          <Button type='none' label='My resume'/>
        </div>
      </div>
      <div className='w-72 md:2/3 mt-6'>
        <img src={Profile} alt='photo profile' />
      </div>
    </div>
  )
}
