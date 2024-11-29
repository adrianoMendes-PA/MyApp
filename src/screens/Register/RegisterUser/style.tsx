import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Obtemos as dimensões da tela para possíveis cálculos
const {width, height} = Dimensions.get('window');

interface SlideProps {
  backgroundColor: string;
}

// Container principal
export const Container = styled.SafeAreaView`
  background-color: #ffffffff;
  flex: 1;
  height: 100%; /* Garante que ocupa toda a tela */
  justify-content: center;
  align-items: center;
  padding: ${height * 0.01}px ${width * 0.05}px;
`;


// Slide do Intro Slider
export const Slide = styled.View<SlideProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.backgroundColor};
`;

// Título do Slide
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #3d3d3d;
  text-align: center;
  margin-bottom: 20px;
`;

// Container do formulário
export const FormContainer = styled.View`
  width: 100%;
  padding-horizontal: 20px;
`;

// Wrapper para input e ícone
export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 15px;
  border-width: 1px;
  border-color: #ddd;
  padding-horizontal: 10px;
`;

// Ícone estilizado
export const StyledIcon = styled(Icon)`
  margin-right: 10px;
  color: #999;
`;

// Campo de entrada (Input)
export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  color: #000;
  font-size: 16px;
`;

// Logo
export const Logo = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: -30px; /* Espaço extra no topo */
  margin-bottom: 15px;
`;

