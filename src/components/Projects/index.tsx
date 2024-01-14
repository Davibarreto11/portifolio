import React from 'react'

import Button from '../Button'

export const Projects: React.FC = () => {
  const inverted = 'w-full flex flex-col sm:w-1/2 sm:order-last'

  return (
    <div className='
    h-full flex flex-col items-center'>
      <div className='
        sticky
        before:absolute
        before:h-8
        before:w-1
        before:bg-[#E63946]
        before:left-[45px]
        before:top-[60px]
        sm:before:left-[55px]
        lg:before:left-[65px]
        xl:before:h-16
        xl:before:w-2
        xl:before:top-[100px]
        xl:before:left-[130px]
        '
        >
        <h2 className='font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-7xl 2xl:text-7xl mt-4 sm:mt-0'>Projects</h2>
      </div>
      <div className='flex flex-col items-center'>
        <div className='w-full flex flex-col items-center sm:flex-row sm:justify-between sm:pt-36 pt-24'>
          <div className='w-full flex flex-col sm:w-1/2'>
            <div className='flex flex-col'>
              <h3 className='text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl pb-6'>Workmed</h3>
              <p className='text-base lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mt-6'>
                A expressão Lorem ipsum em design gráfico e editoração é um texto
                padrão em latim utilizado os espaços de texto em publicações para testar
              </p>
            </div>
            <div className='flex justify-between items-center mt-6'>
              <Button type='red' label='View GitHub'/>
              <Button type='none' label='View Project'/>
            </div>
          </div>
          <div className='w-full sm:w-5/12 mt-4'>
            <img className='w-full' src="data:image/jpeg;base64,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" alt="" />
          </div>
        </div>

        <div className='w-full flex flex-col items-center sm:flex-row sm:justify-between sm:pt-36 pt-24'>
          <div className={inverted}>
            <div className='flex flex-col'>
              <h3 className='text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl pb-6'>Workmed</h3>
              <p className='text-base lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mt-6'>
                A expressão Lorem ipsum em design gráfico e editoração é um texto
                padrão em latim utilizado os espaços de texto em publicações para testar
              </p>
            </div>
            <div className='flex justify-between items-center mt-6'>
              <Button type='red' label='View GitHub'/>
              <Button type='none' label='View Project'/>
            </div>
          </div>
          <div className='w-full sm:w-5/12 mt-4'>
            <img className='w-full' src="data:image/jpeg;base64,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" alt="" />
          </div>
        </div>

        <div className='w-full flex flex-col items-center sm:flex-row sm:justify-between sm:pt-36 pt-24'>
          <div className='w-full flex flex-col sm:w-1/2'>
            <div className='flex flex-col'>
              <h3 className='text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl pb-6'>Workmed</h3>
              <p className='text-base lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mt-6'>
                A expressão Lorem ipsum em design gráfico e editoração é um texto
                padrão em latim utilizado os espaços de texto em publicações para testar
              </p>
            </div>
            <div className='flex justify-between items-center mt-6'>
              <Button type='red' label='View GitHub'/>
              <Button type='none' label='View Project'/>
            </div>
          </div>
          <div className='w-full sm:w-5/12 mt-4'>
            <img className='w-full' src="data:image/jpeg;base64,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" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}