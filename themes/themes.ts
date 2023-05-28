/* themes.ts: defines specific values for light/dark themes  
*/

import { DefaultTheme } from 'styled-components/native';

export const lightTheme: DefaultTheme = {
    background: '#ffffff',
    text: '#3c2415',
    // Stack Navigaton Bar (Top Bar):
    headerStyle: {
      backgroundColor: '#FFC107', 
      textColor: '#3c2415', 
    },
    // Bottom Tabs
    barStyle: {
      backgroundColor: '#FFC107', //yellow #f6d365
      height: 95
    },
/*     activeColor: '#3c2415',
    inactiveColor: '#3c2415', */
    activeColor: '#3c2415',
    inactiveColor: '#795548',

  }
  
  export const darkTheme: DefaultTheme = {
    background: '#161B22', //old one is #333
    text: '#fff', //#f6d365
    // Stack Navigaton Bar (Top Bar):
    headerStyle: {
      backgroundColor:'#0D1117', 
      textColor: '#f8f9fa',
    },
    // Bottom Tabs
    barStyle: {
      backgroundColor: '#0D1117',
      height: 95
    },
    activeColor: '#FFAB00',
    inactiveColor: '#645631', // #888

  }