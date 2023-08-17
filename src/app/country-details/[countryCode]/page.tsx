import Country from "@/components/Country/Country";
import getCountryByCode from "@/lib/getCountryByCode";

// defining the params type here
type Params ={
    params: {
        countryCode: string
    } 
}

export default async function DetailsPage({params}: Params) {
    // fetching country data by country code here
    const countryData: Promise<Country[]> = getCountryByCode(params.countryCode);
    const country = await countryData;

    console.log(country);

    // rendering the country details page here
    return (
        <main className='bg-REST-very-light-gray dark:bg-REST-very-dark-blue min-h-screen text-REST-very-dark-blue-text dark:text-white'>
            <Country country={country[0]}/>
        </main>
    );
}