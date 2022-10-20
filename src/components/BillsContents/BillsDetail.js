import React from "react";
import PropTypes from "prop-types";
import {BillDetailArea} from "../../style/StyledModal";

function BillsDetail({billId}) {
  const url = `https://likms.assembly.go.kr/bill/summaryPopup.do?billId=${billId}`;

  return (
    <BillDetailArea>
      <iframe id="iframe" className="detail" src={url} title="발의안" width="100%" height="100%" frameBorder="0" />
    </BillDetailArea>
  );
}

BillsDetail.proptype = {
  billId: PropTypes.string.isRequired,
};

export default BillsDetail;
