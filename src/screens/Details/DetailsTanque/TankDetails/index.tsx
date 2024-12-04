/* eslint-disable eqeqeq */
import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../../../components/Header';

interface TankDetailProps {
  route: any; // Para acessar os dados passados via navegação
}

const TankDetailScreen: React.FC<TankDetailProps> = ({route}) => {
  const {tanque} = route.params; // Pegando os dados do tanque

  return (
    <View>
      <Header title={tanque.nomeTanque} />
      <Text>Nome do Tanque: {tanque.nomeTanque}</Text>
      <Text>Profundidade: {tanque.profundidade}m</Text>
      <Text>Largura: {tanque.largura}m</Text>
      <Text>Comprimento: {tanque.comprimento}m</Text>
      <Text>
        Tipo de Peixe: {tanque.tipoPeixe == 1 ? 'Tambaqui' : 'Tilápia'}
      </Text>
      <Text>Quantidade de Peixes: {tanque.quantPeixe}</Text>
      {/* Adicione os outros dados conforme necessário */}
    </View>
  );
};

export default TankDetailScreen;
