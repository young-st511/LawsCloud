import React from "react";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import StyledWrapper from "../style/SyledComparedWordCloudPage";
import ComparedWordCloudsSection from "../components/wordcloud-components/ComparedWordCloudsSection";

function ComparedWordCloudPage() {
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
      <ComparedWordCloudsSection setSearch={setSearch} compareNumber={3} cloudSize={60} />
    </StyledWrapper>
  );
}

ComparedWordCloudPage.propTypes = {
  setSearch: PropTypes.func,
};

export default ComparedWordCloudPage;
