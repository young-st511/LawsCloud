import React, {useState} from "react";
import WordCloudPage from "./pages/WordCloudPage";
import ComparedWordCloudPage from "./pages/ComparedWordCloudPage";
import Title from "./components/Title";
import styled from "styled-components";

const TestCloud = () => {
  const [compare, setCompare] = useState(false);

  const handleClick = () => {
    setCompare(!compare);
  };
  return (
    <StyledWrapper>
      <Title />
      {compare ? <ComparedWordCloudPage /> : <WordCloudPage />}
      <button type="button" className="compare-button" onClick={handleClick}>
        비교해보기
      </button>
    </StyledWrapper>
  );
};

export default TestCloud;

const StyledWrapper = styled.div`
  width: 1400px;
  margin: 0 auto;

  .compare-button {
    margin: 10px auto;
    display: flex;
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
