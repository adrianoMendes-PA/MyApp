import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

// Obtemos as dimensões da tela para possíveis cálculos
const {width, height} = Dimensions.get('window');

// Container
export const Container = styled.SafeAreaView`
  background-color: #ffffffff;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${height * 0.02}px ${width * 0.05}px; /* Margens dinâmicas */
`;
