'use client'

import React, { createContext, useState } from 'react';

// interface to declare filter object type
interface IFilterObj {
    filter: string,
    setFilter: (filter: string) => void
}

// creating and exporting filter context for filtering countries
export const FilterContext = createContext<IFilterObj | null>(null);

const FilterProvider = ({children}: {children: React.ReactNode}) => {
    // integration of react hooks here
    const [filter, setFilter] = useState<string>('');

    // creating the context provider here
    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    );
}

export default FilterProvider;