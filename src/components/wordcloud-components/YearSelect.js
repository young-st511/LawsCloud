import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const YearSelect = ({year, setYear, firstYear, yearsNumber, size = 100}) => {
  const years = new Array(yearsNumber).fill(0).map((elem) => elem + firstYear++);

  const handleClick = ({target}) => {
    if (target.tagName !== "BUTTON") return;
    setYear(Number(target.value));
    target.parentElement.querySelectorAll("#year-button").forEach((elem) => (elem.className = ""));
    target.classList.add("selectedYear");
    // console.log(`selected year: ${target.value}년`);`
  };

  return (
    <StyledWrapper onClick={handleClick} size={size}>
      {years.map((elemYear) => (
        <button
          type="button"
          value={elemYear}
          id={"year-button"}
          className={year === elemYear ? "year-button selectedYear" : "year-button"}
          key={`${elemYear}-button`}>
          {elemYear}
        </button>
      ))}
    </StyledWrapper>
  );
};

YearSelect.propTypes = {
  year: PropTypes.number.isRequired,
  setYear: PropTypes.func.isRequired,
  firstYear: PropTypes.number.isRequired,
  yearsNumber: PropTypes.number.isRequired,
  size: PropTypes.number,
};

export default YearSelect;

const StyledWrapper = styled.div`
  display: flex;
  width: ${({size}) => (size / 100) * 300}px;
  margin: 20px auto;
  align-items: center;
  justify-content: center;
  button {
    align-items: center;
    background: none;
    border: none;
    font-weight: 500;
    font-size: ${({size}) => (size / 100) * 24}px;
    font-style: normal;
    color: #c6c6c6;
    transition: all 0.2s ease-in-out;
  }
  .selectedYear {
    color: black;
    font-weight: 600;
  }
`;
