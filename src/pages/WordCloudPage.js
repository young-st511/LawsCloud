import React from "react";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import WordCloudSection from "../components/wordcloud-components/WordCloudSection";
import StyledWrapper from "../style/StyledWordCloudPage";

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
