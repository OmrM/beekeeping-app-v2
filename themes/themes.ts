/* themes.ts: defines specific values for light/dark themes  
*/

import { DefaultTheme } from 'styled-components/native';

export const lightTheme: DefaultTheme = {
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


  background: '#ffffff',
  textColor: '#3c2415',

  cardStyle: {
    backgroundColor: '#f8f9fa',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    
  },
  cardText: {
    fontSize: '16px',
    fontWeight: 'normal',
  }
}

export const darkTheme: DefaultTheme = {
  // Stack Navigaton Bar (Top Bar):
  headerStyle: {
    backgroundColor: '#0D1117',
    textColor: '#f8f9fa',
  },
  // Bottom Tabs
  barStyle: {
    backgroundColor: '#0D1117',
    height: 95
  },
  activeColor: '#FFAB00',
  inactiveColor: '#645631', // #888


  background: '#161B22', //old one is #333
  textColor: '#fff', //#f6d365

  cardStyle: {
    backgroundColor: '#645631',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: '16px',
    fontWeight: 'normal',
  }
}