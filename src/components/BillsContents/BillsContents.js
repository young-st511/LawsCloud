import React from "react";
import BillsDetail from "./BillsDetail";
import styled from "styled-components";

function BillsContents({billsInformation}) {
  return (
    <Container>
      <BorderLine />
      <BillInformatoinArea>
        <Title>
          <p className="title">의안명</p>
        </Title>
        <div className="billName">{billsInformation.BILL_NAME}</div>
      </BillInformatoinArea>
      <BillInformatoinArea>
        <Title>
          <p className="title">발의정보</p>
        </Title>
        <Informaiton>
          <p>{billsInformation.PROPOSER}</p>,<p>제{billsInformation.BILL_NO}호</p>
        </Informaiton>
        <BillInformatoinArea>
          <Title>
            <p className="title">국회진행상황</p>
          </Title>
          <p className="progress">
            {billsInformation.PROC_RESULT} {billsInformation.PROPOSE_DT}
          </p>
        </BillInformatoinArea>
      </BillInformatoinArea>
      <BillInformatoinArea>
        <BillsDetailTitle>
          <p className="title">제안이유 및 주요내용</p>
        </BillsDetailTitle>
        <BillsDetail billId={billsInformation.BILL_ID} />
      </BillInformatoinArea>
    </Container>
  );
}

const Container = styled.div`
  width: 1200px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: solid;
  border-width: 1px 0 0 1px;
  border-color: #888080;
`;
const BillInformatoinArea = styled.div`
  display: flex;

  .billName {
    width: 85%;

    display: flex;
    align-items: center;
    padding-left: 14px;

    border: solid;
    border-width: 0 1px 1px 0;
    border-color: #888080;
  }

  .progress {
    width: 70vh;

    display: flex;
    align-items: center;

    padding-left: 6px;

    border: solid;
    border-width: 0 1px 1px 0;
    border-color: #888080;
  }
`;

const Title = styled.div`
  width: 168px;
  height: 64px;

  display: flex;
  align-items: center;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  background-color: #f0f0f0;
  color: #000000;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #888080;

  .title {
    padding-left: 41px;
  }
`;

const Informaiton = styled.div`
  display: flex;
  align-items: center;

  padding-left: 14px;
  padding-right: 90px;

  white-space: nowrap;

  border: solid;
  border-width: 0 1px 1px 0;
`;

const BillsDetailTitle = styled(Title)`
  height: 460px;

  .title {
    width: 90px;
    height: 53px;
  }
`;

const BorderLine = styled.div`
  box-sizing: border-box;

  width: 1200px;
  height: 0px;
  left: 1px;
  top: 45px;

  border: 3px solid #830b0b;
`;

export default BillsContents;
