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
                Aplicatico para gerenciar o sistema cirurgico de qualquer hospital,
                registro e listagem de médicos, pacientes, salas e cirugias
              </p>
            </div>
            <div className='flex justify-between items-center mt-6'>
              <Button href='https://github.com/Davibarreto11/workMed' type='red' label='View GitHub'/>
              <Button href='/' type='none' label='View Project'/>
            </div>
          </div>
          <div className='w-full sm:w-5/12 mt-4'>
            <img className='w-full' src="https://github-production-user-asset-6210df.s3.amazonaws.com/102602408/254679378-4a72eea8-ba05-4216-b5ed-33add3ff8491.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240115T193224Z&X-Amz-Expires=300&X-Amz-Signature=82ebdd0587b0676cee8f7fcb13f420a84c8652cf02585ab7c8a650771c3ead53&X-Amz-SignedHeaders=host&actor_id=102602408&key_id=0&repo_id=653707787" alt="Work Med" />
          </div>
        </div>

        <div className='w-full flex flex-col items-center sm:flex-row sm:justify-between sm:pt-36 pt-24'>
          <div className={inverted}>
            <div className='flex flex-col'>
              <h3 className='text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl pb-6'>App GoBarber</h3>
              <p className='text-base lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mt-6'>
                Aplcação para cabeleireiros acompanherem seus clientes diários e clientes que desejem agendar
                cortes de cabelo com barbeiros cadastrados
              </p>
            </div>
            <div className='flex justify-between items-center mt-6'>
              <Button href='https://github.com/Davibarreto11/appgobarber' type='red' label='View GitHub'/>
              <Button href='/' type='none' label='View Project'/>
            </div>
          </div>
          <div className='w-full flex flex-row ml-20 sm:w-5/12 mt-4'>
            <img className='w-1/3' src="" alt="Mobile GoBarber" />
            <img className='w-1/3' src="" alt="Mobile GoBarber" />
          </div>
        </div>

        <div className='w-full flex flex-col items-center sm:flex-row sm:justify-between sm:pt-36 pt-24'>
          <div className='w-full flex flex-col sm:w-1/2'>
            <div className='flex flex-col'>
              <h3 className='text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl pb-6'>Pokedex</h3>
              <p className='text-base lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mt-6'>
                Pokedex consumindo pokeapi.co usando React e uma funcionalidade de  filtrar para encontrar seu pokemon preferido mais rápido
              </p>
            </div>
            <div className='flex justify-between items-center mt-6'>
              <Button href='/' type='red' label='View GitHub'/>
              <Button href='/' type='none' label='View Project'/>
            </div>
          </div>
          <div className='w-full flex flex-row ml-20 sm:w-5/12 mt-4'>
            <img className='w-1/3 mr-2' src="" alt="Pokedex" />
            <img className='w-1/3 mr-6' src="" alt="Pokedex" />
          </div>
        </div>

        <div className='w-full flex flex-col items-center sm:flex-row sm:justify-between sm:pt-36 pt-24'>
          <div className={inverted}>
            <div className='flex flex-col'>
              <h3 className='text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl pb-6'>Rotgen</h3>
              <p className='text-base lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mt-6'>
                WebSite responsivo feito com freelance para uma empresa que fui contratado
              </p>
            </div>
            <div className='flex justify-between items-center mt-6'>
              <Button href='https://github.com/Davibarreto11/rotgen' type='red' label='View GitHub'/>
              <Button href='/' type='none' label='View Project'/>
            </div>
          </div>
          <div className='w-full flex flex-row sm:w-5/12 mt-4'>
            <img className='' src="https://private-user-images.githubusercontent.com/102602408/296860048-690266df-1434-480d-9f52-bc4ee8005d94.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDUzNDkyNjksIm5iZiI6MTcwNTM0ODk2OSwicGF0aCI6Ii8xMDI2MDI0MDgvMjk2ODYwMDQ4LTY5MDI2NmRmLTE0MzQtNDgwZC05ZjUyLWJjNGVlODAwNWQ5NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDExNVQyMDAyNDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMDUyODRkNTA4YTQxYmNkOGM3MmQxOTRiNjhhYjNkMDNjMzU4MjhiZDY1YWMwYzAwODllZGM2NGNmYWUwYjdhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.MZI-TsGWpS8ZWDgbtWZlViCx02Onu04tm-8q3a05O8c" alt="Pokedex" />
          </div>
        </div>
      </div>
    </div>
  )
}
