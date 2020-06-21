import React from 'react';
import { Icon } from '@iconify/react';
import outlineChat from '@iconify/icons-ic/outline-chat';
import generalIcon from '../../assets/general.png';
import { Link } from "react-router-dom";
import { Container, ContainerForm, ContainerInfo, ContainerTitleForm, ThreeChat, ThreeChatText, LineDecoration, TitleInfo, TextInfo, BackButton } from './styles';

const About = ({ match }) => {
console.log(match)
  return (
    <Container>
      <ContainerForm>
        <ContainerTitleForm>
            <ThreeChat src={generalIcon} />
            <ThreeChatText>ThreeChat</ThreeChatText>
        </ContainerTitleForm>
      </ContainerForm>
      <ContainerInfo>
        <TitleInfo style={{ display: 'flex', fontSize: '45px', alignItems: 'center' }}>
          <Icon icon={outlineChat} color='#7E57C2' size={40} style={{ marginRight: 5, marginTop: 5 }} />
          Sobre
          </TitleInfo>
        <LineDecoration style={{ borderTop: '1.5px solid #7E57C2', width: '350px' }} />
        <TextInfo>
          ThreeChat é um sistema de chat web desenvolvido referente ao trabalho acadêmico de N2 realizado por estudantes do do 6º Período do curso de Sistemas de Informação da Faculdade FASAM.
          Os integrantes da equipe optaram por criar um sistema de chat que faz um paralelo com a comunicação indireta representada pela sala Geral,
          e conversa privativa representando a conexão direta em Sistemas Distribuídos.
        </TextInfo>
        <Link to={`/chat`}>
          <BackButton>Voltar</BackButton>
        </Link>
      </ContainerInfo>
    </Container>
  )
}

export default About