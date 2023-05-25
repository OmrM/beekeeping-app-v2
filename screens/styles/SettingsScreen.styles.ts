import styled from 'styled-components/native';

//
//if I wanted to use the theming in a component: 
/* const SettingsScreen = ({toggleTheme}) => {
  
    return (
        <View style={{ backgroundColor: theme.background, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: theme.text }}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={handleToggle} />
      </View>
    );
}; */
//but we're moving that to this separate file. so we use this
//from: https://styled-components.com/docs/api

export const Container = styled.View`
    flex: 1;
    align-items:center;
    justify-content: center;
    background-color: ${({theme}) => theme.background};
`;

export const StyledText = styled.Text`
    color: ${({theme}) => theme.text};
`;

