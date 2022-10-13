import React from "react";
import ModalPortal from "./ModalPortal";
import styled from "styled-components";

function ModalFrame({children, setOnModal}) {
  return (
    <ModalPortal>
      <Blur
        className="blur"
        onClick={() => {
          setOnModal(false);
        }}></Blur>
      <ModalView>
        <div>{children}</div>
      </ModalView>
    </ModalPortal>
  );
}

const ModalView = styled.div`
  width: 1200px;
  height: 700px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  z-index: 1000;

  overflow: scroll;

  background-color: white;
`;

const Blur = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: gray;
  opacity: 0.33;
`;

export default ModalFrame;
