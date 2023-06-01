import React from 'react'
import { Section } from './common/Section'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'
import p9 from '../assets/p9.png'

export const Skills = () => {

  const skills = [
    {
      id: 1,
      image: p1,
      title: 'HTML',
    },
    {
      id: 2,
      image: p2,
      title: 'CSS',
    },
    {
      id: 3,
      image: p3,
      title: 'Tailwind CSS',
    },
    {
      id: 4,
      image: p4,
      title: 'JavaScript',
    },
    {
      id: 5,
      image: p5,
      title: 'React JS',
    },
    {
      id: 6,
      image: p6,
      title: 'Node JS',
    },
    {
      id: 7,
      image: p7,
      title: 'Mongo DB',
    },
    {
      id: 8,
      image: p8,
      title: 'Express JS',
    },
    {
      id: 9,
      image: p9,
      title: 'Mongoose ODM',
    },
  ]

  return (
    <Section title="Skills">
      <div className='grid gap-10 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:max-w-4xl md:max-w-xl max-w-md'>
        {skills.map(({ id, image, title }) => (
          <div key={id} className='flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'>
            <img src={image} alt={title} className='w-36 h-36 md:w-44 md:h-44 object-contain'/>
            <h3 className='mt-5 text-base'>{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  )
}
