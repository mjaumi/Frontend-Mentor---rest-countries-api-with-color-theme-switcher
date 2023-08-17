'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

const BorderCountriesButton = ({borderCountry}: {borderCountry: Partial<Country>}) => {
    // destructuring the border country component here
    const {name, cca3} = borderCountry;

    // integration of next hooks here
    const router = useRouter();

    // this function is navigating user to border country details page
    const navigateToBorderCountry = (countryCode: string | undefined) => {
        router.push(`/country-details/${countryCode}`);
    }

    // rendering border countries button component here
    return (
        <button onClick={() => navigateToBorderCountry(cca3)} className='bg-white dark:bg-REST-dark-blue py-1 px-5 shadow-REST-shadow mr-2 xl:mr-0 xl:ml-2 mb-0 xl:mb-2 my-2 xl:my-0 rounded text-sm hover:opacity-60 duration-300'>
            {name?.common}
        </button>
    );
};

export default BorderCountriesButton;