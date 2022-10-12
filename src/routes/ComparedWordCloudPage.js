import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "../components/wordcloud-components/Title";
import ComparedWordCloudsSection from "./ComparedWordCloudsSection";

const mockSearch = (keyword) => console.log(keyword);

function ComparedWordCloudPage({setSearch = mockSearch}) {
  return (
    <StyledWrapper>
      <Title />
      <ComparedWordCloudsSection setSearch={setSearch} compareNumber={3} cloudSize={70} />
    </StyledWrapper>
  );
}

ComparedWordCloudPage.propTypes = {
  setSearch: PropTypes.func,
};

export default ComparedWordCloudPage;

const StyledWrapper = styled.div`
  .compared-wordclouds {
    display: flex;
    justify-content: space-between;

    width: 1200px;
    height: 1400px;
    padding: 0 100px;
    margin: 0 auto;
  }
`;
