import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {onSnapshot, collection} from "firebase/firestore";
import {dbService} from "../Firebase/firebase";
import ReplyDelete from "./ReplyDelete";

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
  }, [billId]);

  const Replys = replysInfo.map((data) => {
    return (
      <Reply key={data.key}>
        <span>
          {data.creatorId}({data.ip})
        </span>
        <ReplyText>{data.text}</ReplyText>
        <ReplyDelete data={data} id={billId} />
      </Reply>
    );
  });

  return <div>{Replys}</div>;
}

const Reply = styled.div`
  padding: 8px 0;
  margin: auto;
  display: flex;
  width: min(100%, 1160px);
  justify-content: space-between;
`;

const ReplyText = styled.div`
  width: min(100%, 820px);
`;
