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
        <div name='skills' className='bg-[#a3c7ed] dark:bg-[#121212]'>
            {/* Container  */}
            <div className='max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='mt-10'>
                    <p className='text-4xl text-[#5C44CE] font-bold inline dark:text-[#bb85fc]'> Experience </p>
                    <p className='py-4 text-[#202b4b] dark:text-gray-400'> These are the technologies I've worked with </p>
                </div>
                <div className='w-full grid grid-col-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='bg-[#c8ddf5] h-[200px] rounded-md shadow-sm shadow-[#344c99] hover:scale-110 duration-500
                                 dark:bg-[#121212] dark:shadow-none'>
                        <img className='w-20 mx-auto mt-[45px]' src={HTML} alt='html' />
                        <p className='my-4 dark:text-white'> HTML </p>
                    </div>
                    <div className='bg-[#c8ddf5] shadow-sm rounded-md shadow-[#344c99] hover:scale-110 duration-500
                                dark:bg-[#121212] dark:shadow-none'>        
                        <img className='w-20 mx-auto mt-[45px]' src={CSS} alt='css' />
                        <p className='my-4 dark:text-white'> CSS </p>
                    </div>
                    <div className='bg-[#c8ddf5] shadow-sm rounded-md shadow-[#344c99] hover:scale-110 duration-500
                                dark:bg-[#121212] dark:shadow-none'>
                        <img className='w-20 mx-auto mt-[45px]' src={Javascript} alt='javascript' />
                        <p className='my-4 dark:text-white'> JavaScript </p>
                    </div>
                    <div className='bg-[#c8ddf5] shadow-sm rounded-md shadow-[#3 dark:text-white4c99] hover:scale-110 duration-500
                                dark:bg-[#121212] dark:shadow-none'>
                        <img className='w-20 mx-auto mt-[45px]' src={Jquery} alt='jquery' />
                        <p className='my-4 dark:text-white'> JQuery </p>
                    </div>
                    <div className='bg-[#c8ddf5] shadow-sm rounded-md shadow-[#344c99] hover:scale-110 duration-500
                                dark:bg-[#121212] dark:shadow-none'>
                        <img className='w-20 mx-auto mt-[45px]' src={ReactLogo} alt='react' />
                        <p className='my-4 dark:text-white'> React </p>
                    </div>
                    <div className='bg-[#c8ddf5] shadow-sm rounded-md shadow-[#344c99] hover:scale-110 duration-500
                                dark:bg-[#121212] dark:shadow-none'>
                        <img className='w-20 mx-auto mt-[45px]' src={Laravel} alt='laravel' />
                        <p className='my-4 dark:text-white'> Laravel </p>
                    </div>
                    <div className='bg-[#c8ddf5] shadow-sm rounded-md shadow-[#344c99] hover:scale-110 duration-500
                                dark:bg-[#121212] dark:shadow-none'>
                        <img className='w-20 mx-auto mt-[45px]' src={Tailwind} alt='tailwind' />
                        <p className='my-4 dark:text-white'> Tailwind </p>
                    </div>
                    <div className='bg-[#c8ddf5] shadow-sm rounded-md shadow-[#344c99] hover:scale-110 duration-500
                                dark:bg-[#121212] dark:shadow-none'>
                        <img className='w-20 mx-auto mt-[45px]' src={Github} alt='github' />
                        <p className='my-4 dark:text-white'> GitHub </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills