import React from 'react'
import ProjectGrid from './projectGrid'
import Image from 'next/image'

const Project = () => {
  return (
    <section
      id='project'
      className='relative z-10 flex w-full flex-col items-center justify-center bg-[#fff] bg-cover py-16 md:py-20'
    >
      <Image
        src="/blurbg.jpg"
        alt="bg"
        width={1920}
        height={1080}
        className='absolute left-0 top-0 bg-center w-full h-full bg-cover'
      />
      <ProjectGrid />
    </section>
  )
}

export default Project