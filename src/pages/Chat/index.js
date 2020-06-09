import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import ItemUserList from "../../components/ItemUserList";
import generalIcon from "../../assets/general.png";
import {
  Container,
  ContainerChat,
  ContainerUsers,
  TitleApp,
  ContainerTitleUsers,
  LineDecoration,
  TitleUsers,
  ListUsers,
} from "./styles";

const socket = socketIOClient("http://localhost:3001", {
  transport: ["websocket"],
});

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("sendMessage", (message) => {
      setMessages([...message, message]);
    });
  }, []);

  const sendMessage = () => {
    socket.emit("sendMessage", {
      to: "general",
      message,
    });
  };

  return (
    <Container>
      <ContainerUsers>
        <TitleApp>Threechat</TitleApp>
        <ItemUserList user={{ name: "Geral", photo: generalIcon }} />
        <ContainerTitleUsers>
          <TitleUsers>Usuários</TitleUsers>
          <LineDecoration />
        </ContainerTitleUsers>
        <ListUsers>
          <ItemUserList user={{ name: "Geral" }} />
          <ItemUserList user={{ name: "Geral" }} />
          <ItemUserList user={{ name: "Geral" }} />
          <ItemUserList user={{ name: "Geral" }} />
          <ItemUserList user={{ name: "Geral" }} />
          <ItemUserList user={{ name: "Geral" }} />
        </ListUsers>
      </ContainerUsers>
      <ContainerChat>
        <textarea
          rows="50"
          cols="50"
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
          style={{ resize: "none" }}
        ></textarea>
        <br />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <br />
        <button type="button" onClick={() => sendMessage()}>
          Enviar
        </button>
      </ContainerChat>
    </Container>
  );
};

export default Chat;
