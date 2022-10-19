import React, {useState} from "react";
import styled from "styled-components";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {dbService} from "../Firebase/firebase";
import {v4 as uuidv4} from "uuid";
import axios from "axios";
import ReplyList from "./ReplyList";

export default function Reply({billId, billAge}) {
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
    const ipInfo = userIpInfo.data.ip;
    const userInfo = ipInfo.split(".").splice(0, 2).join(".");
    await addDoc(collection(dbService, `${billId}`), {
      text: content,
      createdAt: serverTimestamp(),
      creatorId: id,
      password: password,
      ip: userInfo,
      key: uuidv4(),
      age: Number(billAge),
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
        <SubmitButton type="submit" value="댓글 작성" />
      </ReplyArea>
    </>
  );
}

const UserInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 0;
`;

const ReplyArea = styled.form`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: baseline;
  margin: 0;
  padding: 15px 30px 70px 30px;
  width: min(100%, 1200px);
  border-top: 3px solid black;
`;

const ReplyId = styled.input`
  width: 210px;
  height: 40px;
  margin-bottom: 10px;
  padding-left: 10px;

  font-size: 16px;
  color: #000000;
  ::placeholder {
    color: #969696;
  }
  border: 1px solid #c6c6c6;
`;

const ReplyPassword = styled.input`
  width: 210px;
  height: 40px;
  padding-left: 10px;

  font-size: 16px;
  color: #000000;
  ::placeholder {
    color: #969696;
  }
  border: 1px solid #c6c6c6;
`;

const InputReply = styled.textarea`
  width: 900px;
  height: 155px;
  resize: none;
  padding-left: 10px;
  padding-top: 10px;
  border: 1px solid #c6c6c6;

  font-size: 16px;
  color: #000000;
  ::placeholder {
    color: #969696;
  }
`;

const SubmitButton = styled.input`
  position: absolute;
  bottom: 20px;
  right: 30px;
  width: 92px;
  height: 36px;

  color: white;
  font-weight: 600;
  font-size: 14px;

  background: #000000;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  transition: background-color 0.2s;

  :hover {
    background-color: #565656;
  }
`;
