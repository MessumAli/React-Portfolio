import React from 'react'
import { Section } from './common/Section'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import certificate from '../assets/certificate.png'

export const Certificates = () => {

  const certificates = [
    {
      id: 1,
      image: certificate,
      title: 'Meta : Introduction to Front-End Development',
      link: 'https://coursera.org/share/b5cdefd5aa6769ba550d7f8b3ef15261',
    },
    {
      id: 2,
      image: certificate,
      title: 'Meta : Programming with JavaScript',
      link: 'https://coursera.org/share/97915542e45d6719317994e8e3536411',
    },
    {
      id: 3,
      image: certificate,
      title: 'Meta : Version Control',
      link: 'https://coursera.org/share/17efb9c21551060fb1f11d4911499865',
    },
    {
      id: 4,
      image: certificate,
      title: 'Meta : HTML and CSS in depth',
      link: 'https://coursera.org/share/9ed56d65da6f501145445640484a9a6c',
    },
    {
      id: 5,
      image: certificate,
      title: 'Meta : React Basics',
      link: 'https://coursera.org/share/b5d57c5c7affbf9ff1277b0511f4dbbb',
    },
    {
      id: 6,
      image: certificate,
      title: 'Meta : Advanced React',
      link: 'https://coursera.org/share/a6609f2233f9500a40e46943cd17a65f',
    },
  ]

  return (
    <Section title='Certificates'>
      <div className='grid gap-8 lg:gap-14 lg:grid-cols-2 max-w-sm md:max-w-lg lg:max-w-3xl'>
        {certificates.map(({ id, image, title, link }) => {
          return <div key={id} className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden'>
            <img src={image} alt={title} className='w-2/3'/>
          <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
          <h2 className='text-sm md:text-xl lg:text-sm'>{title}</h2>
          <a href={link} target='_blank' rel='noopener noreferrer' className='text-2xl cursor-pointer duration-150 hover:scale-110 hover:text-rose-600'>
            <FaExternalLinkSquareAlt/>
            </a>
          </div>
          </div>
        })}
      </div>
    </Section>
  )
}
