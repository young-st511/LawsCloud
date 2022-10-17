import React, {useEffect} from "react";

// route
import {useLocation} from "react-router-dom";

// style
import {StyledWrap} from "../style/StyledBills";

// recoil
import {useRecoilState} from "recoil";
import {billListState, pageState, searchFilterState, excelFilterState, categoryState} from "../state/StateBillList";

// components
import BillsList from "../components/BillList/BillsList";
import SearchBar from "../components/BillList/SearchBar";
import PageNationSession from "../components/BillList/PageNationSession";

//useEffect
import {useBillList} from "../hooks/useBillList";

const Bills = () => {
  const location = useLocation();
  if (!location.state) {
    location.state = {
      inputValue: "",
      age: 21,
    };
  }
  const [billList, setBillList] = useRecoilState(billListState);
  const [page, setPage] = useRecoilState(pageState);
  // const [searchFilter, setSearchFilter] = useState(location.state.inputValue);
  const [searchFilter, setSearchFilter] = useRecoilState(searchFilterState);
  const [excelFilter, setExcelFilter] = useRecoilState(excelFilterState);
  // const [category, setCategory] = useState(String(location.state.age));
  const [category, setCategory] = useRecoilState(categoryState);
  useEffect(() => {
    setCategory(String(location.state.age));
    setSearchFilter(location.state.inputValue);
  }, []);
  useBillList();
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
