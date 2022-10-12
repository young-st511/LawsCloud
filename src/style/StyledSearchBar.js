import styled from "styled-components";

export const StyledSearchArea = styled.div`
  display: flex;
  height: calc(4vh + 2px);
  width: min(35vw, 700px);
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 10px;
  input {
    box-sizing: border-box;
    height: 4vh;
    max-height: 60px;
    width: min(35vw, 700px);
    font-size: 16px;
    border: 0;
    border-radius: 2px;
    padding: 5px;
    margin-left: 5px;
    outline: 0 none;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }
  button {
    height: 4vh;
    margin-right: 8px;
    border: 0;
  }
  img {
    height: 2vh;
  }
`;
