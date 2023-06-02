/* CardContainer.styles.ts: imports and uses themes fom themes.ts
    These styles are used in all the Card components in the app: 
        - ApiaryCard.tsx
        - HiveCard.tsx
 */
import styled from 'styled-components/native';

export const CardContainer = styled.Pressable`
    margin-bottom: 20px;
    padding: 20px;
    border-radius:8px;
    background-color: ${({ theme }) => theme.cardStyle.backgroundColor};
    shadow-color: '#000';
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    shadow-radius: 8px;
    elevation: 3;
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