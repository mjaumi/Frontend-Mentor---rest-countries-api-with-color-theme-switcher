'use client'

import React, {useContext} from 'react';
import CountryItemCard from './CountryItemCard';
import { FilterContext } from '@/utils/FilterContext';
import { SearchContext } from '@/utils/SearchContext';

const CountriesContainer = ({countries}: {countries: Country[]}) => {
    // integration of context API here 
    const filterContext = useContext(FilterContext);
    const searchContext = useContext(SearchContext);

    // function to filter the countries accordingly
    const filterCountries = (country: Country) => {
        return filterContext?.filter !== '' ? country.region.toLowerCase() === filterContext?.filter : country;
    }    

    // function to search country by text
    const searchCountry = (country: Country) => {
        return searchContext?.search ? country.name.common.toLowerCase().includes(searchContext.search.toLowerCase()) : country;
    }

    // rendering countries container component here
    return (
        <>
            {
                countries.filter(searchCountry).length ?
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 xl:gap-24'>
                        {
                            countries
                            .filter(searchCountry)
                            .filter(filterCountries)
                            .map((country: Country) => 
                                <CountryItemCard key={country.name.common} country={country}/>
                            )
                        }
                    </div>
                    :
                    <h2 className='font-bold opacity-80 text-center text-3xl'>No Such Country Found!</h2>
            }
        </>
    );
};

export default CountriesContainer;