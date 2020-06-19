import React, { useState, useRef, useContext } from 'react';
import { Icon } from '@iconify/react';
import outlineChat from '@iconify/icons-ic/outline-chat';
import { AppContext } from '../../App';
import { postApi } from '../../services';
import Loading from '../../components/Loading';
import Toast from '../../components/Toast';
import { Container, ContainerForm, ContainerInfo, ContainerTitleForm, TitleForm, LineDecoration, Input, Button, TitleInfo, TextInfo } from './styles';

const Register = () => {

  const appData = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [fileName, setFilename] = useState('');
  const inputFile = useRef(null);

  const submitUser = async () => {
    if (!loading) {
      setLoading(true);
      if (!name) {
        setLoading(false);
        return Toast('Necessário preencher o Nome', 'error');
      }
      const formData = new FormData();
      formData.append('name', name);
      if (inputFile.current.files && inputFile.current.files[0]) formData.append('file', inputFile.current.files[0]);
      const { success, log, message, user } = await postApi('/users', formData);
      setLoading(false);
      Toast(message || log || 'Ocorreu um erro ao criar usuário', success ? 'success' : 'error');
      if (success) {
        localStorage.setItem('threechatUser', JSON.stringify(user));
        appData.setAuthUser({ authenticated: true, ...user });
      }
    }
  }

  return (
    <Container>
      <ContainerForm>
        <ContainerTitleForm>
          <TitleForm>Cadastre-se</TitleForm>
          <LineDecoration />
        </ContainerTitleForm>
        <Input type='text' placeholder='Nome *' value={name} onChange={e => setName(e.currentTarget.value)} />
        <Input
          type='text'
          readOnly={true}
          placeholder='Foto do Perfil'
          value={fileName}
          onClick={() => inputFile.current.click()}
          style={{ cursor: 'pointer' }}
        />
        <Input
          ref={inputFile}
          type='file'
          placeholder='Foto do Perfil'
          accept='image/png, image/jpeg'
          style={{ display: 'none' }}
          onChange={() => setFilename(inputFile.current.files[0].name)}
        />
        <Button onClick={submitUser}>
          {(loading) && <Loading width='25px' />}
          {(!loading) && 'Cadastrar'}
        </Button>
      </ContainerForm>
      <ContainerInfo>
        <TitleInfo>Bem vindo ao</TitleInfo>
        <TitleInfo style={{ display: 'flex', fontSize: '45px', alignItems: 'center' }}>
          <Icon icon={outlineChat} color='#7E57C2' size={40} style={{ marginRight: 5, marginTop: 5 }} />
          Threechat
          </TitleInfo>
        <LineDecoration style={{ borderTop: '1.5px solid #7E57C2', width: '350px' }} />
        <TextInfo>
          Esse chat é referente ao Projeto Final da N2 de Sistemas Distribuídos desenvolvido pela turma do 6º Período do curso de Sistemas de Informação da Faculdade FASAM.
          A equipe optou por criar um sistema de Chat que abrange um grupo com todos os inscritos na plataforma (sala geral),
          implementando a comunicação indireta, e conversas privadas com cada usuário que representa a conexão direta.
        </TextInfo>
      </ContainerInfo>
    </Container>
  )
}

export default Register