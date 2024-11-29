import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

// Obtendo as dimensões da tela
const {width, height} = Dimensions.get('window');

// Estilização do Container
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  padding: ${height * 0.02}px ${width * 0.05}px;
`;

export const ScrollView = styled.ScrollView`
  margin-bottom: 50px;
`;

export const ContainerForm = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 5px;
  font-size: 17px;
`;

export const Input = styled.TextInput`
  border-width: 1.5px;
  border-color: #ddd;
  padding-horizontal: 10px;
  font-size: 15px;
  color: #444;
  height: 40px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const InputPicker = styled.View`
  border-width: 1.5px;
  border-color: #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0 10px;
  height: 40px;
  justify-content: center;
`;
