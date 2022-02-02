import { createContext, useState } from 'react';

const ThemeContext = createContext<{
  darkMode: boolean;
  toggleDarkMode: Function;
}>({ darkMode: false, toggleDarkMode: () => console.log('Out of context!') });

type Props = {
  children: any;
};

export const ThemeProvider = ({ children }: Props) => {
  const [darkMode, SetDarkMode] = useState(false);

  function toggleDarkMode() {
    SetDarkMode((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
