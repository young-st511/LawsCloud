import React from "react";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import WordCloudSection from "../components/wordcloud-components/WordCloudSection";
import styled from "styled-components";

const WordCloudPage = () => {
  const navigate = useNavigate();

  const setSearch = (data) => {
    navigate("/bills", {
      state: {
        inputValue: data.name,
        age: data.age,
      },
    });
  };
  return (
    <StyledWrapper>
      <WordCloudSection setSearch={setSearch} size={100} />
      <button type="button" className="compare-button" onClick={() => navigate("/compare")}>
        비교해보기
      </button>
    </StyledWrapper>
  );
};

export default WordCloudPage;

WordCloudPage.propTypes = {
  setSearch: PropTypes.func,
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  margin: 0 auto;
  .wordcloud-section,
  .compare-button {
    margin: 0 auto;
  }
`;
