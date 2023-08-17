import Country from '@/components/Country/Country';
import ScrollUp from '@/components/Shared/ScrollUp';
import getCountryByCode from '@/lib/getCountryByCode';

// defining the params type here
type Params = {
    params: {
        countryCode: string
    } 
}

// dynamically generating metadata for details page here
export async function generateMetadata({params}: Params) {
    // fetching country data by country code here
    const countryData: Promise<Country[]> = getCountryByCode(params.countryCode);
    const country = await countryData;
    
    return {
        title: country[0].name.common + ' Details || REST Countries API'
    };
}

export default async function DetailsPage({params}: Params) {
    // fetching country data by country code here
    const countryData: Promise<Country[]> = getCountryByCode(params.countryCode);
    const country = await countryData;

    // rendering the country details page here
    return (
        <main className='bg-REST-very-light-gray dark:bg-REST-very-dark-blue min-h-screen text-REST-very-dark-blue-text dark:text-white pb-20'>
            <ScrollUp/>
            <Country country={country[0]}/>
        </main>
    );
}