import React, {useState} from "react";

import {StyledToggleButton, StyledcommitteeList} from "./styles/StyledExcelFilterButton";
const committeeArray = ["교육위원회", "법제사법위원회", "행정안전위원회", "국토교통위원회", "정무위원회", "국방위원회"];

const ExcelFilterButton = ({setExcelFilter, setPage}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <StyledToggleButton onClick={() => setToggle(!toggle)}>▼</StyledToggleButton>
      <StyledcommitteeList toggle={toggle}>
        {committeeArray.map((d) => (
          <li>
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
