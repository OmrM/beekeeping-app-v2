/* SettingsScreen.styles.ts:  imports and uses the themes from themes.ts.
    - styled-components provides the current theme to each styled component
      as a prop, which you can use to set the colors etc. according to our theme.
    source: https://styled-components.com/docs/api 
*/

import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items:center;
    justify-content: center;
    background-color: ${({theme}) => theme.background};
`;

export const StyledText = styled.Text`
    color: ${({theme}) => theme.text};
`;




//if I wanted to use the theming inline in a component: 
/* const SettingsScreen = ({toggleTheme}) => {
  
    return (
        <View style={{ backgroundColor: theme.background, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: theme.text }}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={handleToggle} />
      </View>
    );
}; */
//but we're moving that to this separate file. so we use this