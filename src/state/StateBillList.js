import {atom, selector} from "recoil";

export const billListState = atom({
  key: "billList",
  default: [],
});
export const pageState = atom({
  key: "page",
  default: 1,
});
export const excelFilterState = atom({
  key: "excelFilter",
  default: "전체",
});
export const billSizeState = atom({
  key: "billSize",
  default: 0,
});
