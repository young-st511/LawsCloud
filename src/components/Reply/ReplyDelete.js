import styled from "styled-components";
import React from "react";
import {deleteDoc, doc} from "firebase/firestore";
import {dbService} from "../Firebase/firebase";
export default function ReplyDelete({data, id}) {
  const onDeleteClick = async () => {
    const ok = window.prompt("비밀번호를 입력하세요");
    if (ok === data.password) {
      await deleteDoc(doc(dbService, `${id}`, `${data.id}`));
    } else {
      window.alert("비밀번호가 다릅니다");
    }
  };
  return (
    <span onClick={onDeleteClick}>
      <DeleteButton src="/icons/close.png" alt="delete" />
    </span>
  );
}

const DeleteButton = styled.img`
  width: 12px;
  height: 12px;
  border-radius: 4px;
  margin-right: 30px;
  padding: 6px;
  cursor: pointer;

  transition: background-color 0.2s;
  :hover {
    background-color: #e6e6e6;
  }
`;
