import React from "react";

import ModalFrame from "./ModalFrame";
import BillsContents from "../BillsContents/BillsContents";
import Reply from "../Reply/Reply";
import PropTypes from "prop-types";

import TotalViews from "../TotalViews/TotalViews";
import TotalComments from "../TotalComments/TotalComments";
import {ToggleArea} from "../../style/StyledModal";

import {ReactComponent as ViewIcon} from "../../images/view.svg";

function BillsModal({billsInformation, setOnModal}) {
  return (
    <ModalFrame setOnModal={setOnModal}>
      <BillsContents billsInformation={billsInformation} />
      <ToggleArea>
        <p>
          댓글 <TotalComments billId={billsInformation.BILL_ID} />
          <span className="arrow" />
        </p>
        <span>
          <ViewIcon width={23} height={20}>
            <label title="조회수" />
          </ViewIcon>
          <TotalViews billId={billsInformation.BILL_ID} />
        </span>
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

export default BillsModal;
