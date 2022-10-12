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
  width: 1200px;
  height: 700px;
  .wordcloud-section {
    margin: 0 auto;
  }

  /* .compare-button {
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
  } */
`;
