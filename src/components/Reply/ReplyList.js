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
        <span className="reply-id">
          {data.creatorId + " "}({data.ip})
        </span>
        <ReplyText>{data.text}</ReplyText>
        <ReplyDelete data={data} id={billId} />
      </Reply>
    );
  });

  return <ReplyArea>{Replys}</ReplyArea>;
}

const ReplyArea = styled.div`
  width: min(100%, 1200px);
  border: 1px solid #000;
  border-width: 3px 0 0 0;
  padding: 12px 0;
  font-weight: 500;
  .reply-id {
    width: 200px;
    margin-left: 30px;
    color: #969696;
    overflow-wrap: break-word;
  }
`;

const Reply = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  margin: auto 0;
  display: flex;
  width: min(100%, 1200px);
  justify-content: space-between;
`;

const ReplyText = styled.div`
  width: min(100%, 820px);
  color: #000;
  overflow-wrap: break-word;
`;
