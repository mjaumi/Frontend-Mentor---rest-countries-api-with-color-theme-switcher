import React from 'react';

const BorderCountriesButton = ({borderCountry}: {borderCountry: Partial<Country>}) => {
    // destructuring the border country component here
    const {name, cca3} = borderCountry;

    // rendering border countries button component here
    return (
        <button className='bg-white dark:bg-REST-dark-blue py-1 px-5 shadow-REST-shadow ml-2 rounded text-sm hover:opacity-60 duration-300'>
            {name?.common}
        </button>
    );
};

export default BorderCountriesButton;