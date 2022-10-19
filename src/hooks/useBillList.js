import {useEffect} from "react";
import {useSetRecoilState, useRecoilValue} from "recoil";
import {billListState, pageState, excelFilterState} from "../state/StateBillList";
import axios from "axios";
const KEY = process.env.REACT_APP_API_KEY;
const BaseURL = `https://open.assembly.go.kr/portal/openapi/nzmimeepazxkubdpn?KEY=${KEY}&`;

export const useBillList = ({searchFilter, category}) => {
  console.log(searchFilter, category);
  const setBillListUseSet = useSetRecoilState(billListState);
  const pageValue = useRecoilValue(pageState);
  const excelFilterValue = useRecoilValue(excelFilterState);
  useEffect(() => {
    console.log(category, pageValue, searchFilter, excelFilterValue);
    axios({
      method: "GET",
      url: `${BaseURL}AGE=${category}&Type=json&pIndex=${pageValue}&pSize=7&BILL_NAME=${searchFilter}&COMMITTEE=${
        excelFilterValue === "전체" ? "" : excelFilterValue
      }`,
    })
      .then((res) => setBillListUseSet(res.data.nzmimeepazxkubdpn[1].row))
      .catch((error) => alert(`검색 결과가 없습니다.\n${error}`));
  }, [searchFilter, pageValue, excelFilterValue, category]);
};
