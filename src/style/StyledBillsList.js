import styled from "styled-components";

export const StyledBillTable = styled.div`
  background-color: white;
  width: min(100%, 1200px);
  margin: auto;
  margin-bottom: 2vh;
`;

export const StyledBillThead = styled.div`
  display: flex;
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
    font-weight: 700;
    font-size: min(3vw, 18px);
    line-height: 50px;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid #d3d3d3;
  }
  .subHeader {
    position: absolute;
    height: 10px;
    font-weight: 400;
    font-size: min(2vw, 14px);
  }
  .header:nth-child(1) {
    width: max(40%, 480px);
  }
  .header:nth-child(2),
  .header:nth-child(3) {
    box-sizing: border-box;
    width: max(20%, 240px);
    padding-bottom: 20px;
    height: 51px;
  }
  .header:nth-child(3) {
    position: relative;
  }
  .header:nth-child(4),
  .header:nth-child(5) {
    width: max(10%, 120px);
  }
`;

export const StyledBillTbody = styled.div`
  .item-area {
    display: flex;
    position: relative;
    height: 8vh;
    align-items: center;
  }

  .item {
    display: flex;
    height: 8vh;
    font-size: min(2vw, 18px);
    align-items: center;
    justify-content: center;
    text-align: center;
    border-bottom: 1px solid #d3d3d3;
  }

  .item:nth-child(1) {
    justify-content: start;
    width: max(40%, 480px);
    padding-left: 10px;
    cursor: pointer;
    text-align: left;
  }

  .item:nth-child(2),
  .item:nth-child(3) {
    width: max(20%, 240px);
  }
  .item:nth-child(4),
  .item:nth-child(5) {
    width: max(10%, 120px);
  }
`;
