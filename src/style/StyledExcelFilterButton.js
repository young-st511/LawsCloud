import styled from "styled-components";

export const StyledToggleButton = styled.div`
  position: absolute;
  top: 0px;
  right: 20px;
`;

export const StyledcommitteeList = styled.ul`
  position: absolute;
  top: 40px;
  right: -10px;
  display: ${(props) => (props.toggle ? "flex" : "none")};
  flex-direction: column;
  width: 100px;
  list-style: none;
  border: 1px solid gray;
  padding: 5px;
  background: #d3d3d3;
  z-index:9999;
  button {
    width: 100%;
    height: 50px;
    border: 0;
    padding:0;
    text-align: start;
    background: #d3d3d3;
  }
  li: hover,
  button: hover{
    background: gray;
  }
`;
