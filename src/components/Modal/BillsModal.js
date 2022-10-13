import React from "react";

import ModalFrame from "./ModalFrame";
import BillsContents from "../BillsContents/BillsContents";
import Reply from "../Reply/Reply";

function BillsModal({billsInformation, setOnModal}) {
  return (
    <ModalFrame setOnModal={setOnModal}>
      <BillsContents billsInformation={billsInformation} />

      <Reply />
    </ModalFrame>
  );
}

export default BillsModal;
