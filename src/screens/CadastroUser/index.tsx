/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, Text, KeyboardAvoidingView, Platform} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  Slide,
  Title,
  FormContainer,
  Input,
  InputWrapper,
  Logo,
  StyledIcon,
} from './style';
import {CommonActions, NavigationProp} from '@react-navigation/native';

const renderNextButton = () => {
  return (
    <Text style={{color: '#236084', fontSize: 16, fontWeight: 'bold'}}>
      Próximo
    </Text>
  );
};

const renderSkipButton = () => {
  return (
    <Text style={{color: '#236084', fontSize: 16, fontWeight: 'bold'}}>
      Pular
    </Text>
  );
};

const renderDoneButton = () => {
  return (
    <Text style={{color: '#236084', fontSize: 16, fontWeight: 'bold'}}>
      Concluir
    </Text>
  );
};

interface Slide {
  key: string;
  title: string;
  content: JSX.Element;
  backgroundColor: string;
  image: any;
}

type RootStackParamList = {
  Login: undefined;
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
          <InputWrapper>
            <Input
              placeholder="Digite seu nome"
              value={formData.nome}
              onChangeText={value => handleInputChange('nome', value)}
            />
            <StyledIcon name="user" size={15} />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Digite sua senha"
              secureTextEntry
              value={formData.senha}
              onChangeText={value => handleInputChange('senha', value)}
            />
            <StyledIcon name="eye" size={15} />
          </InputWrapper>
        </FormContainer>
      ),
      backgroundColor: '#fff',
      image: require('../../assets/profile.png'),
    },
    {
      key: '2',
      title: 'Defina sua senha',
      content: (
        <FormContainer>
          <InputWrapper>
            <Input
              placeholder="Digite seu estado"
              value={formData.nome}
              onChangeText={value => handleInputChange('estado', value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Digite sua cidade"
              value={formData.senha}
              onChangeText={value => handleInputChange('cidade', value)}
            />
          </InputWrapper>
        </FormContainer>
      ),
      backgroundColor: '#fff',
      image: require('../../assets/teste1.png'),
    },
    {
      key: '3',
      title: 'Pronto para começar!',
      content: (
        <FormContainer>
          <Text>Você está quase lá! Agora é só finalizar.</Text>
          <Button
            title="Finalizar"
            onPress={() =>
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: 'Login'}],
                }),
              )
            }
          />
        </FormContainer>
      ),
      backgroundColor: '#fff',
      image: require('../../assets/teste1.png'),
    },
  ];

  const renderItem = ({item}: {item: Slide}) => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <Slide backgroundColor={item.backgroundColor}>
          <Logo source={item.image} />
          <Title>{item.title}</Title>
          {item.content}
        </Slide>
      </KeyboardAvoidingView>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
        renderNextButton={renderNextButton}
        renderSkipButton={renderSkipButton}
        renderDoneButton={renderDoneButton}
      />
    </KeyboardAvoidingView>
  );
};

export default FormSlider;
