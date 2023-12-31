import getCountryNameByCode from '@/lib/getCountryNameByCode';
import React from 'react';
import BorderCountriesButton from './BorderCountriesButton';

const BorderCountriesContainer = async ({countryCodes}: {countryCodes: string[]}) => {
    // fetching border countries names here
    const borderCountriesData: Promise<Partial<Country>[]> = getCountryNameByCode(countryCodes);
    const borderCountries = await borderCountriesData;

    // rendering border countries container component here
    return (
        <div className='mt-3 xl:mt-0'>
            {
                borderCountries.length ?
                borderCountries.map(borderCountry => 
                    <BorderCountriesButton
                        key={borderCountry.cca3}
                        borderCountry={borderCountry}
                    />    
                )
                :
                <p className='xl:ml-2'>N/A</p>
            }
        </div>
    );
};

export default BorderCountriesContainer;