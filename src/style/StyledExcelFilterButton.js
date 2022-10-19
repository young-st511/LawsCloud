import styled from "styled-components";

export const StyledToggleButton = styled.button`
  position: absolute;
  top: 17px;
  right: 0;
  left: min(16vw, 110px);
  cursor: pointer;
  color: ${(props) => (props.toggle ? "gray" : "white")};
  appearance: none;
  background-color: transparent;
  border: 0;
  padding: 0;
`;

export const StyledcommitteeList = styled.ul`
  position: absolute;
  top: 34px;
  right: 20px;
  display: ${(props) => (props.toggle ? "flex" : "none")};
  flex-direction: column;
  width: 120px;
  height: 70vh;
  overflow: scroll;
  list-style: none;
  border: 1px solid #c6c6c6;
  border-radius: 10px;
  padding: 5px;
  background: #ffffff;
  z-index: 9999;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    width: 100%;
    /* height: 50px; */
    border: 0;
    border-radius: 10px;
    padding: 10px 5px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    background: none;
    transition: background 0.2s ease-in-out;
  }
  button:hover {
    background: #e6e6e6;
  }
`;
