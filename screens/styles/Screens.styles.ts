/* Screens.styles.ts:  imports and uses the themes from themes.ts.
    - styled-components provides the current theme to each styled component
      as a prop, which you can use to set the colors etc. according to our theme.
    source: https://styled-components.com/docs/api 
*/

import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding-top: 20px;
    background-color: ${({ theme }) => theme.background};
`;

export const StyledText = styled.Text`
    color: ${({ theme }) => theme.textColor};
`;

//TODO: remove these styles and use the ones in components folder
export const CardContainer = styled.Pressable`
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.cardStyle.backgroundColor};
    shadow-color: '#000';
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    shadow-radius: 8px;
    elevation: 3;
`;

export const CardTitle = styled.Text`
    font-size: ${({ theme }) => theme.cardTitle.fontSize};
    font-weight:  ${({ theme }) => theme.cardTitle.fontWeight};
    color:  ${({ theme }) => theme.textColor}
`;
export const CardText = styled.Text`
    font-size: ${({ theme }) => theme.cardText.fontSize};
    font-weight:  ${({ theme }) => theme.cardText.fontWeight};
    color: ${ ({theme}) => theme.textColor};
`;

export const InputContainer = styled.View`
    margin: 0px 20px 20px 20px;
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