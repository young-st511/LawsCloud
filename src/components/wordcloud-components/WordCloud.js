import React from "react";
import styled from "styled-components";
import Cloud from "./Cloud";

const WordCloud = ({age, year, setSearch}) => {
  return (
    <StyledWrapper id='wordcloud'>
      <Cloud age={age} year={year} elemId={"wordcloud"} setSearch={setSearch} />
    </StyledWrapper>
  );
};

export default WordCloud;

const StyledWrapper = styled.div`
  width: 600px;
  height: 600px;
  margin: 20px auto;

  span.cloud-word {
    cursor: pointer;
    transition: transform 0.3s;
  }
  span:hover {
    transform: scale(1.1) !important;
  }
`;
