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
        <div className='grid grid-cols-4 gap-24'>
                {
                    countries
                    .filter(searchCountry)
                    .filter(filterCountries)
                    .map((country: Country) => 
                        <CountryItemCard key={country.name.common} country={country}/>
                    )
                }
            </div>
    );
};

export default CountriesContainer;