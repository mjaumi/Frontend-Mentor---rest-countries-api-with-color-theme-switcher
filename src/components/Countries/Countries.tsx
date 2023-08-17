import React from 'react';
import getAllCountries from '@/lib/getAllCountries';
import CountriesContainer from './CountriesContainer';

const Countries = async () => {
    // fetching all the countries data here
    const countriesData: Promise<Country[]> = getAllCountries();
    const countries = await countriesData;

    // rendering the countries container component here
    return (
        <section className='w-[90%] mx-auto pb-10'>
            <CountriesContainer countries={countries}/>
        </section>
    );
};

export default Countries;
