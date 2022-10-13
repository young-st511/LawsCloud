import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import ComparedWordCloudsSection from "../components/wordcloud-components/ComparedWordCloudsSection";

function ComparedWordCloudPage() {
  const [ageData, setAgeData] = useState(21);
  const navigate = useNavigate();

  const setSearch = (keyword) => {
    console.log(keyword, ageData);
    navigate("/compare");
    // navigate("/bills", {
    //   state: {
    //     inputValue: keyword,
    //     age: ageData,
    //   },
    // });
  };
  return (
    <StyledWrapper>
      <ComparedWordCloudsSection setSearch={setSearch} setAgeData={setAgeData} compareNumber={3} cloudSize={60} />
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
