'use client'

import React, { useContext, useState } from 'react';
import { BiSolidChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { FilterContext } from '@/utils/FilterContext';

const SearchFilterBar = () => {
    // integration of react hooks here
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [filterValue, setFilterValue] = useState<string>('Filter by Region');

    // integration of context API here
    const filterContext = useContext(FilterContext); 

    // handler function to get region for filtering purpose
    const filterByRegionHandler = (filterText: string): void => {
        setFilterValue(filterText);
        setShowOptions(false);
        filterContext?.setFilter(filterText);
    }

    // rendering search & filter bar section component here
    return (
        <section className='w-[90%] mx-auto flex justify-between py-10'>
            <div className='bg-white dark:bg-REST-dark-blue flex items-center py-5 px-10 rounded-md shadow-REST-shadow w-2/5'>
                <AiOutlineSearch className='fill-REST-dark-gray dark:fill-white h-6 w-6'/>
                <input className='outline-none bg-transparent w-full pl-8 text-REST-dark-gray dark:text-white font-semibold' type='text' placeholder='Search for a country...'/>
            </div>
            <div onClick={() => setShowOptions(!showOptions)} className='relative bg-white dark:bg-REST-dark-blue flex items-center justify-between py-5 px-5 rounded-md shadow-REST-shadow w-[200px] hover:cursor-pointer'>
                <p className='font-semibold capitalize'>{filterValue}</p>
                <BiSolidChevronDown className={`${showOptions && 'rotate-180'} duration-300`}/>
                <div className={`absolute top-full left-0 capitalize bg-white dark:bg-REST-dark-blue w-full rounded-md shadow-REST-shadow mt-1 p-4 font-semibold origin-top ${showOptions ? 'scale-y-100' : 'scale-y-0'} duration-300`}>
                    <p onClick={() => filterByRegionHandler('africa')} className='hover:cursor-pointer hover:opacity-50 duration-300'>africa</p>
                    <p onClick={() => filterByRegionHandler('americas')} className='mt-1 hover:cursor-pointer hover:opacity-50 duration-300'>americas</p>
                    <p onClick={() => filterByRegionHandler('asia')} className='mt-1 hover:cursor-pointer hover:opacity-50 duration-300'>asia</p>
                    <p onClick={() => filterByRegionHandler('europe')} className='mt-1 hover:cursor-pointer hover:opacity-50 duration-300'>europe</p>
                    <p onClick={() => filterByRegionHandler('oceania')} className='mt-1 hover:cursor-pointer hover:opacity-50 duration-300'>oceania</p>
                </div>
            </div>
        </section>
    );
};

export default SearchFilterBar;