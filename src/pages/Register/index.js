import React, { useState, useRef } from 'react';
import { Container, ContainerForm, ContainerInfo, ContainerTitleForm, TitleForm, LineDecoration, Input, Button, TitleInfo, TextInfo } from './styles';

const Register = () => {

  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFilename] = useState('');
  const inputFile = useRef(null);

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
        <Button>Cadastrar</Button>
      </ContainerForm>
      <ContainerInfo>
        <TitleInfo>Bem vindo ao</TitleInfo>
        <TitleInfo style={{ fontSize: '45px' }}>Threechat</TitleInfo>
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