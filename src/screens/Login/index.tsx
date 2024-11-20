/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback} from 'react';
import {Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../api/api';
import {RootParamList} from '../../types';
import {
  Logo,
  Container,
  Form,
  Label,
  InputArea,
  TesteInput,
  Button,
  ButtonText,
  MessageButton,
  TextCadastre,
  TextCadastreBold,
  SignUp,
  Pass,
  Load,
  ModalOverlay,
  ButtonContent,
  ModalContent,
  ModalText,
  ModalButton,
  ModalButtonText,
} from './style';
import {StackNavigationProp} from '@react-navigation/stack';

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootParamList>>();
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const closeModal = () => setModalMessage(null);

  const login = useCallback(async () => {
    // Verifica se apenas um campo foi preenchido
    if (!nome && senha) {
      setModalMessage('Por favor, preencha o campo "Nome"!');
      return;
    }
    if (nome && !senha) {
      setModalMessage('Por favor, preencha o campo "Senha"!');
      return;
    }

    // Verifica se ambos os campos estão preenchidos
    if (nome && senha) {
      setLoading(true);
      try {
        const json = await Api.login(nome, senha);
        if (json.token) {
          await AsyncStorage.setItem('token', json.token);
          setModalMessage('Login realizado com sucesso!');
          navigation.reset({
            routes: [{name: 'Home'}],
          });
        } else {
          setModalMessage(
            'Usuário não encontrado! Realize seu cadastro para entrar no aplicativo.',
          );
        }
      } catch (error) {
        setModalMessage('Erro ao tentar login. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    } else {
      setModalMessage(
        'Existem campos vazios! Por favor, preencha todos os campos.',
      );
    }
  }, [nome, senha, navigation]);

  return (
    <Container>
      <Logo source={require('../../assets/tfish.png')} />
      <Form>
        <Label>Seu Nome *</Label>
        <InputArea>
          <TesteInput
            placeholder="Digite seu nome"
            autoCorrect={false}
            value={nome}
            onChangeText={setNome}
          />
          <Icon name="user" color="#999" size={18} style={{paddingLeft: 15}} />
        </InputArea>
        <Label>Sua Senha *</Label>
        <InputArea>
          <TesteInput
            placeholder="Digite sua senha"
            secureTextEntry={hidePass}
            autoCorrect={false}
            value={senha}
            onChangeText={setSenha}
          />
          <Pass onPress={() => setHidePass(prev => !prev)} activeOpacity={0.7}>
            <Icon
              name={hidePass ? 'eye-off' : 'eye'}
              color="#999"
              size={18}
              style={{paddingLeft: 15}}
            />
          </Pass>
        </InputArea>
        <Button onPress={login}>
          {loading ? (
            <Load />
          ) : (
            <ButtonContent>
              <ButtonText>Entrar</ButtonText>
              <Icon
                name="log-in"
                size={15}
                color="#FFF"
                style={{marginLeft: 5}}
              />
            </ButtonContent>
          )}
        </Button>
        <MessageButton>
          <TextCadastre>Ainda não tem cadastro? </TextCadastre>
          <SignUp>
            <TextCadastreBold>Cadastre-se aqui</TextCadastreBold>
          </SignUp>
        </MessageButton>
      </Form>

      {/* Modal de Alerta */}
      {modalMessage && (
        <Modal transparent visible onRequestClose={closeModal}>
          <ModalOverlay>
            <ModalContent>
              <ModalText>{modalMessage}</ModalText>
              <ModalButton onPress={closeModal}>
                <ModalButtonText>Fechar</ModalButtonText>
              </ModalButton>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      )}
    </Container>
  );
};

export default LoginScreen;
