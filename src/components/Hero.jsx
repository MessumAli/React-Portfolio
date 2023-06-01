import React from 'react'
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import picture from '../assets/picture.png'

export const Hero = () => {

  const SOCIAL = [
    {
        id: 1,
        link: 'https://www.linkedin.com/in/messumali/',
        icon: <FaLinkedin />
    },
    {
        id: 2,
        link: 'https://github.com/MessumAli',
        icon: <FaGithub />
    }
  ]

  window.addEventListener('scroll', function () {
    const downArrow = document.querySelector(".down-arrow")
    if (this.scrollY >=90) downArrow.classList.add("hide-down-arrow")
    else downArrow.classList.remove("hide-down-arrow")
  })

  return (
    <section className='min-h-screen flex flex-col justify-start items-center p-5 text-justify'>
        <h2 className='text-5xl text-rose-600 uppercase font-bold text-center'>Messum Ali Mehdi</h2>
        <h3 className='py-3 text-2xl text-center'>MERN Stack Developer</h3>
        <p className='mt-6 max-w-3xl font-light text-gray-500'>Highly motivated MERN Stack Developer with a robust foundation in web development and a keen dedication to crafting innovative and user-centric applications. Demonstrates exceptional problem-solving acumen, leveraging a meticulous approach to consistently deliver impeccable code. Maintains an unwavering commitment to remaining up-to-date with the latest industry trends. Exhibits excellent collaboration and communication skills, adept at thriving in both autonomous and team-oriented environments. Actively seeking an opportunity to contribute to a dynamic development team, further honing technical expertise while making substantial contributions to organizational growth and success.</p>
        <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
            {SOCIAL.map(({ id, link, icon }) => { 
                return <a href={link} key={id} target='_blank' rel = 'noopener noreferrer' className='cursor-pointer dustation-300 hover:text-rose-600'>{icon}</a>
            })}
            </div>
            <div>
                <img src={picture} alt="avatar" className='w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 to-teal-500 rounded-xl pt-5' />
                <a href="/messumalimehdi-resume.pdf" download={true} className='flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg'>Resume</a>
            </div>
            <div className='mt-10 down-arrow'>
                <FaArrowDown className='text-gray-400 text-2xl animate-bounce'/>
            </div>
    </section>
  )
}
