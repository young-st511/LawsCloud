import React from "react";
import styled from "styled-components";

const YearSelect = ({year, setYear, firstYear, yearsNumber}) => {
  const years = new Array(yearsNumber).fill(0).map((elem) => elem + firstYear++);

  const handleClick = ({target}) => {
    if (target.tagName !== "BUTTON") return;
    setYear(target.value);
    target.parentElement.querySelectorAll("#year-button").forEach((elem) => (elem.className = ""));
    target.classList.add("selectedYear");
    console.log(`selected year: ${target.value}년`);
  };

  return (
    <StyledWrapper onClick={handleClick}>
      {years.map((elemYear) => (
        <button
          type='button'
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

export default YearSelect;

const StyledWrapper = styled.div`
  display: flex;
  width: 300px;
  margin: 20px auto;
  align-items: center;
  justify-content: center;
  button {
    background: none;
    border: none;
    font-weight: 500;
    font-size: 24px;
    font-style: normal;
    color: #c6c6c6;
    align-items: center;
  }
  .selectedYear {
    color: black;
    font-weight: 600;
  }
`;
