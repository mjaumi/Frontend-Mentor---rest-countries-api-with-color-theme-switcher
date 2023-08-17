'use client'

import { ThemeContext } from '@/utils/ThemeContext';
import React, { useContext } from 'react';
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';

const Header = () => {
    // integration of react hooks here
    const theme = useContext(ThemeContext);

    // handler function to toggle between dark & light theme
    const toggleThemeHandler = (themeText: string) : void => {
        theme?.setTheme(themeText);
    }

    // rendering the header component here
    return (
        <header className='sticky top-0 bg-white dark:bg-REST-dark-blue h-20 shadow-REST-shadow z-[999]'>
            <div className='w-[90%] h-full flex justify-between items-center mx-auto text-REST-very-dark-blue-text dark:text-white'>
                <h1 className='text-2xl font-extrabold'>Where in the world?</h1>
                <button onClick={() => theme?.theme === 'light' ? toggleThemeHandler('dark') : toggleThemeHandler('light')} className='flex items-center hover:opacity-70 duration-300 font-semibold'>
                    {
                        theme?.theme === 'dark' ?
                        <MdDarkMode className='mr-2'/>
                        :
                        <MdOutlineDarkMode className='mr-2'/>
                    }
                    Dark Mode
                </button>
            </div>
        </header>
    );
};

export default Header;