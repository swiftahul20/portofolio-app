import React from 'react'

import CSS from '../assets/css.png';
import Github from '../assets/github.png';
import HTML from '../assets/html.png';
import Javascript from '../assets/javascript.png';
import ReactLogo from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Jquery from '../assets/jquery.png';
import Laravel from '../assets/laravel.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300'>
        {/* Container  */}
        <div className='max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-[#6B7FD7]'> Experience </p>
                <p className='py-4'> These are the technologies I've worked with </p>
            </div>
            <div className='w-full grid grid-col-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='html' />
                    <p className='my-4'> HTML </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='css' />
                    <p className='my-4'> CSS </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt='javascript' />
                    <p className='my-4'> JavaScript </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Jquery} alt='jquery' />
                    <p className='my-4'> JQuery </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactLogo} alt='react' />
                    <p className='my-4'> React </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Laravel} alt='laravel' />
                    <p className='my-4'> Laravel </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt='tailwind' />
                    <p className='my-4'> Tailwind </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt='github' />
                    <p className='my-4'> GitHub </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills