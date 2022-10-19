import React, {useState} from "react";

import {StyledToggleButton, StyledcommitteeList} from "../../style/StyledExcelFilterButton";
const committeeArray = [
  "전체",
  "국회운영위원회",
  "법제사법위원회",
  "정무위원회",
  "기획재정위원회",
  "교육위원회",
  "과학기술정보방송통신위원회",
  "외교통일위원회",
  "국방위원회",
  "행정안전위원회",
  "문화체육관광위원회",
  "농림축산심품해양수산위원회",
  "산업통상자원중소벤처기업위원회",
  "보건복지위원회",
  "환경노동위원회",
  "국토교통위원회",
  "정보위원회",
  "여성가족위원회",
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
                setExcelFilter(d.target.innerHTML === "전체" ? "" : d.target.innerHTML);
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
