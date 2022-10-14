import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function BillsDetail({billId}) {
  const url = `https://likms.assembly.go.kr/bill/summaryPopup.do?billId=${billId}`;

  return (
    <BillDetailArea>
      <iframe id="iframe" className="detail" src={url} title="발의안" width="100%" height="100%" />
    </BillDetailArea>
  );
}

BillsDetail.proptype = {
  billId: PropTypes.string.isRequired,
};

const BillDetailArea = styled.div`
  height: 460px;

  display: flex;
  flex: 1;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #888080;

  .detail {
    border: none;
  }
`;

export default BillsDetail;
