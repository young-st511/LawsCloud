import React from "react";
import PropTypes from "prop-types";
import WordCloudSection from "./WordCloudSection";

function ComparedWordCloudsSection({setSearch, compareNumber = 3, cloudSize}) {
  const compareNum = new Array(compareNumber).fill(1).map((elem, i) => elem + i);

  return (
    <section className="compared-wordclouds">
      {compareNum.map((num) => (
        <WordCloudSection setSearch={setSearch} size={cloudSize} elemId={`wordcloud${num}`} key={`wordcloud-${num}`} />
      ))}
    </section>
  );
}

ComparedWordCloudsSection.propTypes = {
  setSearch: PropTypes.func.isRequired,
  compareNumber: PropTypes.number,
  cloudSize: PropTypes.number.isRequired,
};

export default ComparedWordCloudsSection;
