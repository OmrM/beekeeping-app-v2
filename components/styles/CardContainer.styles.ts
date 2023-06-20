/* CardContainer.styles.ts: imports and uses themes fom themes.ts
    These styles are used in all the Card components in the app: 
        - ApiaryCard.tsx
        - HiveCard.tsx
 */
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export const CardContainer = styled.View`
    margin: 10px 20px 10px 20px;
    padding: 15px;
    border-radius:8px;
    background-color: ${({ theme }) => theme.cardStyle.backgroundColor};
    shadow-color: '#000';
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    shadow-radius: 8px;
    elevation: 3;
    flex-direction: row;
    align-items: flex-start;
`
export const CardTextContainer = styled.View`
    flex: 1;
    flex-direction: column;
    margin-left: 10px;
`
export const CardTitle = styled.Text`
    font-size: ${({ theme }) => theme.cardTitle.fontSize};
    font-weight:  ${({ theme }) => theme.cardTitle.fontWeight};
    color:  ${({ theme }) => theme.textColor}
`
export const CardText = styled.Text`
    font-size: ${({ theme }) => theme.cardText.fontSize};
    font-weight:  ${({ theme }) => theme.cardText.fontWeight};
    color: ${({ theme }) => theme.textColor}
`
export const CardImage = styled.Image`
    width: 30px;
    height: 30px;
    border-radius: 25;

`
export const CardIcon = styled(MaterialCommunityIcons)`
    color: ${({ theme }) => theme.button.backgroundColor};
    padding-top: 3px;
`
export const DotsIcon = styled(MaterialCommunityIcons)`
    color: ${({ theme }) => theme.textColor};
    font-size: 24px;
`
export const MenuOptnContainer = styled.View`
    flex-direction: row;
    background-color: ${({ theme }) => theme.cardStyle.backgroundColor};
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
`
export const MenuOptionText = styled.Text`
    padding: 10px;
    font-size: ${({ theme }) => theme.cardText.fontSize};
    font-weight:  ${({ theme }) => theme.cardText.fontWeight};
    color: ${({ theme }) => theme.textColor}
`
export const MenuOptionIcon = styled(MaterialCommunityIcons)`
    color: ${({ theme }) => theme.textColor};
    font-size: 24px;
    padding: 10px;
`