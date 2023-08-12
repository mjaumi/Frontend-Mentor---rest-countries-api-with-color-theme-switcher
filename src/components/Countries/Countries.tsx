import React from 'react';
import CountryItemCard from './CountryItemCard';

const Countries = async () => {
    // fetching all the countries data here
    const countriesData = await getAllCountriesData();

    // rendering the countries container component here
    return (
        <section className='w-[90%] mx-auto pb-10'>
            <div className='grid grid-cols-4 gap-24'>
                {
                    countriesData.map((country: any) => 
                        <CountryItemCard key={country.name.common} country={country}/>
                    )
                }
            </div>
        </section>
    );
};

export default Countries;

// this async function is to fetch all the countries data using REST countries API
const getAllCountriesData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');

    if(!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
}