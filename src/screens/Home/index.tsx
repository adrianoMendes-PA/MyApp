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
  Footer,
  TextFooter,
  ButtonIconFooter,
} from './style';

import Icon from 'react-native-vector-icons/FontAwesome5';

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
      </Container>

      {/* Conteúdo do Footer */}
      <Footer>
        <ButtonIconFooter hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Icon name="home" size={18} color="#FFF" />
          <TextFooter>Início</TextFooter>
        </ButtonIconFooter>
        <ButtonIconFooter hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Icon name="chart-line" size={18} color="#FFF" />
          <TextFooter>Atividades</TextFooter>
        </ButtonIconFooter>
        <ButtonIconFooter hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Icon name="dollar-sign" size={18} color="#FFF" />
          <TextFooter>Financeiro</TextFooter>
        </ButtonIconFooter>
        <ButtonIconFooter hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Icon name="user" size={18} color="#FFF" />
          <TextFooter>Perfil</TextFooter>
        </ButtonIconFooter>
        <ButtonIconFooter hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Icon name="tag" size={18} color="#FFF" />
          <TextFooter>Sobre</TextFooter>
        </ButtonIconFooter>
      </Footer>
    </>
  );
};
