import styled from "styled-components";

export const ViewArea = styled.div`
  display: flex;
  gap: 10px;
`;

export const ToggleArea = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 20px;

  margin-top: 30px;
  margin-left: 25px;
  margin-bottom: 56px;

  color: #888080;
  font-size: 16px;

  .arrow {
    display: inline-block;
    width: 10px;
    height: 10px;

    margin-left: 5px;

    transform: rotate(135deg);

    border-top: 1px solid #888080;
    border-left: 1px solid #888080;
  }
`;

export const ModalView = styled.div`
  box-sizing: border-box;

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

export const Blur = styled.label`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 999;

  background-color: gray;
  opacity: 0.33;
`;

export const Container = styled.div`
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

export const BillProcResultArea = styled.div`
  display: flex;
  flex: 1;
`;

export const BillInformationArea = styled.div`
  display: flex;
`;

export const BillProc = styled.div`
  width: 40%;

  display: flex;
  align-items: center;

  padding-left: 14px;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #888080;
`;

export const BillNameArea = styled.div`
  display: flex;
`;

export const BillName = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  padding-left: 14px;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #888080;
`;

export const Title = styled.div`
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

export const InfoArea = styled.div`
  display: flex;

  width: 40%;
`;

export const BillInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 10px;

  padding-left: 14px;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #888080;
`;

export const BillCommittee = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  padding-left: 14px;

  border: solid;
  border-width: 0 1px 1px 0;
  border-color: #888080;
`;

export const BorderLine = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 0px;
  left: 1px;
  top: 45px;

  border: 3px solid #830b0b;
`;
export const BillDetailArea = styled.div`
  box-sizing: border-box;
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

export default ViewArea;
