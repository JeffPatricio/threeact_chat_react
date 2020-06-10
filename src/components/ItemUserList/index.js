import React from 'react';
import userIcon from '../../assets/user.png';
import { Container, Profile, Name, NotReadCount } from './styles';

const ItemUserList = ({ user, messagesNotRead = 2, active, onClick }) => {
  return (
    <Container active={active} onClick={onClick}>
      <Profile src={user.photo || userIcon} />
      <Name>{user.name}</Name>
      {
        (messagesNotRead && !active) && <NotReadCount>{messagesNotRead}</NotReadCount>
      }
    </Container>
  )
}

export default ItemUserList