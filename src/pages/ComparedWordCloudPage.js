import React from "react";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
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

const StyledWrapper = styled.div`
  height: 700px;
  margin: 0 auto;
  .compared-wordclouds {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    padding: 50px 10px;
    margin: 0 auto;

    .wordcloud-back {
      box-sizing: border-box;
      margin: 45px 30px;
      box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.25), inset 12px 12px 20px rgba(255, 255, 255, 0.25);
      border: 1px solid #e6e6e6;
      border-radius: 15px;
      .wordcloud {
        padding: 15px 5px;
        box-sizing: content-box;
      }
    }
  }
`;
