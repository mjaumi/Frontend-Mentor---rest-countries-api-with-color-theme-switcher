'use client'

import React, { createContext, useState } from 'react';

interface IThemeObj {
  theme: string,
  setTheme: (theme: string) => void,
}

// creating and exporting theme context for toggling dark and light mode
export const ThemeContext = createContext<IThemeObj | null>(null);

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  // integration of react hooks here
  const [theme, setTheme] = useState<string>('light');

  // creating the context provider here
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <body className={`${theme === 'dark' && 'dark'}`}>
        {children}
      </body>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
