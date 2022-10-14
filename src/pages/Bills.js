import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import {StyledWrap} from "../style/StyledBills";

import BillsList from "../components/BillsList";
import SearchBar from "../components/SearchBar";
import PageNationSession from "../components/PageNationSession";

const Bills = () => {
  const location = useLocation();
  if (!location.state) {
    location.state = {
      inputValue: "",
      age: 21,
    };
  }
  const [billList, setBillList] = useState("");
  const [page, setPage] = useState(1);
  const [searchFilter, setSearchFilter] = useState(location.state.inputValue);
  const [excelFilter, setExcelFilter] = useState("");
  const [category, setCategory] = useState(String(location.state.age));

  return (
    <StyledWrap>
      <main>
        <SearchBar
          setBillList={setBillList}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          page={page}
          setPage={setPage}
          excelFilter={excelFilter}
          category={category}
          setCategory={setCategory}
        />
        <BillsList billList={billList} setExcelFilter={setExcelFilter} setPage={setPage} />
      </main>
      <footer>
        <PageNationSession page={page} searchFilter={searchFilter} setPage={setPage} category={category} />
      </footer>
    </StyledWrap>
  );
};

export default Bills;
