import Countries from '@/components/Countries/Countries';
import SearchFilterBar from '@/components/SearchFilterBar/SearchFilterBar';
import ScrollUp from '@/components/Shared/ScrollUp';
import FilterProvider from '@/utils/FilterContext';
import SearchProvider from '@/utils/SearchContext';

export default function Home() {
  // rendering the home page here
  return (
    <main className='bg-REST-very-light-gray dark:bg-REST-very-dark-blue min-h-screen text-REST-very-dark-blue-text dark:text-white'>
      <FilterProvider>
        <SearchProvider>
          <ScrollUp/>
          <SearchFilterBar/>
          <Countries/>  
        </SearchProvider>
      </FilterProvider>
    </main>
  )
}
