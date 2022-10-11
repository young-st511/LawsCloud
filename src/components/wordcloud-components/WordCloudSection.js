import {useState} from "react";
import styled from "styled-components";
import AgeSelect from "./AgeSelect";
import WordCloud from "./WordCloud";
import Title from "./Title";
import YearSelect from "./YearSelect";
import SearchBar from "./SearchBar(not-use)";

const agesAndYears = {
  21: {firstYear: 2020, yearsNum: 3},
  20: {firstYear: 2016, yearsNum: 5},
  19: {firstYear: 2012, yearsNum: 5},
};

const WordCloudSection = () => {
  const [year, setYear] = useState(2022);
  const [age, setAge] = useState(21);
  const [search, setSearch] = useState("");

  return (
    <StyledWrapper>
      <Title />
      <SearchBar search={search} setSearch={setSearch} />

      <WordCloud age={age} year={year} setSearch={setSearch} />
      <AgeSelect age={age} setAge={setAge} setYear={setYear} agesAndYears={agesAndYears} />
      <YearSelect
        year={year}
        setYear={setYear}
        firstYear={agesAndYears[age].firstYear}
        yearsNumber={agesAndYears[age].yearsNum}
      />
      <button className='compare-button'>비교해보기</button>
    </StyledWrapper>
  );
};

export default WordCloudSection;

const StyledWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  .compare-button {
    margin: 10px auto;
    display: flex;
    width: 110px;
    height: 36px;

    background: #000000;
    border-radius: 15px;
    border-style: none;

    font-weight: 600;
    font-size: 16px;
    color: #ffffff;

    align-items: center;
    justify-content: center;
    text-align: center;
    :hover {
      background-color: #223131;
      transition: background-color 0.24s;
    }
  }
`;
