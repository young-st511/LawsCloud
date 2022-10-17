import {atom} from "recoil";

export const billListState = atom({
  key: "billList",
  default: "",
});
export const pageState = atom({
  key: "page",
  default: 1,
});
export const searchFilterState = atom({
  key: "searchFilter",
  default: [],
});
export const excelFilterState = atom({
  key: "excelFilter",
  default: "",
});
export const categoryState = atom({
  key: "category",
  default: 21,
});
