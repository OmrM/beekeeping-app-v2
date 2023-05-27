/* themes.ts: defines specific values for light/dark themes  
*/

import { DefaultTheme } from 'styled-components/native';

export const lightTheme: DefaultTheme = {
    background: '#fff',
    text: '#000',
    activeColor: '#3E2723',
    inactiveColor: '#795548',
    barStyle: {
      backgroundColor: '#FFC107',
      height: 95
    },
    // ...other styles
  }
  
  export const darkTheme: DefaultTheme = {
    background: '#333',
    text: '#fff',
    activeColor: '#fff',
    inactiveColor: '#888',
    barStyle: {
      backgroundColor: '#000',
      height: 95
    },
    // ...other styles
  }