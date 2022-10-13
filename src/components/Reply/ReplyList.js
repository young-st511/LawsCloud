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

  console.log(replysInfo.createdAt);

  const Replys = replysInfo.map((data) => {
    return (
      <Reply key={data.key}>
        <span>
          {data.creatorId}({data.ip})
        </span>
        <ReplyText>{data.text}</ReplyText>
        <span>
          {/* {data.createdAt}{" "} */}
          <img
            src="/icons/close.png"
            alt="delete"
            style={{width: "12px", height: "12px", padding: "2px", cursor: "pointer"}}
          />
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
