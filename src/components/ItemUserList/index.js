import React from 'react';
import userIcon from '../../assets/user.png';
import { Container, Profile, Name, NotReadCount, Online } from './styles';

const ItemUserList = ({ user, active, onClick }) => {
  return (
    <Container active={active} onClick={onClick}>
      <Profile src={user.photo || userIcon}>
        {
          (user.online === 1) && <Online />
        }
      </Profile>
      <Name>{user.name}</Name>
      {
        (user.notReadCount > 0 && !active) && <NotReadCount>{user.notReadCount}</NotReadCount>
      }
    </Container>
  )
}

export default ItemUserList