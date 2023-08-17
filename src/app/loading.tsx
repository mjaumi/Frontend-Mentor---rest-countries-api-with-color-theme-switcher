import React from 'react';
import { Bars } from 'react-loading-icons'

const Loading = () => {

    // rendering the loading component here
    return (
        <main className='bg-REST-very-light-gray dark:bg-REST-very-dark-blue h-screen w-full flex justify-center items-center overflow-hidden'>
            <Bars fill='#2b3945' className='h-20 w-20'/>
        </main>
    );
};

export default Loading;