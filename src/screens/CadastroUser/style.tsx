import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

// Obtemos as dimensões da tela para possíveis cálculos
const {width, height} = Dimensions.get('window');

interface SlideProps {
  backgroundColor: string;
}

// Container principal
export const Container = styled.SafeAreaView`
  background-color: #ffffffff;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${height * 0.02}px ${width * 0.05}px;
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
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

// Container do formulário
export const FormContainer = styled.View`
  width: 100%;
  padding-horizontal: 20px;
`;

// Campo de entrada (Input)
export const Input = styled.TextInput`
  height: 40px;
  background-color: #fff;
  margin-bottom: 15px;
  padding-horizontal: 10px;
  border-radius: 5px;
`;
