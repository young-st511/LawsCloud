import styled from "styled-components";

export const StyledSearchArea = styled.div`
  display: flex;
  height: calc(4vh + 2px);
  width: max(50vw, 400px);
  max-width: 700px;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 10px;
  input {
    box-sizing: border-box;
    height: 4vh;
    max-height: 60px;
    width: max(45vw, 350px);
    font-size: 16px;
    border: 0;
    border-radius: 2px;
    padding: 5px;
    margin-left: 5px;
    outline: 0 none;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }

  select {
    width: max(5vw, 50px);
    height: 4vh;
    font-size: 15px;
    background: url("https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png")
      calc(100% - 5px) center no-repeat;
    background-size: 20px;
    border: 0;
    outline: 0 none;
    margin-left: 20px;
  }
  button {
    height: 4vh;
    margin-right: 8px;
    border: 0;
    background-color: #ffffff;
  }
  img {
    height: 2vh;
  }
`;
