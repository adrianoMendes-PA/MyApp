import React from 'react';
import {Header, HeaderText, IconReturn} from './style';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface HeaderProps {
  title: string; // Define o tipo da propriedade title
}

export default ({title}: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <Header>
      <IconReturn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color={'#FFF'} />
      </IconReturn>

      <HeaderText>{title}</HeaderText>
    </Header>
  );
};
