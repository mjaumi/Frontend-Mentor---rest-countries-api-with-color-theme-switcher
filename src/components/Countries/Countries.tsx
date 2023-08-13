'use client'

import React, { cache, use, useContext } from 'react';
import CountryItemCard from './CountryItemCard';
import { FilterContext } from '@/utils/FilterContext';
import { SearchContext } from '@/utils/SearchContext';

// this async function is to fetch all the countries data using REST countries API
const getCountries = cache(() =>
    fetch('https://restcountries.com/v3.1/all').then(res => res.json())
);

const Countries = () => {
    // fetching all the countries data here
    const countries = use<Array<object>>(getCountries());

    // integration of context API here 
    const filterContext = useContext(FilterContext);
    const searchContext = useContext(SearchContext);

    // function to filter the countries accordingly
    const filterCountries = (country: any) => {
        return filterContext?.filter !== '' ? country.region.toLowerCase() === filterContext?.filter : country;
    }    

    // function to search country by text
    const searchCountry = (country: any) => {
        return searchContext?.search ? country.name.common.toLowerCase().includes(searchContext.search.toLowerCase()) : country;
    }

    // rendering the countries container component here
    return (
        <section className='w-[90%] mx-auto pb-10'>
            <div className='grid grid-cols-4 gap-24'>
                {
                    countries
                    .filter(searchCountry)
                    .filter(filterCountries)
                    .map((country: any) => 
                        <CountryItemCard key={country.name.common} country={country}/>
                    )
                }
            </div>
        </section>
    );
};

export default Countries;
