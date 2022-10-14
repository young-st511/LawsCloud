import React from "react";

import ModalFrame from "./ModalFrame";
import BillsContents from "../BillsContents/BillsContents";
import Reply from "../Reply/Reply";
import PropTypes from "prop-types";

import TotalViews from "../TotalViews/TotalViews";
import styled from "styled-components";

function BillsModal({billsInformation, setOnModal}) {
  return (
    <ModalFrame setOnModal={setOnModal}>
      <BillsContents billsInformation={billsInformation} />
      <ToggleArea>
        <TotalViews billsId={billsInformation.BILL_ID} />
      </ToggleArea>
      <Reply billId={billsInformation.BILL_ID} />
    </ModalFrame>
  );
}

BillsModal.propTypes = {
  billsInformation: PropTypes.shape({
    BILL_NAME: PropTypes.string,
    PROPOSER: PropTypes.string,
    BILL_NO: PropTypes.string,
    PROC_RESULT: PropTypes.string,
    PROPESE_DT: PropTypes.string,
    COMMITTEE: PropTypes.string,
    BILL_ID: PropTypes.string,
  }),
  setOnModal: PropTypes.func,
};

const ToggleArea = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 40px;
`;

export default BillsModal;
