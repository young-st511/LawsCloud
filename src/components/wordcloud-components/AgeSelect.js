import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AgeSelect = ({age, setAge, setYear, agesAndYears, size = 100}) => {
  const handleChange = ({target: {value}}) => {
    setAge(value);
    setYear(agesAndYears[value].firstYear);
    console.log(`now age: ${value} 대`);
  };

  return (
    <StyledWrapper className="age-select" size={size}>
      <div className="text">제</div>
      <select value={age} onChange={handleChange}>
        <option value={19}>19</option>
        <option value={20}>20</option>
        <option value={21}>21</option>
      </select>
      <div>대 국회의원들의 생각은?</div>
    </StyledWrapper>
  );
};

AgeSelect.propTypes = {
  age: PropTypes.number.isRequired,
  setAge: PropTypes.func.isRequired,
  setYear: PropTypes.func.isRequired,
  agesAndYears: PropTypes.object.isRequired,
  size: PropTypes.number,
};

export default AgeSelect;

const StyledWrapper = styled.div`
  display: flex;
  width: ${({size}) => (size / 100) * 400}px;
  margin: 20px auto;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-weight: 600;
  font-size: ${({size}) => (size / 100) * 21}px;

  select {
    font-weight: 700;
    font-size: ${({size}) => (size / 100) * 20}px;
  }

  > div {
    margin-right: 5px;
  }
  select + div {
    margin-left: 5px;
  }
`;
