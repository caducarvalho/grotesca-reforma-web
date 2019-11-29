import React, {createContext, useReducer} from 'react';
import {ThemeProvider} from 'styled-components';
import ThemeReducer from '../reducers/ThemeReducer';
import colorSet from '../resources/color-set';

if (!localStorage.getItem('color'))
  localStorage.setItem('color', '#FF6644');

if (!localStorage.getItem('mode')) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    localStorage.setItem('mode', 'true');
  } else {
    localStorage.setItem('mode', 'false');
  }
}

const initialState = {
  color: localStorage.getItem('color'),
  dark: JSON.parse(localStorage.getItem('mode')),
  colorSet: colorSet(JSON.parse(localStorage.getItem('mode')))
}

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
  const [theme, dispatch] = useReducer(ThemeReducer, initialState);
  const themes = {
    variants: ['#FF6644', '#0CB377', '#FF3882', '#2353CC', '#997E67']
  }

  return (
    <ThemeContext.Provider value={{theme, dispatch, themes}}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;