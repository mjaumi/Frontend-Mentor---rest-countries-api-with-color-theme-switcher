'use client'

import React, { createContext, useState } from 'react';

// interface to declare search object type
interface ISearchObj {
    search: string,
    setSearch: (search: string) => void
}

// creating and exporting search context for searching a single country
export const SearchContext = createContext<ISearchObj | null>(null);

const SearchProvider = ({children}: {children: React.ReactNode}) => {
    // integration of react hooks here
    const [search, setSearch] = useState<string>('');

    // creating the context provider here
    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchProvider;