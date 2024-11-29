import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

// Footer
export const Footer = styled(View)`
  width: 100%;
  height: 8%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #236084;
`;

// Texto do footer
export const TextFooter = styled(Text)`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

export const ButtonIconFooter = styled(TouchableOpacity)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;
