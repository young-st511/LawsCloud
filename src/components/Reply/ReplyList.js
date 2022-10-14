import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {onSnapshot, collection} from "firebase/firestore";
import {dbService} from "../Firebase/firebase";

export default function ReplyList({billId}) {
  const [replysInfo, setReplysInfo] = useState([]);

  useEffect(() => {
    onSnapshot(collection(dbService, `${billId}`), (sanpshot) => {
      const replyArray = sanpshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReplysInfo(replyArray);
    });
  }, []);

  const onDeleteClick = async (data) => {
    const ok = window.confirm("진짜로 삭제합니까?");
    if (ok) {
      await deleteDoc(doc(dbService, `${billId}`, `${data}`));
    }
  };

  const Replys = replysInfo.map((data) => {
    return (
      <Reply key={data.key}>
        <span>
          {data.creatorId}({data.ip})
        </span>
        <ReplyText>{data.text}</ReplyText>
        <span id={data.key} onClick={onDeleteClick}>
          {/* {data.createdAt}{" "} */}
          <DeleteButton src="/icons/close.png" alt="delete" />
        </span>
      </Reply>
    );
  });

  return <div>{Replys}</div>;
}

const Reply = styled.div`
  padding: 8px 4px 8px 4px;
  display: flex;
  width: 1160px;
  min-width: 900px;
  justify-content: space-between;
`;

const ReplyText = styled.div`
  width: 820px;
`;

const DeleteButton = styled.img`
  width: 12px;
  height: 12px;
  padding: 2px;
  cursor: pointer;
`;
