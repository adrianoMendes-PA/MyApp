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
} from './style';
import {Picker} from '@react-native-picker/picker';

export default () => {
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

  const [tipoPeixe, setTipoPeixe] = useState(peixeOptions[0].value);
  const [quantPeixe, setQuantPeixe] = useState('');
  const [faseCriacao, setFaseCriacao] = useState(faseCriacaoOptions[0].value);

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
                selectedValue={tipoPeixe}
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
              value={quantPeixe}
              onChangeText={setQuantPeixe}
            />

            {/* Fase da Criação */}
            <Label>Fase da criação</Label>
            <InputPicker>
              <Picker
                selectedValue={faseCriacao}
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
          </ContainerForm>
        </ScrollView>
      </Container>
    </>
  );
};
