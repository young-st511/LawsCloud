import {useEffect} from "react";
import styled from "styled-components";
import WordCloud from "wordcloud";
import cloudNouns from "../wordcloud_data/cloudNouns/cloud-nouns.json";

function Cloud({age, year, elemId, setSearch}) {
  useEffect(() => {
    if (!WordCloud.isSupported) return;
    drawCloud(cloudNouns[age + "-" + year], elemId, setSearch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [age, year, elemId, setSearch]);

  // wordcloud 지원 하지 않는 브라우저 처리
  if (!WordCloud.isSupported) {
    return <Error>워드클라우드를 지원하지 않는 브라우저 입니다.</Error>;
  }

  WordCloud.miniumFontSize = 10;

  // console.log(WordCloud.isSupported, WordCloud.miniumFontSize);
}

function drawCloud(words, elemId, setSearch) {
  WordCloud(document.getElementById(elemId), {
    list: words,
    shape: "circle",
    fontFamily: "SUIT",
    fontWeight: 700,
    classes: "cloud-word",
    gridSize: words[0][1] < 20 ? 23 : 18,
    minSize: words[0][1] < 20 ? 5 : 7,
    weightFactor: words[0][1] < 20 ? 3 : 0.3,
    minRotation: 0,
    maxRotation: 0,
    click: (item) => setSearch(item[0]),
  });
}

export default Cloud;

const Error = styled.div`
  width: 600px;
  padding-top: 200px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
`;
