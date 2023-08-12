import Countries from '@/components/Countries/Countries';
import SearchFilterBar from '@/components/SearchFilterBar/SearchFilterBar';

export default function Home() {
  // rendering the home page here
  return (
    <main className='bg-REST-very-light-gray dark:bg-REST-very-dark-blue min-h-screen text-REST-very-dark-blue-text dark:text-white'>
      <SearchFilterBar/>
      <Countries/>
    </main>
  )
}
