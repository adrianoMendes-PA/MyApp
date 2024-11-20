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

// Formulário
export const Form = styled.View`
  align-self: stretch;
  padding: 0 30px;
  margin-bottom: 8px;
`;

// Label de campo
export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 8px;
`;

// Botão
export const Button = styled.TouchableOpacity`
  height: 45px;
  background-color: #236084;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

// Texto dentro do botão
export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

// Ainda não tem cadastro
export const MessageButton = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 15px;
`;

// botão de cadastrar-se
export const SignUp = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
`;

// Texto de cadastro
export const TextCadastre = styled.Text`
  font-size: 16px;
  color: #236084;
`;

// Texto de cadastro com ênfase
export const TextCadastreBold = styled(TextCadastre)`
  font-weight: bold;
  margin-left: 5px;
`;

// Área de input
export const InputArea = styled.View`
  border-width: 1px;
  border-color: #ddd;
  flex-direction: row;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  height: 50px;
  align-items: center;
  margin-bottom: 20px;
`;

// Campo de texto dentro do Input
export const TesteInput = styled.TextInput`
  width: 80%;
  height: 50px;
  color: #000;
  padding: 5px;
  font-size: 15px;
`;

// Logo
export const Logo = styled.Image`
  width: 100px; /* Defina a largura desejada */
  height: 50px; /* Defina a altura desejada */
  margin-bottom: 15px;
`;

export const Pass = styled.TouchableOpacity``;

export const Load = styled.ActivityIndicator.attrs({
  color: '#fff',
})``;

export const ButtonContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ModalOverlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute; /* Garante que ocupe toda a tela */
  z-index: 9999; /* Garantir que o modal fique sobre outros componentes */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  align-items: center;
  width: 85%;
  z-index: 10000; /* Forçar sobreposição completa */
`;

export const ModalText = styled.Text`
  font-size: 20px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #236084;
  padding: 10px 30px;
  border-radius: 5px;
`;

export const ModalButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
