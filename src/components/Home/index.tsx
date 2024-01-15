import React from 'react'
import Button from '../Button'

import Profile from '../../assets/profile-pic.png'

export const Home: React.FC = () => {
  return (
    <div className='w-full flex flex-col items-center md:flex-row md:justify-between'>
      <div className='flex flex-col items-center md:items-start' >
        <h2 className='text-4xl md:text-5xl lg:text-7xl xl:text-9xl 2xl:text-[150px] mt-6'>Hello</h2>
          <p
          className="
          text-2xl
          md:text-3xl
          lg:text-5xl
          xl:text-7xl
          2xl:text-[102px]
          sticky
          before:absolute
          before:h-1
          before:w-24
          md:ml-14
          md:before:w-56
          2xl:before:w-64
          before:bg-[#E63946]
          before:left-[-2px]
          md:before:left-[-225px]
          2xl:before:left-[-260px]
          before:top-10
          md:before:top-[24px]
          lg:before:top-[36px]
          xl:before:top-[56px]
          2xl:before:top-[80px]
          mt-2
          mb-6
          "
          >
            I`m Davi
          </p>
        <h3 className='text-3xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-[102px]'>Fullstack developer</h3>

        <div className='flex items-center'>
          <Button href='' type='red' label='My projects'/>
          <Button href='' type='none' label='My resume'/>
        </div>
      </div>
      <div className='w-72 md:w-1/3 2xl: mt-6'>
        <img src={Profile} alt='photo profile' />
      </div>
    </div>
  )
}
