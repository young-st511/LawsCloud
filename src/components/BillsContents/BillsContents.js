import React from "react";
import BillsDetail from "./BillsDetail";
import PropTypes from "prop-types";
import {
  Container,
  BillProcResultArea,
  BillInformationArea,
  BillProc,
  BillNameArea,
  BillName,
  Title,
  InfoArea,
  BillInfo,
  BillCommittee,
  BorderLine,
} from "../../style/StyledModal";

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
      <BillInformationArea className="bill-detail">
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

export default BillsContents;
