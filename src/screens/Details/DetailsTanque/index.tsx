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
} from './style';
import Footer from '../../../components/Footer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text, FlatList} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {DEV_API} from '@env';
const baseURL = DEV_API;

interface Tanque {
  nome_tanque: string;
  profundidade: string;
  largura: string;
  comprimento: string;
  tipo_peixe: number;
  quant_peixe: number;
  ph_agua?: string;
}

export default () => {
  // Definindo os estados para controle de dados e carregamento
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Tanque[]>([]);

  // Função para carregar dados do tanque
  async function loadTanque() {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await fetch(`${baseURL}/tanque`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const data = await response.json();
      setData(data || []);
    } catch (error) {
      console.warn(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
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
              <Text>Aguarde, carregando dados...</Text>
            </Loading>
          </>
        ) : data.length == 0 ? (
          <>
            <StyledImage source={require('../../../assets/nodata.png')} />
            <TextNoData>Não há dados armazenados</TextNoData>
          </>
        ) : (
          <ContainerCard>
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <Card>
                  <AlignComponents>
                    <CardPropriedade>Nome do Tanque:</CardPropriedade>
                    {item.nome_tanque === '' ? (
                      <NameNull>sem nome</NameNull>
                    ) : (
                      <CardValor>{item.nome_tanque}</CardValor>
                    )}
                    <Buttom>
                      <Icon
                        name="edit"
                        size={17}
                        color="#0d8f45"
                        style={{marginLeft: 25}}
                      />
                    </Buttom>
                    <Buttom>
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
                    {item.tipo_peixe == 1 ? (
                      <CardValor>Tambaqui</CardValor>
                    ) : (
                      <CardValor>Tilápia</CardValor>
                    )}
                  </AlignComponents>

                  <AlignComponents>
                    <CardPropriedade>Quantidade de Peixe:</CardPropriedade>
                    <CardValor>{item.quant_peixe}</CardValor>
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
              )}
              keyExtractor={item => item.nome_tanque}
            />
          </ContainerCard>
        )}
      </Container>
      <Footer />
    </>
  );
};
