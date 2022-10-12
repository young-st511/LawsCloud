import React from "react";
import {StyledBillTable, StyledBillThead, StyledBillTbody} from "./styles/StyledBillsList";

import ExcelFilterButton from "./ExcelFilterButton";
const headerMeta = ["의안명", "제안자", "상임위원회", "조회수", "추천수"];

const BillsList = ({billList, setExcelFilter, setPage}) => {
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
    </>
  );
};

export default BillsList;
