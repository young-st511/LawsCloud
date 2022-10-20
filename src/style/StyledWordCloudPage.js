import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  margin: 0 auto;
  .wordcloud-section {
    margin: 0 auto;
  }
  .compare-button {
    display: flex;
    margin: 0px auto;
    width: 110px;
    height: 36px;

    background: #000000;
    border-radius: 15px;
    border-style: none;

    font-weight: 600;
    font-size: 16px;
    color: #ffffff;

    align-items: center;
    justify-content: center;
    text-align: center;
    :hover {
      background-color: #223131;
      transition: background-color 0.24s;
    }
  }
`;

export default StyledWrapper;
