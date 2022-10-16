import styled from "styled-components";

export const StyledBillTable = styled.div`
  background-color: white;
  width: min(100%, 1200px);
  margin: auto; ;
`;

export const StyledBillThead = styled.div`
  display: flex;
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    font-weight: 500;
    line-height: 50px;
    color: gray;
    background-color: #f6eded;
    border-bottom: 1px solid #d3d3d3;
  }
  .header:nth-child(1) {
    width: min(40%, 480px);
  }
  .header:nth-child(2),
  .header:nth-child(3) {
    width: min(20%, 240px);
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
    border-bottom: 1px solid #d3d3d3;
    font-size: 1em;
    align-items: center;
    justify-content: center;
  }

  .item:nth-child(1) {
    justify-content: start;
    width: min(40%, 480px);
    padding-left: 10px;
  }

  .item:nth-child(2),
  .item:nth-child(3) {
    width: min(20%, 240px);
  }
  .item:nth-child(4),
  .item:nth-child(5) {
    width: max(10%, 120px);
  }
`;
