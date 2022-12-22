import React, { createContext } from 'react'
import { theme } from './theme'

interface themeProviderProps {
  children: React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({ children }: themeProviderProps) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
