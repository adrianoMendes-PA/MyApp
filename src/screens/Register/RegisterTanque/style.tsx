import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

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

export const ContainerBtn = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;
export const SaveButton = styled.TouchableOpacity`
  height: 42px;
  background-color: #6dbb8f;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding-horizontal: 45px;
`;

export const CancelButton = styled.TouchableOpacity`
  height: 42px;
  background-color: #cf4040;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding-horizontal: 35px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;

export const IconLoading = styled.ActivityIndicator.attrs({
  color: '#FFFF',
})``;
