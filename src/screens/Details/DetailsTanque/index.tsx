/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
import React, {useEffect, useState} from 'react';
import Header from '../../../components/Header';
import {
  Container,
  Loading,
  Card,
  AlignComponents,
  CardPropriedade,
  NameNull,
  CardValor,
  ContainerCard,
  View,
  TextAlert,
  Buttom,
  StyledImage,
  TextNoData,
  IconLoading,
  CenterContainer,
  TextLoadingData,
} from './style';
import Footer from '../../../components/Footer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FlatList, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {DEV_API} from '@env';
const baseURL = DEV_API;

interface Tanque {
  id: any;
  nomeTanque: string;
  profundidade: string;
  largura: string;
  comprimento: string;
  tipoPeixe: number;
  quantPeixe: number;
  ph_agua?: string;
}

export default () => {
  // Definindo os estados para controle de dados e carregamento
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Tanque[]>([]);

  const navigation = useNavigation();

  const navigateToDetail = (tanque: Tanque) => {
    navigation.navigate('TankDetails', {tanque});
  };

  // Função para carregar dados do tanque
  async function loadTanque() {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await fetch(`${baseURL}/tanque/getTanques`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      setData(data.tanques || []);
    } catch (error) {
      console.warn(error);
    } finally {
      setLoading(false);
    }
  }

  // Função para deletar um peixe
  async function deleteRegister(id: any) {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await fetch(`${baseURL}/tanque/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        Alert.alert('Sucesso!', 'Registro deletado com sucesso!');
        // Atualiza o estado local removendo o item deletado
        setData(prevData => prevData.filter(item => item.id !== id));
      } else {
        const errorData = await response.json();
        console.error('Erro ao deletar:', errorData);
        Alert.alert('Erro', 'Não foi possível deletar o registro.');
      }
    } catch (error) {
      console.error('Erro na requisição de delete:', error);
      Alert.alert('Erro', 'Não foi possível deletar o registro.');
    }
  }

  useEffect(() => {
    // Chama a API regularmente a cada 5 segundos
    const interval = setInterval(() => {
      loadTanque();
    }, 5000);
    // Cleanup ao desmontar o componente
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Carrega os dados na primeira montagem do componente
    loadTanque();
  }, []);

  return (
    <>
      <Header title="Detalhes do tanque" />
      <Container>
        {loading ? (
          <>
            <Loading>
              <IconLoading size={'large'} />
              <TextLoadingData>Aguarde, carregando dados...</TextLoadingData>
            </Loading>
          </>
        ) : data.length == 0 ? (
          <>
            <CenterContainer>
              <StyledImage source={require('../../../assets/nodata.png')} />
              <TextNoData>Não há dados armazenados</TextNoData>
            </CenterContainer>
          </>
        ) : (
          <ContainerCard>
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <Buttom onPress={() => navigateToDetail(item)}>
                  <Card>
                    <AlignComponents>
                      <CardPropriedade>Nome do Tanque:</CardPropriedade>
                      {item.nomeTanque === '' ? (
                        <NameNull>sem nome</NameNull>
                      ) : (
                        <CardValor>{item.nomeTanque}</CardValor>
                      )}
                      <Buttom>
                        <Icon
                          name="edit"
                          size={17}
                          color="#0d8f45"
                          style={{marginLeft: 25}}
                        />
                      </Buttom>
                      <Buttom
                        onPress={() =>
                          Alert.alert(
                            'Confirmação!',
                            'Você tem certeza que deseja deletar este registro?',
                            [
                              {
                                text: 'Deletar',
                                onPress: () => deleteRegister(item.id),
                                style: 'destructive',
                              },
                              {
                                text: 'Cancelar',
                                style: 'cancel',
                              },
                            ],
                          )
                        }>
                        <Icon
                          name="trash-alt"
                          size={17}
                          color="#cf4040"
                          style={{marginLeft: 20}}
                        />
                      </Buttom>
                    </AlignComponents>

                    <AlignComponents>
                      <CardPropriedade>Profundidade:</CardPropriedade>
                      <CardValor>{item.profundidade}m</CardValor>
                    </AlignComponents>

                    <AlignComponents>
                      <CardPropriedade>Largura:</CardPropriedade>
                      <CardValor>{item.largura}m</CardValor>
                    </AlignComponents>

                    <AlignComponents>
                      <CardPropriedade>Comprimento:</CardPropriedade>
                      <CardValor>{item.comprimento}m</CardValor>
                    </AlignComponents>

                    <AlignComponents>
                      <CardPropriedade>Tipo de Peixe:</CardPropriedade>
                      {item.tipoPeixe == 1 ? (
                        <CardValor>Tambaqui</CardValor>
                      ) : (
                        <CardValor>Tilápia</CardValor>
                      )}
                    </AlignComponents>

                    <AlignComponents>
                      <CardPropriedade>Quantidade de Peixe:</CardPropriedade>
                      <CardValor>{item.quantPeixe}</CardValor>
                    </AlignComponents>

                    {item.profundidade > '1.50' && (
                      <View>
                        <TextAlert>
                          <Icon
                            name="exclamation-triangle"
                            size={15}
                            color="#cf4040"
                          />
                          A profundidade do tanque é maior que 1.50m
                        </TextAlert>
                      </View>
                    )}
                  </Card>
                </Buttom>
              )}
              keyExtractor={item => item.nomeTanque}
            />
          </ContainerCard>
        )}
      </Container>
      <Footer />
    </>
  );
};
