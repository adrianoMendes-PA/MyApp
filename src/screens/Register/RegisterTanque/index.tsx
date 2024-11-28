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
  TextButton,
  CancelButton,
  IconLoading,
} from './style';
import Header from '../../../components/Header';
import {Picker} from '@react-native-picker/picker';
import api from '../../../services/api/api';
import {Alert} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';

// Definir o tipo esperado para a navegação
type RootStackParamList = {
  Home: undefined;
};

export default () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [peixe] = useState([
    {key: 1, name: 'Tambaqui', value: 1},
    {key: 2, name: 'Tilápia', value: 2},
  ]);
  const [tipo_peixe, setTipoPeixe] = useState('');
  const [nome_tanque, setNomeTanque] = useState('');
  const [profundidade, setProfundidade] = useState('');
  const [largura, setlargura] = useState('');
  const [comprimento, setComprimento] = useState('');
  const [quant_peixe, setQuantPeixe] = useState('');
  const [loading, setLoading] = useState(true);

  const registerTanque = async () => {
    if (
      profundidade !== '' &&
      largura !== '' &&
      comprimento !== '' &&
      tipo_peixe !== '' &&
      quant_peixe !== ''
    ) {
      setLoading(false);

      const data = {
        nome_tanque,
        profundidade: parseFloat(profundidade), // Converte para número
        largura: parseFloat(largura),
        comprimento: parseFloat(comprimento),
        tipo_peixe: tipo_peixe.toString(), // Converte para string
        quant_peixe: parseInt(quant_peixe, 10), // Converte para número inteiro
      };

      let json = await api.cadastraTanque(
        nome_tanque,
        profundidade,
        largura,
        comprimento,
        tipo_peixe,
        quant_peixe,
        data,
      );

      if (json.user_id !== '') {
        if (parseFloat(profundidade) > 1.5) {
          // Corrigido para comparação numérica
          Alert.alert(
            'Tanque cadastrado! Mas, atenção.',
            'A profundidade do tanque é maior que 1,50m. Esse detalhe é fundamental para facilitar o momento de subida da rede, no procedimento de captura (ou colheita) dos peixes.',
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
          Alert.alert('Sucesso!', 'Tanque cadastrado com sucesso...', [
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
      {/* Header */}
      <Header title="Cadastro de tanques" />
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ContainerForm>
            <Label>Identificação do Tanque</Label>
            <Input
              placeholder="exemplo: tanque 1"
              autoCapitalize="none"
              autoCorrect={false}
              value={nome_tanque}
              onChangeText={setNomeTanque}
            />
            <Label>Profundidade do Tanque</Label>
            <Input
              placeholder="exemplo: 2.22"
              keyboardType={'decimal-pad'}
              autoCapitalize="none"
              autoCorrect={false}
              value={profundidade}
              onChangeText={setProfundidade}
            />
            <Label>Largura do Tanque</Label>
            <Input
              placeholder="exemplo: 2.22"
              keyboardType={'decimal-pad'}
              autoCapitalize="none"
              autoCorrect={false}
              value={largura}
              onChangeText={setlargura}
            />
            <Label>Comprimento do Tanque</Label>
            <Input
              placeholder="exemplo: 2.22"
              keyboardType={'decimal-pad'}
              autoCapitalize="none"
              autoCorrect={false}
              value={comprimento}
              onChangeText={setComprimento}
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
              value={quant_peixe}
              onChangeText={setQuantPeixe}
            />
            <ContainerBtn>
              <SaveButton onPress={() => registerTanque()}>
                {loading ? (
                  <>
                    <TextButton>Salvar</TextButton>
                  </>
                ) : (
                  <IconLoading />
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
