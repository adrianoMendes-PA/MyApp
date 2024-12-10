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
  RegisterPeixe: undefined;
  DetailsTanque: undefined;
  DetailsPeixe: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [total, setTotal] = useState(0);
  const [lastRegistration, setLastRegistration] = useState<
    string | undefined
  >();

  // MOSTRA A QUANTIDADE DE TANQUES CADASTRADOS
  async function TotalTanques() {
    const token = await AsyncStorage.getItem('token');
    let baseURL = DEV_API;

    const response = await fetch(`${baseURL}/tanque/totalTanques`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const totalCount = response.headers.get('x-total-count');
    setTotal(totalCount ? parseInt(totalCount, 10) : 0);
  }

  // MOSTRA O ULTIMO PEIXE CADASTRADO
  async function UltimoRegistro() {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        console.error('Token não encontrado');
        return;
      }

      const baseURL = DEV_API;
      const response = await fetch(`${baseURL}/peixe/getLastPeixe`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });

      if (response.status === 204) {
        // Atualiza o estado somente se for necessário
        setLastRegistration(prev => {
          if (prev !== '') {
            console.warn('Nenhum peixe encontrado.');
          }
          return '';
        });
        return;
      }

      if (response.status === 403) {
        console.error('Usuário não autenticado.');
        return;
      }

      if (!response.ok) {
        const errorResponse = await response.text();
        console.error('Erro desconhecido:', errorResponse);
        return;
      }

      // Processa a resposta válida
      const data = await response.json();
      setLastRegistration(prev => {
        if (prev !== data) {
          console.log('Último peixe encontrado:', data);
        }
        return data || '';
      });
    } catch (error) {
      console.error('Erro ao buscar o último registro:', error);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      TotalTanques();
      UltimoRegistro();
    }, 30000);
    return () => clearInterval(interval);
  }, [lastRegistration]);

  useEffect(() => {
    TotalTanques();
    UltimoRegistro();
  }, []);

  useEffect(() => {
    // Chama a API regularmente a cada 5 segundos
    const interval = setInterval(() => {
      TotalTanques();
      UltimoRegistro();
    }, 5000);

    // Cleanup ao desmontar o componente
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    TotalTanques();
    UltimoRegistro();
  }, []);

  // NAVEGA PARA AS TELAS DE CADASTRO
  const RegisterTanque = () => {
    navigation.navigate('RegisterTanque');
  };
  const RegisterPeixe = () => {
    navigation.navigate('RegisterPeixe');
  };

  // NAVEGA PARA AS TELAS DE DETALHES
  const DetailsTanque = () => {
    navigation.navigate('DetailsTanque');
  };
  const DetailsPeixe = () => {
    navigation.navigate('DetailsPeixe');
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
            {total ? (
              <InfoLabel>{total}</InfoLabel>
            ) : (
              <InfoLabel>Não há registros</InfoLabel>
            )}
            <ButtonDetails onPress={DetailsTanque}>
              <TextButtonDetails>Ver detalhes</TextButtonDetails>
            </ButtonDetails>
          </Inner>
        </Box>
        <Box>
          <Inner>
            <TituloCard>Peixes</TituloCard>
            <ButtonIcon onPress={RegisterPeixe}>
              <Icon name="fish" size={70} color="#236084" />
            </ButtonIcon>
            <Separator />
            <Label>Último registro</Label>
            {(() => {
              if (lastRegistration === undefined || lastRegistration === null) {
                return <InfoLabel>Não há registros</InfoLabel>;
              }

              const peixeLabels: Record<string, string> = {
                '1': 'Tambaqui',
                '2': 'Tilápia',
              };

              return (
                <InfoLabel>
                  {peixeLabels[lastRegistration] || 'Não há registros'}
                </InfoLabel>
              );
            })()}
            <ButtonDetails onPress={DetailsPeixe}>
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
              <Icon name="calendar-check" size={70} color="#236084" />
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
