import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  width: ${({size}) => (size / 100) * 300}px;
  margin: 20px auto;
  align-items: center;
  justify-content: center;
  button {
    align-items: center;
    background: none;
    border: none;
    font-weight: 500;
    font-size: ${({size}) => (size / 100) * 24}px;
    font-style: normal;
    color: #c6c6c6;
    transition: all 0.2s ease-in-out;
  }
  .selectedYear {
    color: black;
    font-weight: 600;
  }
`;

export default StyledWrapper;
