import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import {StyledWrap} from "../style/StyledBills";

import BillsList from "../components/BillsList";
import SearchBar from "../components/SearchBar";
import PageNationSession from "../components/PageNationSession";

const Bills = () => {
  const location = useLocation();

  const [billList, setBillList] = useState("");
  const [page, setPage] = useState(1);
  const [searchFilter, setSearchFilter] = useState(location.state.inputValue);
  const [excelFilter, setExcelFilter] = useState("");

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
          age={location.state.age}
        />
        <BillsList billList={billList} setExcelFilter={setExcelFilter} setPage={setPage} />
      </main>
      <footer>
        <PageNationSession page={page} searchFilter={searchFilter} setPage={setPage} />
      </footer>
    </StyledWrap>
  );
};

export default Bills;
