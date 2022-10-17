import React, {useState} from "react";

import {StyledToggleButton, StyledcommitteeList} from "../../style/StyledExcelFilterButton";
const committeeArray = [
  "전체",
  "4차산업혁명위원회",
  "5.18민주화운동진상규명조사위원회",
  "가습기살균제사건과4.16세월호참사특별조사위원회",
  "감사원",
  "개인정보보호위원회",
  "경찰청",
  "고용노동부",
  "고위공직자범죄수사처",
  "공정거래위원회",
  "과학기술정보통신부",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const ExcelFilterButton = ({setExcelFilter, setPage}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <StyledToggleButton onClick={() => setToggle(!toggle)}>▼</StyledToggleButton>
      <StyledcommitteeList toggle={toggle}>
        {committeeArray.map((d, idx) => (
          <li key={idx}>
            <button
              onClick={(d) => {
                setPage(1);
                setToggle(!toggle);
                setExcelFilter(d.target.innerHTML);
              }}>
              {d}
            </button>
          </li>
        ))}
      </StyledcommitteeList>
    </>
  );
};
export default ExcelFilterButton;
