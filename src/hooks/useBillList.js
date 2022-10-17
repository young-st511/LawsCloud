import {useEffect} from "react";
import {useSetRecoilState, useRecoilValue} from "recoil";
import {billListState, pageState, searchFilterState, excelFilterState, categoryState} from "../state/StateBillList";
import axios from "axios";
const KEY = process.env.REACT_APP_API_KEY;
const BaseURL = `https://open.assembly.go.kr/portal/openapi/nzmimeepazxkubdpn?KEY=${KEY}&`;

export const useBillList = () => {
  const setBillListUseSet = useSetRecoilState(billListState);
  const pageValue = useRecoilValue(pageState);
  const searchFilterValue = useRecoilValue(searchFilterState);
  const excelFilterValue = useRecoilValue(excelFilterState);
  const categoryValue = useRecoilValue(categoryState);
  useEffect(() => {
    axios({
      method: "GET",
      url: `${BaseURL}AGE=${categoryValue}&Type=json&pIndex=${pageValue}&pSize=7&BILL_NAME=${searchFilterValue}&COMMITTEE=${excelFilterValue}`,
    })
      .then((res) => setBillListUseSet(res.data.nzmimeepazxkubdpn[1].row))
      .catch((error) => alert(`검색 결과가 없습니다.\n${error}`));
  }, [searchFilterValue, pageValue, excelFilterValue, categoryValue]);
};
