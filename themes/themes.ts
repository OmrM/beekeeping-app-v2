/* themes.ts: defines specific values for light/dark themes  
*/

import { DefaultTheme } from 'styled-components/native';

export const lightTheme: DefaultTheme = {
  // Stack Navigaton Bar (Top Bar):
  headerStyle: {
    backgroundColor: '#ffff',
    textColor: '#3c2415',
  },
  // Bottom Tabs
  barStyle: {
    backgroundColor: '#fafafa', //yellow #f6d365
    height: 95
  },
  /*     activeColor: '#3c2415',
      inactiveColor: '#3c2415', */
  activeColor: '#FF851B',
  inactiveColor: '#645631',


  background: '#F2EEDF',
  textColor: '#3c2415', //#FFC107
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
  },
  button:{
    backgroundColor: '#FF851B',
    textColor: '#ffffff'
  },
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
  activeColor: '#ffd247',
  inactiveColor: '#ABABAB', // #888


  background: '#161B22', //old one is #333
  textColor: '#fff', //#f6d365

  cardStyle: {
    backgroundColor: '#353535',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: '16px',
    fontWeight: 'normal',
  },
  button:{
    backgroundColor: '#ffd247 ',
    textColor: '#0D1117'
  },
}