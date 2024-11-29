/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import Header from '../../../components/Header';
import {
  Container,
  ScrollView,
  Label,
  InputPicker,
  ContainerForm,
  Input,
  ContainerBtn,
  SaveButton,
  CancelButton,
  TextButton,
  IconLoading,
} from './style';
import {Picker} from '@react-native-picker/picker';
import {Alert} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';

import api from '../../../services/api/api';

// Definir o tipo esperado para a navegação
type RootStackParamList = {
  Home: undefined;
};

export default () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const peixeOptions = [
    {key: 0, name: 'Escolha do tipo do peixe', value: 0},
    {key: 1, name: 'Tambaqui', value: 1},
    {key: 2, name: 'Tilápia', value: 2},
  ];
  const faseCriacaoOptions = [
    {key: 0, name: 'Defina a fase de criação', value: 0},
    {key: 1, name: 'Alevino', value: 1},
    {key: 2, name: 'Recria', value: 2},
    {key: 3, name: 'Engorda', value: 3},
  ];

  const [tipo_peixe, setTipoPeixe] = useState(peixeOptions[0].value);
  const [quant_peixe, setQuantPeixe] = useState('');
  const [fase_criacao, setFaseCriacao] = useState(faseCriacaoOptions[0].value);
  const [loading, setLoading] = useState(true);

  const Cadastrapeixe = async () => {
    if (tipo_peixe !== 0 && quant_peixe !== '') {
      setLoading(false);

      const data = {
        tipo_peixe: tipo_peixe.toString(),
        quant_peixe: parseFloat(quant_peixe),
        fase_criacao: fase_criacao.toString(),
      };

      let json = await api.cadastraPeixe(
        tipo_peixe,
        quant_peixe,
        fase_criacao,
        data,
      );

      if (json.user_id) {
        if (fase_criacao === 0) {
          Alert.alert(
            'Cadastro realizado. Mas, atenção!',
            'Você não informou a fase de criação do peixe, dessa forma não poderemos sugerir a ração mais adequada para sua criação.',
            [
              {
                text: 'Ok!',
                onPress: () => console.log('ok clicado'),
              },
            ],
          );
          navigation.reset({
            routes: [{name: 'Home'}],
          });
        } else {
          Alert.alert('Sucesso!', 'Cadastrado foi realizado com sucesso.', [
            {
              text: 'Ok!',
              onPress: () => console.log('ok clicado'),
            },
          ]);
          navigation.reset({
            routes: [{name: 'Home'}],
          });
        }
      } else {
        Alert.alert('Ops!', 'Aconteceu alguma coisa não esperada.', [
          {
            text: 'Ok, entendi.',
            onPress: () => {
              navigation.reset({
                routes: [{name: 'Home'}],
              });
            },
          },
        ]);
      }
    } else {
      Alert.alert(
        'Ops!',
        'Existem campos vazios! Por favor, preencha todos os campos para poder realizar o cadastro.',
        [
          {
            text: 'Ok, entendi.',
            onPress: () => console.log('ok clicado'),
          },
        ],
      );
    }
  };

  return (
    <>
      <Header title="Cadastro de peixes" />
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ContainerForm>
            {/* Tipo de Peixe */}
            <Label>Tipo de peixe</Label>
            <InputPicker>
              <Picker
                selectedValue={tipo_peixe}
                style={{width: '100%', color: '#737380'}}
                onValueChange={itemValue => {
                  setTipoPeixe(itemValue);
                }}>
                {peixeOptions.map(item => (
                  <Picker.Item
                    key={item.key}
                    label={item.name}
                    value={item.value}
                  />
                ))}
              </Picker>
            </InputPicker>

            {/* Quantidade de Peixes */}
            <Label>Quantidade de peixes adquiridos</Label>
            <Input
              placeholder="exemplo: 50"
              keyboardType="decimal-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={quant_peixe}
              onChangeText={setQuantPeixe}
            />

            {/* Fase da Criação */}
            <Label>Fase da criação</Label>
            <InputPicker>
              <Picker
                selectedValue={fase_criacao}
                style={{width: '100%', color: '#737380'}}
                onValueChange={itemValue => {
                  setFaseCriacao(itemValue);
                }}>
                {faseCriacaoOptions.map(item => (
                  <Picker.Item
                    key={item.key}
                    label={item.name}
                    value={item.value}
                  />
                ))}
              </Picker>
            </InputPicker>
            <ContainerBtn>
              <SaveButton onPress={() => Cadastrapeixe()}>
                {loading ? (
                  <>
                    <TextButton>Salvar</TextButton>
                  </>
                ) : (
                  <>
                    <IconLoading />
                  </>
                )}
              </SaveButton>
              <CancelButton>
                <TextButton>Cancelar</TextButton>
              </CancelButton>
            </ContainerBtn>
          </ContainerForm>
        </ScrollView>
      </Container>
    </>
  );
};
