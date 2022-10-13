import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ComparedWordCloudsSection from "./ComparedWordCloudsSection";

const mockSearch = (keyword) => console.log(keyword);

function ComparedWordCloudPage({setSearch = mockSearch}) {
  return (
    <StyledWrapper>
      <ComparedWordCloudsSection setSearch={setSearch} compareNumber={3} cloudSize={70} />
    </StyledWrapper>
  );
}

ComparedWordCloudPage.propTypes = {
  setSearch: PropTypes.func,
};

export default ComparedWordCloudPage;

const StyledWrapper = styled.div`
  width: 1200px;
  height: 700px;
  .compared-wordclouds {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    width: 1200px;
    padding: 50px 10px;
    margin: 0 auto;
  }
`;
