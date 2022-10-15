import styled from "styled-components";

export const StyledBillTable = styled.table`
  background-color: white;
  width: min(100%, 1200px);
  margin: auto; ;
`;

export const StyledBillThead = styled.thead`
  th {
    height: 50px;
    font-weight: 500;
    line-height: 50px;
    color: gray;
    background-color: #f6eded;
    border-bottom: 1px solid #d3d3d3;
    text-align: center;
    white-space: nowrap;
  }
  th:nth-child(1) {
    width: 40%;
  }
  th:nth-child(2),
  th:nth-child(3) {
    position: relative;
    width: 20%;
  }
  th:nth-child(4),
  th:nth-child(5) {
    width: 10%;
  }
`;

export const StyledBillTbody = styled.tbody`
  td {
    height: 5vh;
    border-bottom: 1px solid #d3d3d3;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    font-size: 1em;
    padding-left: 10px;
  }
  td:nth-child(1) {
    text-align: left;
  }
  td:nth-child(4) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
