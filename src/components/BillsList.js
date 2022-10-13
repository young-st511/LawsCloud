import React, {useState} from "react";
import {StyledBillTable, StyledBillThead, StyledBillTbody} from "../style/StyledBillsList";
import ExcelFilterButton from "./ExcelFilterButton";
import BillsModal from "./Modal/BillsModal";
const headerMeta = ["의안명", "제안자", "상임위원회", "조회수", "추천수"];

const BillsList = ({billList, setExcelFilter, setPage}) => {
  const [onModal, setOnModal] = useState(false);
  const billsInformation = {
    AGE: "21",
    BILL_ID: "PRC_H2R0G0S6C0S1H1E1Z1C7V4P7I9Y3M7",
    BILL_NAME: "남녀고용평등과 일·가정 양립 지원에 관한 법률 일부개정법률안(송석준의원 등 103인)",
    BILL_NO: "2100008",
    COMMITTEE: "환경노동위원회",
    COMMITTEE_ID: "9700038",
    DETAIL_LINK:
      "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_P2U2A0P9A1T6P1R8G1Z6A5T3N8L7U1&ageFrom=21&ageTo=21",
    MEMBER_LIST: "http://likms.assembly.go.kr/bill/coactorListPopup.do?billId=PRC_P2U2A0P9A1T6P1R8G1Z6A5T3N8L7U1",
    PROC_RESULT: "철회",
    PROPOSER: "송석준의원 등 103인",
    PROPOSE_DT: "2020-06-29	",
    PUBL_PROPOSER: "강민국,김미애,김희곤,박성민,배현진,백종헌,성일종,이명수,이인선,이종성,이헌승,정운천,한무경",
    RST_PROPOSER: "김형동",
  };

  const onClick = () => {
    setOnModal(!onModal);
  };
  return (
    <>
      <StyledBillTable>
        <StyledBillThead>
          <tr>
            {headerMeta.map((data, idx) => (
              <th key={idx}>
                {data} {idx === 2 && <ExcelFilterButton setExcelFilter={setExcelFilter} setPage={setPage} />}
              </th>
            ))}
          </tr>
        </StyledBillThead>
        <StyledBillTbody>
          {billList ? (
            billList.map((data, idx) => (
              <tr key={idx}>
                <td>{data.BILL_NAME}</td>
                <td>
                  {data.PROPOSER}
                  <div>{data.PROPOSE_DT}</div>
                </td>
                <td>({data.COMMITTEE})</td>
                <td>0</td>
                <td>0</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>loding...</td>
            </tr>
          )}
        </StyledBillTbody>
      </StyledBillTable>
      <button onClick={onClick}></button>
      {onModal && <BillsModal billsInformation={billsInformation} setOnModal={(bool) => setOnModal(bool)} />}
    </>
  );
};

export default BillsList;
