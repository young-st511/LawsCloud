import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ComparedWordCloudsSection from "../components/wordcloud-components/ComparedWordCloudsSection";

const mockSearch = (keyword) => console.log(keyword);

function ComparedWordCloudPage({setSearch = mockSearch}) {
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

const StyledWrapper = styled.div`
  height: 700px;
  margin: 0 auto;
  .compared-wordclouds {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    padding: 50px 10px;
    margin: 0 auto;

    .wordcloud {
      box-sizing: content-box;
      padding: 45px 30px;
      border: 1px solid #e6e6e6;
      box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.25), inset 12px 12px 20px rgba(255, 255, 255, 0.25);
      border-radius: 15px;
    }
  }
`;
