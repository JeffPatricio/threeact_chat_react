import React from 'react';
import userIcon from '../../assets/user.png';
import { Container, Perfil, Name } from './styles';

const ItemUserList = ({ user }) => {
  return (
    <Container>
      <Perfil src={user.photo || userIcon} />
      <Name>{user.name}</Name>
    </Container>
  )
}

export default ItemUserList