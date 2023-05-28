/* styled.d.ts: declarations file
    - used to extend the DefaultTheme interface from styled-components
    - lets typescript know what properties and types it should expect to find in theme objects
    - sets up typescript to understand the structure and types of our themes
    source: https://styled-components.com/docs/api#typescript 
*/

/* Other files: 
    - themes.ts: defines specific values for light/dark themes 
    - ScreenStyles.ts: imports and uses the themes from themes.ts.
        styled-components provides the current theme to each styled component
        as a prop, which you can use to set the colors etc. according to our theme.
*/

// import module declarations
import 'styled-components/native';

// extend imported declarations
declare module 'styled-components/native' { 
    export interface DefaultTheme {
/*         borderRadius: string;
        colors: {
            main: string;
            secondary: string
        } */
        // define other theme properties
        background: string;
        text: string;
        activeColor: string;
        inactiveColor: string;
        headerStyle: {
            backgroundColor: string; 
            textColor: string;
          }
        barStyle: { 
            backgroundColor: string;
            height: integer;
        }
    };
};