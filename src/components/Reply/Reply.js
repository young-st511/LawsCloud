import React, {useState} from "react";
import styled from "styled-components";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {dbService} from "../Firebase/firebase";
import {v4 as uuidv4} from "uuid";
import axios from "axios";
import ReplyList from "./ReplyList";

export default function Reply({billId}) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");

  const onChange = (e) => {
    const {
      target: {name, value},
    } = e;
    if (name === "id") {
      setId(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "content") {
      setContent(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const userIpInfo = await axios("https://api.ipify.org/?format=json");
    const userIp = userIpInfo.data.ip;
    await addDoc(collection(dbService, `${billId}`), {
      text: content,
      createdAt: serverTimestamp(),
      creatorId: id,
      password: password,
      ip: userIp,
      key: uuidv4(),
    });
    setPassword(""), setId(""), setContent("");
  };

  return (
    <>
      <ReplyList billId={billId} />
      <ReplyArea onSubmit={onSubmit}>
        <UserInfoArea>
          <ReplyId type="text" name="id" placeholder="ID" required value={id} onChange={onChange}></ReplyId>
          <ReplyPassword
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}></ReplyPassword>
        </UserInfoArea>
        <InputReply
          type="text"
          name="content"
          placeholder="이 법안에 대해 어떻게 생각하세요?"
          required
          value={content}
          onChange={onChange}></InputReply>
        <SubmitButton type="submit" value="작성" />
      </ReplyArea>
    </>
  );
}

const ReplyId = styled.input`
  width: 140px;
  height: 30px;
  margin-bottom: 2px;
`;

const ReplyPassword = styled.input`
  width: 140px;
  height: 30px;
`;

const InputReply = styled.input`
  width: 984px;
  height: 106px;
`;

const UserInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2px 0 2px;
`;

const ReplyArea = styled.form`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  backgroung-color: gray;
  padding: 4px 4px 38px 4px;
  position: relative;
  width: min(100%, 1200px);
  margin: 0 auto;
`;

const SubmitButton = styled.input`
  font-weigth: bold;
  background-color: black;
  position: absolute;
  bottom: 2px;
  right: 16px;
  width: 85px;
  height: 30px;
  color: white;
  cursor: pointer;
`;
