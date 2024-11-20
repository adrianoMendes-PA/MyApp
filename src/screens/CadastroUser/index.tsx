import React, {useState} from 'react';
import {Button, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Slide, Title, FormContainer, Input} from './style';
import {CommonActions, NavigationProp} from '@react-navigation/native';

interface Slide {
  key: string;
  title: string;
  content: JSX.Element;
  backgroundColor: string;
}

type RootStackParamList = {
  Login: undefined; // Ajuste as rotas de acordo com o que há no seu projeto
};

interface FormSliderProps {
  navigation: NavigationProp<RootStackParamList, 'Login'>;
}

const FormSlider: React.FC<FormSliderProps> = ({navigation}) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData({...formData, [name]: value});
  };

  const slides: Slide[] = [
    {
      key: '1',
      title: 'Crie sua conta',
      content: (
        <FormContainer>
          <Input
            placeholder="Digite seu nome"
            value={formData.nome}
            onChangeText={value => handleInputChange('nome', value)}
          />
          <Input
            placeholder="Digite sua senha"
            value={formData.email}
            onChangeText={value => handleInputChange('senha', value)}
          />
        </FormContainer>
      ),
      backgroundColor: '#59b2ab',
    },
    {
      key: '2',
      title: 'Defina sua senha',
      content: (
        <FormContainer>
          <Input
            placeholder="Digite seu estado"
            value={formData.senha}
            onChangeText={value => handleInputChange('estado', value)}
          />
          <Input
            placeholder="Digite sua cidade"
            value={formData.senha}
            onChangeText={value => handleInputChange('cidade', value)}
          />
        </FormContainer>
      ),
      backgroundColor: '#febe29',
    },
    {
      key: '3',
      title: 'Pronto para começar!',
      content: (
        <FormContainer>
          <Text>Você está quase lá! Agora é só finalizar.</Text>
          <Button
            title="Finalizar"
            onPress={() => {
              // Substituir a navegação com `reset`
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: 'Login'}],
                }),
              );
            }}
          />
        </FormContainer>
      ),
      backgroundColor: '#22bcb5',
    },
  ];

  const renderItem = ({item}: {item: Slide}) => {
    return (
      <Slide backgroundColor={item.backgroundColor}>
        <Title>{item.title}</Title>
        {item.content}
      </Slide>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={() =>
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Login'}],
          }),
        )
      }
      showSkipButton={true}
      onSkip={() =>
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Login'}],
          }),
        )
      }
    />
  );
};

export default FormSlider;
