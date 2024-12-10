import styled from 'styled-components/native';

// Estilização do Container
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  margin-bottom: -40px;
`;

export const ContainerCard = styled.View`
  margin-bottom: 40px;
`;

export const AlignComponents = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const CardPropriedade = styled.Text`
  font-size: 16px;
  color: #41414d;
  font-weight: bold;
`;

export const CardValor = styled.Text`
  font-size: 17px;
  color: #737380;
  margin-left: 10px;
  flex-shrink: 1;
`;

export const TextInformation = styled.Text`
  flex: 1;
  font-size: 18px;
  color: #737380;
  text-align: justify;
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

export const Wrapper = styled.View`
  padding-horizontal: 20px;
  margin-top: 10px;
`;

export const BoldText = styled.Text`
  font-weight: bold;
`;
