import React from 'react';
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';

const Header = () => {

    // rendering the header component here
    return (
        <header className='bg-white h-20 shadow-REST-shadow'>
            <div className='w-[90%] h-full flex justify-between items-center mx-auto text-REST-very-dark-blue-text'>
                <h1 className='text-2xl font-extrabold'>Where in the world?</h1>
                <button className='flex items-center hover:opacity-70 duration-300 font-semibold'>
                    <MdOutlineDarkMode className='mr-2'/>
                    Dark Mode
                </button>
            </div>
        </header>
    );
};

export default Header;