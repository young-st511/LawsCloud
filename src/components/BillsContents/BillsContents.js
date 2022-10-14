import React from "react";
import BillsDetail from "./BillsDetail";
import styled from "styled-components";
import PropTypes from "prop-types";

function BillsContents({billsInformation}) {
  return (
    <Container>
      <BorderLine />
      <BillNameArea>
        <Title>의안명</Title>
        <BillName>{billsInformation.BILL_NAME}</BillName>
      </BillNameArea>
      <BillInformationArea>
        <InfoArea>
          <Title>발의정보</Title>
          <BillInfo>
            <p>{billsInformation.PROPOSER},</p>
            <p>제{billsInformation.BILL_NO}호</p>
          </BillInfo>
        </InfoArea>
        <BillProcResultArea>
          <Title>국회진행상황</Title>
          <BillProc>
            {billsInformation.PROC_RESULT} {billsInformation.PROPOSE_DT}
          </BillProc>
          <BillCommittee>{billsInformation.COMMITTEE}</BillCommittee>
        </BillProcResultArea>
      </BillInformationArea>
      <BillInformationArea>
        <BillsDetail billId={billsInformation.BILL_ID} />
      </BillInformationArea>
    </Container>
  );
}

BillsContents.propTypes = {
  billsInformation: PropTypes.shape({
    BILL_NAME: PropTypes.string,
    PROPOSER: PropTypes.string,
    BILL_NO: PropTypes.string,
    PROC_RESULT: PropTypes.string,
    PROPESE_DT: PropTypes.string,
    COMMITTEE: PropTypes.string,
    BILL_ID: PropTypes.string,
  }),
};

const Container = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  min-width: 900px;
  max-width: 1200px;

  margin: auto;

  border: solid;
  border-width: 1px 0 0 1px;
  border-color: #888080;
`;

const BillProcResultArea = styled.div`
  display: flex;
  flex: 1;
`;

const BillInformationArea = styled.div`
  display: flex;
`;

const BillProc = styled.div`
  width: 40%;

  display: flex;
  align-items: center;

  padding-left: 14px;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #888080;
`;

const BillNameArea = styled.div`
  display: flex;
`;

const BillName = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  padding-left: 14px;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #888080;
`;

const Title = styled.div`
  width: 168px;
  height: 64px;

  display: flex;
  align-items: center;

  padding-left: 41px;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  background-color: #f0f0f0;
  color: #000000;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #888080;
`;

const InfoArea = styled.div`
  display: flex;

  width: 40%;
`;

const BillInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 10px;

  padding-left: 14px;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #888080;
`;

const BillCommittee = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  padding-left: 14px;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #888080;
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
