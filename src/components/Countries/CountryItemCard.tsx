import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const CountryItemCard = ({country}: {country: Country}) => {
    // destructuring the country object here
    const {flags, name, population, region, capital, cca3} = country || {};

    // integration of next hooks here
    const router = useRouter();

    const countryDetailsNavHandler = (countryCode: string) => {
        router.push(`/country-details/${countryCode}`);
    }

    // rendering country card component here
    return (
        <div onClick={() => countryDetailsNavHandler(cca3)} className='bg-white dark:bg-REST-dark-blue shadow-REST-shadow rounded-md overflow-hidden cursor-pointer hover:scale-105 duration-300'>
            <div>
                <Image className='object-cover w-full h-[220px]' src={flags.svg} alt={flags.alt} height={192} width={320}/>
            </div>
            <div className='px-6 py-7'>
                <h4 className='text-xl font-bold'>{name.common}</h4>
                <div className='my-5'>
                    <p className='font-semibold'>Population: <span className='font-normal'>{population.toLocaleString()}</span></p>
                    <p className='font-semibold mt-1'>Region: <span className='font-normal'>{region}</span></p>
                    <p className='font-semibold mt-1'>
                        Capital: <span className='font-normal'>
                            {
                                capital.length ? capital.join(', ') : 'N/A'
                            }
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CountryItemCard;