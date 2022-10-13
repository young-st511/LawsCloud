import React from "react";

import ModalFrame from "./ModalFrame";
import BillsContents from "../BillsContents/BillsContents";

function BillsModal({billsInformation, setOnModal}) {
  return (
    <ModalFrame setOnModal={setOnModal}>
      <BillsContents billsInformation={billsInformation} />
    </ModalFrame>
  );
}

export default BillsModal;
