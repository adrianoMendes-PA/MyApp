import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  Container,
  Header,
  HeaderText,
  Box,
  Inner,
  TituloCard,
  ButtonIcon,
  Separator,
  Label,
  InfoLabel,
  ButtonDetails,
  TextButtonDetails,
} from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Footer from '../../components/Footer';
import {StackNavigationProp} from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {DEV_API} from '@env';

// Defina os tipos de navegação para seu stack (ou outro tipo de navegação)
type RootStackParamList = {
  Home: undefined;
  RegisterTanque: undefined;
  DetailsTanque: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [total, setTotal] = useState(0);

  // MOSTRA A QUANTIDADE DE TANQUES CADASTRADOS
  async function TotalTanques() {
    const token = await AsyncStorage.getItem('token');
    let baseURL = DEV_API;

    const response = await fetch(`${baseURL}/tanque`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    const totalCount = response.headers.get('x-total-count');
    setTotal(totalCount ? parseInt(totalCount, 10) : 0);
  }

  useEffect(() => {
    TotalTanques();
  }, []);

  // NAVEGA PARA AS TELAS DE CADASTRO
  const RegisterTanque = () => {
    navigation.navigate('RegisterTanque');
  };

  // NAVEGA PARA AS TELAS DE DETALHES
  const DetailsTanque = () => {
    navigation.navigate('DetailsTanque');
  };

  return (
    <>
      <StatusBar barStyle={'default'} backgroundColor={'#236084'} />
      {/* Header */}
      <Header>
        <HeaderText>tfish</HeaderText>
      </Header>

      {/* Conteúdo da Tela */}
      <Container>
        <Box>
          <Inner>
            <TituloCard>Tanques</TituloCard>
            <ButtonIcon onPress={RegisterTanque}>
              <Icon name="inbox" size={70} color="#236084" />
            </ButtonIcon>
            <Separator />
            <Label>Tanques cadastrados</Label>
            <InfoLabel>{total}</InfoLabel>
            <ButtonDetails onPress={DetailsTanque}>
              <TextButtonDetails>Ver detalhes</TextButtonDetails>
            </ButtonDetails>
          </Inner>
        </Box>
        <Box>
          <Inner>
            <TituloCard>Peixes</TituloCard>
            <ButtonIcon>
              <Icon name="fish" size={70} color="#236084" />
            </ButtonIcon>
            <Separator />
            <Label>Último registro</Label>
            <InfoLabel>4</InfoLabel>
            <ButtonDetails>
              <TextButtonDetails>Ver detalhes</TextButtonDetails>
            </ButtonDetails>
          </Inner>
        </Box>
        <Box>
          <Inner>
            <TituloCard>Ração</TituloCard>
            <ButtonIcon>
              <Icon name="soap" size={70} color="#236084" />
            </ButtonIcon>
            <Separator />
            <Label>Tipo de ração usada</Label>
            <InfoLabel>Não há registros</InfoLabel>
            <ButtonDetails>
              <TextButtonDetails>Ver detalhes</TextButtonDetails>
            </ButtonDetails>
          </Inner>
        </Box>
        <Box>
          <Inner>
            <TituloCard>Tarefas</TituloCard>
            <ButtonIcon>
              <Icon name="inbox" size={70} color="#236084" />
            </ButtonIcon>
            <Separator />
            <Label>Última terefa cadastrada</Label>
            <InfoLabel>Não há tarefas</InfoLabel>
            <ButtonDetails>
              <TextButtonDetails>Ver detalhes</TextButtonDetails>
            </ButtonDetails>
          </Inner>
        </Box>
      </Container>

      {/* Conteúdo do Footer */}
      <Footer />
    </>
  );
};

export default HomeScreen;
