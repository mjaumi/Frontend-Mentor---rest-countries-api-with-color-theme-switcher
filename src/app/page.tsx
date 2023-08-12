import SearchFilterBar from '@/components/SearchFilterBar/SearchFilterBar';

export default function Home() {
  // rendering the home page here
  return (
    <main className='bg-REST-very-light-gray dark:bg-REST-very-dark-blue pt-10 min-h-screen text-REST-very-dark-blue-text dark:text-white'>
      <SearchFilterBar/>
    </main>
  )
}
