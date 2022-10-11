import React, {useState} from "react";

import {StyledWrap} from "./styles/StyledBills";

import BillsList from "./BillsList";
import SearchBar from "./SearchBar";
import PageNationSession from "./PageNationSession";

const Bills = ({}) => {
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
