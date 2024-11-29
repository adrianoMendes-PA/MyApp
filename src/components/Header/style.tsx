import styled from 'styled-components/native';

// Estilização do Header
export const Header = styled.View`
  flex-direction: row;
  height: 40px;
  background-color: #236084;
  justify-content: center;
  align-items: center;
`;

// Estilização do Texto do Header
export const HeaderText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const IconReturn = styled.TouchableOpacity`
  position: absolute;
  left: 15;
`;
