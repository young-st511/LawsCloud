import React, {useEffect} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import WordCloud from "wordcloud";
import cloudNouns from "../../wordcloud_data/cloudNouns/cloud-nouns-21th.json";

function Cloud({age, year, elemId, setSearch, size = 100}) {
  useEffect(() => {
    if (!WordCloud.isSupported) return;
    drawCloud(cloudNouns[age + "-" + year], elemId, setSearch, size, age);
  }, [age, year, elemId, setSearch, size]);

  // wordcloud 지원 하지 않는 브라우저 처리
  if (!WordCloud.isSupported) {
    return <Error size={size}>워드클라우드를 지원하지 않는 브라우저 입니다.</Error>;
  }

  WordCloud.miniumFontSize = 10;

  // console.log(WordCloud.isSupported, WordCloud.miniumFontSize);
}

function drawCloud(words, elemId, setSearch, size, age) {
  const adjustWeight = (firstWord) => {
    if (firstWord > 120) {
      return 0.3;
    } else if (firstWord > 80) {
      return 40 / firstWord;
    } else if (firstWord > 30) {
      return 30 / firstWord;
    } else {
      return 20 / firstWord;
    }
  };

  WordCloud(document.getElementById(elemId), {
    list: words,
    shape: "circle",
    fontFamily: "SUIT",
    fontWeight: 700,
    classes: "cloud-word",
    gridSize: words[0][1] < 20 ? 23 : 18,
    minSize: words[0][1] < 20 ? 5 : 8,
    weightFactor: adjustWeight(words[0][1]) * (size / 100),
    minRotation: 0,
    maxRotation: 0,
    age: age,
    click: (item) => {
      setSearch({name: item[0], age: age});
    },
  });
}

Cloud.propTypes = {
  age: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  elemId: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  size: PropTypes.number,
};

export default Cloud;

const Error = styled.div`
  width: ${({size}) => (size / 100) * 600}px;
  padding-top: ${({size}) => (size / 100) * 200}px;
  text-align: center;
  font-size: ${({size}) => (size / 100) * 40}px;
  font-weight: 700;
`;
