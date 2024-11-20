import React from 'react';
import {Container} from './style';
import {StatusBar, Text} from 'react-native';

export default () => {
  return (
    <>
      <Container>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
        <Text>Tela de Cadastro</Text>
      </Container>
    </>
  );
};
