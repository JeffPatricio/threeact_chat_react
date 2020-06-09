import React from 'react';
import userIcon from '../../assets/user.png';
import { Container, Profile, Name, NotReadCount } from './styles';

const ItemUserList = ({ user, messagesNotRead = 2 }) => {
  return (
    <Container>
      <Profile src={user.photo || userIcon} />
      <Name>{user.name}</Name>
      {
        (messagesNotRead) && <NotReadCount>{messagesNotRead}</NotReadCount>
      }
    </Container>
  )
}

export default ItemUserList