import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return(
        <div className='grid lg:grid-cols-2 md:grid-cols-1'>
        <div className='ml-[10%] mt-16'>
           <img src='/images/ummi (1).jpg.jpg' alt='my-pic' width={300} height={300} className='rounded-full ml-[40%]'/>
           </div>
           <div>
           <h2 className='text-6xl text-left gap-y-2 ml-[20%] font-bold text-cyan-600 mt-24'>Hello <br /> I am <br /> Umaima Saleem</h2>
           <div className='ml-[10%] flex gap-14 mt-12'>
            <button className='text-xl p-3 border-2 border-cyan-600 rounded-2xl'><Link href='/about'>About Me</Link></button>
            <button className='text-xl p-3 border-2 border-cyan-600 rounded-2xl'><Link href='/contact'>Contact Me</Link></button>
           </div>
           </div>
        </div>
    )
}

export default Hero