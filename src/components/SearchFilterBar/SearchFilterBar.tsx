import React, { useState } from 'react';
import { BiSolidChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchFilterBar = () => {
    // integration of react hooks here
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [filterValue, setFilterValue] = useState<string>('Filter by Region');

    // handler function to get region for filtering purpose
    const filterByRegionHandler = (filterText: string) => {
        setFilterValue(filterText);
        setShowOptions(false);
    }

    // rendering search & filter bar section component here
    return (
        <section className='flex justify-between'>
            <div className='bg-white flex items-center py-5 px-10 rounded-md shadow-REST-input-shadow w-2/5'>
                <AiOutlineSearch className='fill-REST-dark-gray h-6 w-6'/>
                <input className='outline-none bg-transparent w-full pl-8 text-REST-dark-gray font-semibold' type='text' placeholder='Search for a country...'/>
            </div>
            <div onClick={() => setShowOptions(!showOptions)} className='relative bg-white flex items-center justify-between py-5 px-5 rounded-md shadow-REST-input-shadow w-[200px] hover:cursor-pointer text-REST-very-dark-blue-text'>
                <p className='font-semibold capitalize'>{filterValue}</p>
                {/* <input className='outline-none bg-transparent font-semibold hover:cursor-pointer' type='text' defaultValue='Filter by Region' disabled/> */}
                <BiSolidChevronDown className={`${showOptions && 'rotate-180'} duration-300`}/>
                <div className={`absolute top-full left-0 capitalize bg-white w-full rounded-md shadow-REST-shadow mt-1 p-4 font-semibold origin-top ${showOptions ? 'scale-y-100' : 'scale-y-0'} duration-300`}>
                    <p onClick={() => filterByRegionHandler('africa')} className='hover:cursor-pointer hover:opacity-50 duration-300'>africa</p>
                    <p onClick={() => filterByRegionHandler('america')} className='mt-1 hover:cursor-pointer hover:opacity-50 duration-300'>america</p>
                    <p onClick={() => filterByRegionHandler('asia')} className='mt-1 hover:cursor-pointer hover:opacity-50 duration-300'>asia</p>
                    <p onClick={() => filterByRegionHandler('europe')} className='mt-1 hover:cursor-pointer hover:opacity-50 duration-300'>europe</p>
                    <p onClick={() => filterByRegionHandler('Oceania')} className='mt-1 hover:cursor-pointer hover:opacity-50 duration-300'>oceania</p>
                </div>
            </div>
        </section>
    );
};

export default SearchFilterBar;