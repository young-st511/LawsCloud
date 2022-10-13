import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import WordCloudSection from "../components/wordcloud-components/WordCloudSection";
import styled from "styled-components";

const WordCloudPage = () => {
  const [ageData, setAgeData] = useState(0);
  const navigate = useNavigate();

  const setSearch = (keyword) => {
    navigate("/bills", {
      state: {
        inputValue: keyword,
        age: ageData,
      },
    });
  };
  return (
    <StyledWrapper>
      <WordCloudSection setSearch={setSearch} setAgeData={setAgeData} size={100} />
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
  margin: 0 auto;
  height: 700px;
  .wordcloud-section {
    margin: 0 auto;
  }
`;
