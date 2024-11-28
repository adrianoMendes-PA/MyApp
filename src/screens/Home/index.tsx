import React from 'react';
import {StatusBar} from 'react-native';
import {
  Container,
  Header,
  HeaderText,
  Box,
  Inner,
  TituloCard,
  ButtonIcon,
  Separator,
  Label,
  InfoLabel,
  ButtonDetails,
  TextButtonDetails,
} from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Footer from '../../components/Footer';

export default () => {
  return (
    <>
      <StatusBar barStyle={'default'} backgroundColor={'#236084'} />
      {/* Header */}
      <Header>
        <HeaderText>tfish</HeaderText>
      </Header>

      {/* Conteúdo da Tela */}
      <Container>
        <Box>
          <Inner>
            <TituloCard>Tanques</TituloCard>
            <ButtonIcon>
              <Icon name="inbox" size={70} color="#236084" />
            </ButtonIcon>
            <Separator />
            <Label>Tanques cadastrados</Label>
            <InfoLabel>4</InfoLabel>
            <ButtonDetails>
              <TextButtonDetails>Ver detalhes</TextButtonDetails>
            </ButtonDetails>
          </Inner>
        </Box>
        <Box>
          <Inner>
            <TituloCard>Peixes</TituloCard>
            <ButtonIcon>
              <Icon name="fish" size={70} color="#236084" />
            </ButtonIcon>
            <Separator />
            <Label>Último registro</Label>
            <InfoLabel>4</InfoLabel>
            <ButtonDetails>
              <TextButtonDetails>Ver detalhes</TextButtonDetails>
            </ButtonDetails>
          </Inner>
        </Box>
        <Box>
          <Inner>
            <TituloCard>Ração</TituloCard>
            <ButtonIcon>
              <Icon name="soap" size={70} color="#236084" />
            </ButtonIcon>
            <Separator />
            <Label>Tipo de ração usada</Label>
            <InfoLabel>Não há registros</InfoLabel>
            <ButtonDetails>
              <TextButtonDetails>Ver detalhes</TextButtonDetails>
            </ButtonDetails>
          </Inner>
        </Box>
        <Box>
          <Inner>
            <TituloCard>Tarefas</TituloCard>
            <ButtonIcon>
              <Icon name="inbox" size={70} color="#236084" />
            </ButtonIcon>
            <Separator />
            <Label>Última terefa cadastrada</Label>
            <InfoLabel>Não há tarefas</InfoLabel>
            <ButtonDetails>
              <TextButtonDetails>Ver detalhes</TextButtonDetails>
            </ButtonDetails>
          </Inner>
        </Box>
      </Container>

      {/* Conteúdo do Footer */}
      <Footer />
    </>
  );
};
