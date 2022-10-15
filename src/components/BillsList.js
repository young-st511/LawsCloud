import React, {useState} from "react";
import {StyledBillTable, StyledBillThead, StyledBillTbody} from "../style/StyledBillsList";
import ExcelFilterButton from "./ExcelFilterButton";
import BillsModal from "./Modal/BillsModal";
import TotalViews from "./TotalViews/TotalViews";
const headerMeta = ["의안명", "제안자", "상임위원회", "조회수", "추천수"];

const BillsList = ({billList, setExcelFilter, setPage}) => {
  const [onModal, setOnModal] = useState(false);
  const [billsInformation, setBillsInformation] = useState({});

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
                <td
                  onClick={() => {
                    setOnModal(!onModal);
                    setBillsInformation(data);
                  }}>
                  {data.BILL_NAME}
                </td>
                <td>
                  {data.PROPOSER}
                  <div>{data.PROPOSE_DT}</div>
                </td>
                <td>({data.COMMITTEE})</td>
                <td>
                  <TotalViews billId={data.BILL_ID} billsListPage={true} />
                </td>
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

      {onModal && <BillsModal billsInformation={billsInformation} setOnModal={(bool) => setOnModal(bool)} />}
    </>
  );
};

export default BillsList;
