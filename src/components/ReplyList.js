import React from "react";
import styled from "styled-components";

export default function ReplyList() {
  const replyinfo = [
    {
      id: "ㅇㅇ",
      ip: "123.122",
      content: "이건 좀...",
      time: "10.08 12:02:53",
    },
    {
      id: "ㅇㅇ",
      ip: "123.123",
      content: "괜찮은듯?",
      time: "10.08 12:02:53",
    },
    {
      id: "ㅇㅇ",
      ip: "123.124",
      content: "이걸 왜 지금?",
      time: "10.08 12:02:53",
    },
    {
      id: "ㅇㅇ",
      ip: "123.125",
      content: "지금 아니면 언제함",
      time: "10.08 12:02:53",
    },
    {
      id: "ㅇㅇ",
      ip: "123.126",
      content: "굳",
      time: "10.08 12:02:53",
    },
  ];

  const Replys = replyinfo.map((data) => {
    return (
      <Reply key={data.ip}>
        <span>
          {data.id}({data.ip})
        </span>
        <ReplyText>{data.content}</ReplyText>
        <span>
          {data.time}{" "}
          <img src="/icons/close.png" alt="delete" style={{width: "12px", height: "12px", padding: "2px"}} />
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
  justify-content: space-between;
`;

const ReplyText = styled.div`
  width: 820px;
`;
