import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import BorderCountriesContainer from '../BorderCountries/BorderCountriesContainer';
import Image from 'next/image';
import Link from 'next/link';

const Country = ({country}: {country: Country}) => {
    // destructuring the country object here
    const {name, population, region, subregion, capital, tld, currencies, languages, borders, flags} = country;


    // rendering country component here
    return (
        <section className='w-[90%] mx-auto pt-16'>
            <Link href={'/'} className='w-fit flex items-center bg-white dark:bg-REST-dark-blue px-8 py-2 shadow-REST-shadow rounded-lg hover:scale-110 duration-300'>
                <FaArrowLeftLong className='mr-2'/>
                Back
            </Link>
            <div className='mt-16 flex flex-col xl:flex-row justify-between items-center'>
                <div className='w-full xl:w-1/2 xl:mr-20 2xl:mr-40'>
                    <Image className='object-cover w-full h-[250px] md:h-[400px] 2xl:h-[500px]' src={flags.svg} alt={flags.alt} height={192} width={320}/>
                </div>
                <div className='w-full xl:w-1/2 mt-20 xl:mt-0'>
                    <div>
                        <h3 className='text-3xl font-bold'>{name.common}</h3>
                    </div>
                    <div className='mt-8 flex flex-col xl:flex-row justify-between'>
                        <div className='w-full xl:w-1/2'>
                            <p className='font-medium'>
                                Native Name: <span className='font-normal'>
                                    {Object.values(name.nativeName)[Object.keys(name.nativeName).length - 1].common}
                                </span>
                            </p>
                            <p className='font-medium mt-2'>Population: <span className='font-normal'>{population.toLocaleString()}</span></p>
                            <p className='font-medium mt-2'>Region: <span className='font-normal'>{region}</span></p>
                            <p className='font-medium mt-2'>Sub Region: <span className='font-normal'>{subregion}</span></p>
                            <p className='font-medium mt-2'>Capital: <span className='font-normal'>{capital?.length ? capital.join(', ') : 'N/A'}</span></p>
                        </div>
                        <div className='w-full xl:w-1/2 mt-14 xl:mt-0'>
                            <p className='font-medium'>Top Level Domain: <span className='font-normal'>{tld}</span></p>
                            <p className='font-medium mt-2'>
                                Currencies: <span className='font-normal'>
                                    {
                                        Object.keys(currencies).map(key => currencies[key].name)
                                    }
                                </span>
                            </p>
                            <p className='font-medium mt-2'>
                                Languages: <span className='font-normal'>
                                    {
                                        Object.values(languages).join(', ')
                                    }
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col xl:flex-row xl:items-center mt-20'>
                        <p className='font-medium whitespace-nowrap mr-2'>Border Countries: </p>
                        <BorderCountriesContainer countryCodes={borders}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Country;