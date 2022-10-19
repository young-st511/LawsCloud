import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AgeSelect = ({age, setAge, setYear, agesAndYears, size = 100}) => {
  const handleChange = ({target: {value}}) => {
    setAge(Number(value));
    setYear(Number(agesAndYears[value].firstYear));
    // console.log(`now age: ${value} 대`);
  };
  const ages = [];
  for (const key in agesAndYears) {
    if (Object.hasOwnProperty.call(agesAndYears, key)) {
      ages.push(key);
    }
  }

  return (
    <StyledWrapper className="age-select" size={size}>
      <div className="text">제</div>
      <select value={age} onChange={handleChange}>
        {ages.map((elem) => (
          <option value={elem} key={`${elem}th`}>
            {elem}
          </option>
        ))}
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
