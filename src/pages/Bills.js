import React, {useState} from "react";

import {StyledWrap} from "../style/StyledBills";

import BillsList from "../components/BillsList";
import SearchBar from "../components/SearchBar";
import PageNationSession from "../components/PageNationSession";

const Bills = () => {
  const [billList, setBillList] = useState("");
  const [page, setPage] = useState(1);
  const [searchFilter, setSearchFilter] = useState("");
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
