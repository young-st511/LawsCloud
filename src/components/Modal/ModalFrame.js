import React from "react";
import ModalPortal from "./ModalPortal";
import {ModalView, Blur} from "../../style/StyledModal";

function ModalFrame({children, setOnModal}) {
  return (
    <ModalPortal>
      <Blur
        onClick={() => {
          setOnModal(false);
        }}></Blur>
      <ModalView>
        <div>{children}</div>
      </ModalView>
    </ModalPortal>
  );
}

export default ModalFrame;
