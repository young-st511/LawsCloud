import React from "react";
import PropTypes from "prop-types";
import WordCloudSection from "../components/wordcloud-components/WordCloudSection";
import styled from "styled-components";

const mockSearch = (keyword) => console.log(keyword);

const WordCloudPage = ({setSearch = mockSearch}) => {
  return (
    <StyledWrapper>
      <WordCloudSection setSearch={setSearch} size={100} />
      {/* <button type="button" className="compare-button">
        비교해보기
      </button> */}
    </StyledWrapper>
  );
};

export default WordCloudPage;

WordCloudPage.propTypes = {
  setSearch: PropTypes.func,
};

const StyledWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  height: 700px;
  .wordcloud-section {
    margin: 0 auto;
  }
`;
