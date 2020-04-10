import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    height: 56px;
    background-color: ${(props) => (props.color ? props.color : '#3b9eff')};
    border-radius: 4px;
    width: 100%;

    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;
