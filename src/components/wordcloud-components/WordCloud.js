import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Cloud from "./Cloud";

const WordCloud = ({age, year, setSearch, size = 100, elemId}) => {
  return (
    <StyledWrapper size={size}>
      <div id={elemId} className="wordcloud">
        <Cloud age={age} year={year} elemId={elemId} setSearch={setSearch} size={Number(size)} />
      </div>
    </StyledWrapper>
  );
};

WordCloud.propTypes = {
  age: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  setSearch: PropTypes.func.isRequired,
  size: PropTypes.number,
  elemId: PropTypes.string.isRequired,
};

export default WordCloud;

const StyledWrapper = styled.div`
  .wordcloud {
    width: ${({size}) => (size / 100) * 600}px;
    height: ${({size}) => (size / 100) * 600}px;
    margin: 20px auto;
    span.cloud-word {
      cursor: pointer;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1) !important;
      }
    }
  }
`;
