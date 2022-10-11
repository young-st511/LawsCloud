import React from "react";
import styled from "styled-components";

const AgeSelect = ({age, setAge, setYear, agesAndYears}) => {
  const handleChange = ({target: {value}}) => {
    setAge(value);
    setYear(agesAndYears[value].firstYear);
    console.log(`now age: ${value} 대`);
  };

  return (
    <StyledWrapper>
      <div className='text'>제</div>
      <select value={age} onChange={handleChange}>
        <option value={19}>19</option>
        <option value={20}>20</option>
        <option value={21}>21</option>
      </select>
      <div>대 국회의원들의 생각은?</div>
    </StyledWrapper>
  );
};

export default AgeSelect;

const StyledWrapper = styled.div`
  display: flex;
  width: 400px;
  margin: 20px auto;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-weight: 600;
  font-size: 21px;

  select {
    font-weight: 700;
    font-size: 20px;
  }

  > div {
    margin-right: 5px;
  }
  select + div {
    margin-left: 5px;
  }
`;
