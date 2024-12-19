import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImNpm } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";


const About = () => {
    return(
        <div>
          <h2 className='mt-24 text-center text-4xl font-bold underline text-cyan-600'>!!About Me!!</h2>
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="hero"
      src="/images/ummi (1).jpg.jpg"
      width={400}
      height={300}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium hover:text-white text-cyan-600">
        My-Self
      </h1>
      <p className="mb-8 leading-relaxed text-white">
        My name is <b>UMAIMA</b>. I completed matriculation in Computer Science
        and Intermediate in Pre-Engineering. Now i'm on the way to learn <b className='text-purple-500'>Artificial Intelligence</b>. I recently completed my few steps of learning typescript, HTML, CSS Javascript to become a <b className='text-purple-500'>Full-Stack Developer</b>.
        <br />
        I Believe: "Exploring the future one algorithm at a time, because AI is the
        language of tomorrow".
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-[40px] text-blue-400 border-0 py-2 px-6 rounded text-lg">
        <FaLinkedin />
        </button>
        <button className="inline-flex text-[40px] text-white border-0 py-2 px-6 rounded text-lg">
        <FaGithub />
        </button>
        <button className="inline-flex text-[40px] text-red-500 border-0 py-2 px-6 rounded text-lg">
        <ImNpm />
        </button>
        <button className="inline-flex text-[40px] text-orange-500 border-0 py-2 px-6 rounded text-lg">
        <FaInstagram />

        </button>
      </div>
    </div>
  </div>
</section>
<Skills/>
        </div>
    )
}

export default About

export const Skills = () => {
    return(
        <div>
            <h2 className='mt-18 mb-24 text-center text-4xl font-bold underline text-cyan-600'>My Skills</h2>
<ul className=''>
  <li className='mb-3 text-2xl text-white ml-16'>HTML</li><div className='w-[80%] ml-16 mb-3 h-4 bg-green-500 rounded-2xl'></div>
  <li className='mb-3 text-2xl text-white ml-16'>CSS</li><div className='w-[40%] ml-16 mb-3 h-4 bg-red-500 rounded-2xl'></div>
  <li className='mb-3 text-2xl text-white ml-16'>Javascript</li><div className='w-[85%] ml-16 mb-3 h-4 bg-green-500 rounded-2xl'></div>
  <li className='mb-3 text-2xl text-white ml-16'>Typescript</li><div className='w-[95%] ml-16 mb-3 h-4 bg-blue-700 rounded-2xl'></div>
  <li className='mb-3 text-2xl text-white ml-16'>React</li><div className='w-[30%] ml-16 mb-3 h-4 bg-red-500 rounded-2xl'></div>
  <li className='mb-3 text-2xl text-white ml-16'>Next.js</li><div className='w-[50%] ml-16 mb-3 h-4 bg-green-500 rounded-2xl'></div>
</ul>
        </div>
    )
}