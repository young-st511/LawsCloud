import React, {useEffect, useState} from "react";
import axios from "axios";
import searchImg from "../images/search-icon.svg";
import {StyledSearchArea} from "../style/StyledSearchBar";
const KEY = process.env.REACT_APP_API_KEY;
const BaseURL = `https://open.assembly.go.kr/portal/openapi/nzmimeepazxkubdpn?KEY=${KEY}&`;

const SearchBar = ({setBillList, searchFilter, setSearchFilter, page, setPage, excelFilter, age = 21}) => {
  const [searchValue, setSerchValue] = useState(searchFilter);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${BaseURL}AGE=${age}&Type=json&pIndex=${page}&pSize=7&BILL_NAME=${searchFilter}&COMMITTEE=${excelFilter}`,
    })
      .then((res) => setBillList(res.data.nzmimeepazxkubdpn[1].row))
      .catch((error) => alert(`검색 결과가 없습니다.\n${error}`));
  }, [searchFilter, page, excelFilter]);

  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      setPage(1);
      setSearchFilter(searchValue);
    }
  };

  return (
    <>
      <StyledSearchArea>
        <input
          placeholder="상품명 검색"
          value={searchValue}
          onChange={(e) => setSerchValue(e.target.value)}
          onKeyPress={onCheckEnter}
        />
        <button
          onClick={() => {
            setSearchFilter(searchValue);
            setPage(1);
          }}>
          <img src={searchImg} alt="검색 이미지" />
        </button>
      </StyledSearchArea>
    </>
  );
};

export default SearchBar;
