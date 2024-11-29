import styled from 'styled-components/native';

// Estilização do Container
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-bottom: -40px;
`;

export const View = styled.View`
  margin-bottom: 10px;
`;

export const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.View`
  padding: 20px;
  margin-top: 10px;
  border-radius: 6px;
  elevation: 3;
  background-color: #fff;
  shadow-offset: 1px 1px;
  shadow-color: #333;
  shadow-opacity: 0.3;
  shadow-radius: 2px;
  margin-horizontal: 19px;
  margin-vertical: 6px;
  width: 91%;
`;

export const CardPropriedade = styled.Text`
  font-size: 18px;
  color: #41414d;
  font-weight: bold;
`;

export const CardValor = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-left: 10px;
  flex-shrink: 1;
`;

export const NameNull = styled.Text`
  font-size: 17px;
  margin-left: 10px;
  color: #737380;
  font-style: italic;
`;

export const AlignComponents = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const Buttom = styled.TouchableOpacity``;

export const ContainerCard = styled.View`
  margin-bottom: 40px;
`;

export const TextAlert = styled.Text`
  color: #cf4040;
  text-align: center;
  margin-top: 10px;
  justify-content: space-between;
  font-size: 15px;
`;
