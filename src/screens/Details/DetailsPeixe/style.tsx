import styled from 'styled-components/native';

// Estilização do Container
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  align-items: stretch;
  justify-content: flex-start;
  margin-bottom: -40px;
`;

export const View = styled.View``;

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
  margin-horizontal: 20px;
  margin-vertical: 5px;
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

export const CenterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.Image`
  width: 250px;
  height: 250px;
  margin-bottom: 5px;
`;

export const TextNoData = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #737380;
  text-align: center;
`;

export const TextLoadingData = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #737380;
`;

export const IconLoading = styled.ActivityIndicator.attrs({
  color: '#236084',
})``;

export const IconContainer = styled.View`
  flex-direction: row;
  position: absolute;
  right: 10px;
  align-items: center;
`;
