import React from "react";
import PropTypes from "prop-types";
import StyledWrapper from "../../style/StyledWordCloud";
import Cloud from "./Cloud";

const WordCloud = ({age, year, setSearch, size = 100, elemId}) => {
  return (
    <StyledWrapper size={size} className="wordcloud-back">
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
