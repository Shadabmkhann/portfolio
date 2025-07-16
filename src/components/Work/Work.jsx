import React from 'react'
import { projects } from '../../constants'

const Work = () => {
  return (
   <section 
   id='work'
   classNam='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'
   >
{/*Section Title*/}
<div className='text-center mb-16'>
  <h2  className='text-4xl font-bold text-white'>
    PROJECTS
  </h2>
  <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
  <p className='text-gray-400 mt-4 text-lg font-semibold'>A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>
</div>
{/* Project Grid */}
<div className='grid gap-12 grid-cols-1 md:grid-cols lg:grid-cols-3'>
  {projects.map((projects) => (
    <div
    key={projects.id}
    className='border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300'
    >
      <div>
        <img src={projects.image} alt= {projects.title} className='w-full h-48 object-cover rounded-xl' />
      </div>
    </div>
  ))}
</div>
   </section>
  )
}

export default Work