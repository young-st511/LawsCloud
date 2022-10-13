import React, {useState} from "react";
import styled from "styled-components";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {dbService} from "./Firebase/firebase";

export default function Reply() {
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
    await addDoc(collection(dbService, "lawsCloud"), {
      text: content,
      createdAt: serverTimestamp(),
      creatorId: id,
      password: password,
    });
    setPassword(""), setId(""), setContent("");
  };

  return (
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
  display: flex;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  backgroung-color: gray;
  padding: 4px 4px 38px 4px;
  position: relative;
  width: 1160px;
`;

const SubmitButton = styled.input`
  font-weigth: bold;
  background-color: black;
  position: absolute;
  bottom: 2px;
  right: 4px;
  width: 85px;
  height: 30px;
  color: white;
`;
