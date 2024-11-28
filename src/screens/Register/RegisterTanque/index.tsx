/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Container,
  ScrollView,
  ContainerForm,
  Label,
  Input,
  InputPicker,
  ContainerBtn,
  SaveButton,
} from './style';
import Header from '../../../components/Header';
import {Picker} from '@react-native-picker/picker';
export default () => {
  const [peixe] = useState([
    {key: 1, name: 'Tambaqui', value: 1},
    {key: 2, name: 'Tilápia', value: 2},
  ]);
  const [tipo_peixe, setTipoPeixe] = useState('');

  return (
    <>
      {/* Header */}
      <Header title="Cadastro de tanques" />
      <Container>
        <ScrollView>
          <ContainerForm>
            <Label>Identificação do Tanque</Label>
            <Input
              placeholder="exemplo: tanque 1"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Label>Profundidade do Tanque</Label>
            <Input
              placeholder="exemplo: 2.22"
              keyboardType={'decimal-pad'}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Label>Largura do Tanque</Label>
            <Input
              placeholder="exemplo: 2.22"
              keyboardType={'decimal-pad'}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Label>Comprimento do Tanque</Label>
            <Input
              placeholder="exemplo: 2.22"
              keyboardType={'decimal-pad'}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Label>Tipo de peixe</Label>
            <InputPicker>
              <Picker
                selectedValue={tipo_peixe}
                style={{height: 36, width: '100%'}}
                onValueChange={itemValue => setTipoPeixe(itemValue)}>
                <Picker.Item label="Selecione o tipo de peixe" value={null} />
                {peixe.map(cr => {
                  return (
                    <Picker.Item
                      key={cr.key}
                      label={cr.name}
                      value={cr.value}
                    />
                  );
                })}
              </Picker>
            </InputPicker>
            <Label>Quantidade de peixes no Tanque</Label>
            <Input
              placeholder="exemplo: 50"
              keyboardType={'decimal-pad'}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <ContainerBtn>
              <SaveButton></SaveButton>
            </ContainerBtn>
          </ContainerForm>
        </ScrollView>
      </Container>
    </>
  );
};
