/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import Header from '../../../components/Header';
import {
  Container,
  IconLoading,
  Loading,
  TextLoadingData,
  StyledImage,
  TextNoData,
  ContainerCard,
  Card,
  AlignComponents,
  CardPropriedade,
  NameNull,
  CardValor,
  Buttom,
  IconContainer,
  View,
  CenterContainer,
} from './style';

import {FlatList, Alert} from 'react-native';
import Footer from '../../../components/Footer';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {DEV_API} from '@env';

const baseURL = DEV_API;

interface Peixe {
  id: any;
  created_at: number | Date | undefined;
  tipoPeixe: number;
  quantPeixe: number;
  faseCriacao: string;
}

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Peixe[]>([]);

  // Função para carregar os dados do tanque
  async function loadPeixe() {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await fetch(`${baseURL}/peixe/getPeixes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setData(data.peixes || []);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
    }
  }

  // Função para deletar um peixe
  async function deleteRegister(id: any) {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await fetch(`${baseURL}/peixe/${id}`, {
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
      loadPeixe();
    }, 5000);
    // Cleanup ao desmontar o componente
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Carrega os dados na primeira montagem do componente
    loadPeixe();
  }, []);

  return (
    <>
      <Header title="Detalhes dos peixes" />
      <Container>
        {loading ? (
          <>
            <Loading>
              <IconLoading size={'large'} />
              <TextLoadingData>Aguarde, carregando dados</TextLoadingData>
            </Loading>
          </>
        ) : data.length === 0 ? (
          <>
            <CenterContainer>
              <StyledImage source={require('../../../assets/nodata.png')} />
              <TextNoData>Não há dados armazenados</TextNoData>
            </CenterContainer>
          </>
        ) : (
          <>
            <ContainerCard>
              <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                  <Card>
                    <AlignComponents>
                      <CardPropriedade>Tipo de peixe:</CardPropriedade>
                      {item.tipoPeixe.toString() === '0' ? (
                        <NameNull>sem nome</NameNull>
                      ) : item.tipoPeixe.toString() === '1' ? (
                        <CardValor>Tambaqui</CardValor>
                      ) : (
                        <CardValor>Tilápia</CardValor>
                      )}
                      <IconContainer>
                        <Buttom>
                          <Icon
                            name="edit"
                            size={17}
                            color="#0d8f45"
                            style={{marginLeft: 20}}
                          />
                        </Buttom>
                        <Buttom
                          onPress={() =>
                            Alert.alert(
                              'Confirmação',
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
                      </IconContainer>
                    </AlignComponents>
                    <AlignComponents>
                      <CardPropriedade>Quantidade de peixes:</CardPropriedade>
                      <CardValor>{item.quantPeixe}</CardValor>
                    </AlignComponents>
                    <AlignComponents>
                      <CardPropriedade>Fase de criação:</CardPropriedade>
                      <CardValor>
                        {item.faseCriacao === ''
                          ? 'não informado'
                          : item.faseCriacao.toString() === '1'
                          ? 'Alevino'
                          : item.faseCriacao.toString() === '2'
                          ? 'Recria'
                          : item.faseCriacao.toString() === '3'
                          ? 'Engorda'
                          : 'Desconhecido'}
                      </CardValor>
                    </AlignComponents>
                    <AlignComponents>
                      <CardPropriedade>Ração sujerida:</CardPropriedade>
                      <CardValor>
                        {item.faseCriacao === ''
                          ? 'nada a sugerir'
                          : item.faseCriacao.toString() === '1'
                          ? 'farelada/pó'
                          : item.faseCriacao.toString() === '2'
                          ? 'grânulos 1mm/8mm'
                          : item.faseCriacao.toString() === '3'
                          ? 'grânulos 8mm/10mm'
                          : 'nada a sugerir'}
                      </CardValor>
                    </AlignComponents>
                    <AlignComponents>
                      <CardPropriedade>Data do cadastro:</CardPropriedade>
                      <CardValor>
                        {Intl.DateTimeFormat('pt-BR').format(item.created_at)}
                      </CardValor>
                    </AlignComponents>
                    <View>
                      {item.faseCriacao && (
                        <CardValor
                          style={{color: '#005177', textAlign: 'center'}}>
                          {{
                            '1': 'Na fase da alevinagem o ideal é que a alimentação seja feita 6 vezes ao dia',
                            '2': 'Na fase da recria o ideal é que a alimentação seja feita 4 vezes ao dia',
                            '3': 'Na fase da engorda o ideal é que a alimentação seja feita 3 vezes ao dia',
                          }[item.faseCriacao] || 'Fase não reconhecida'}
                        </CardValor>
                      )}
                    </View>
                  </Card>
                )}
                keyExtractor={item => item.id.toString()}
              />
            </ContainerCard>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};
