import styled from 'styled-components/native';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Obtendo as dimensões da tela
const {width, height} = Dimensions.get('window');

// Estilização do Container
export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #ffffff; /* Removido #ffffffff para evitar duplicidade */
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${height * 0.02}px ${width * 0.05}px; /* Margens dinâmicas */
`;

// Estilização do Header
export const Header = styled(View)`
  height: 35px;
  background-color: #236084;
  justify-content: center;
  align-items: center;
`;

// Estilização do Texto do Header
export const HeaderText = styled(Text)`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

//Box
export const Box = styled(View)`
  width: 50%;
  height: 50%;
  padding: 7px;
`;

// Conteúdo Interno Box
export const Inner = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  shadow-offset: {
    width: 1px;
    height: 1px;
  }
  shadow-color: #333;
  shadow-opacity: 0.3;
  shadow-radius: 2px;
  elevation: 8;
`;

// Título do Card
export const TituloCard = styled(Text)`
  color: #444;
  text-align: center;
  margin-top: 10px;
  font-size: 25px;
  font-weight: bold;
`;

export const ButtonIcon = styled(TouchableOpacity)``;

// Separador
export const Separator = styled(View)`
  margin-vertical: 10px;
  padding-horizontal: 40%;
  border-bottom-color: #737373;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`;

// Label
export const Label = styled(Text)`
  color: #444;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
`;

// InfoLabel
export const InfoLabel = styled(Text)`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #236084;
  margin-top: 5px;
`;

// Botão de detalhes
export const ButtonDetails = styled(TouchableOpacity)`
  align-items: center;
  margin-top: 5px;
  height: 40px;
`;

// Texto do botão de detalhes
export const TextButtonDetails = styled(Text)`
  font-size: 15px;
  color: #236084;
  margin-top: 10px;
`;

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
