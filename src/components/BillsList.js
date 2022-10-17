import React, {useState} from "react";
import {StyledBillTable, StyledBillThead, StyledBillTbody} from "../style/StyledBillsList";
import ExcelFilterButton from "./ExcelFilterButton";
import BillsModal from "./Modal/BillsModal";
import TotalViews from "./TotalViews/TotalViews";
import {set, ref, get, child, update} from "firebase/database";
import {firebasedatabase} from "./Firebase/firebase";
const headerMeta = ["의안명", "제안자", "상임위원회", "조회수", "추천수"];

const BillsList = ({billList, setExcelFilter, setPage}) => {
  const [onModal, setOnModal] = useState(false);
  const [billsInformation, setBillsInformation] = useState({});
  const [viewCount, setViewCount] = useState(0);

  const setView = (data) => {
    const firebaseRef = ref(firebasedatabase, "billId/" + data.BILL_ID);

    get(child(ref(firebasedatabase), "billId/" + data.BILL_ID)).then((snapshot) => {
      if (snapshot.exists()) {
        update(ref(firebasedatabase, `billId/${data.BILL_ID}`), {
          count: snapshot.val().count + 1,
        });
      } else {
        set(firebaseRef, {
          name: data.BILL_NAME,
          count: viewCount + 1,
          likeCount: 0,
        });
      }
    });

    setViewCount(0);
  };

  return (
    <>
      <StyledBillTable>
        <StyledBillThead>
          {headerMeta.map((data, idx) => (
            <div key={idx} className="header">
              {data} {idx === 2 && <ExcelFilterButton setExcelFilter={setExcelFilter} setPage={setPage} />}
            </div>
          ))}
        </StyledBillThead>
        <StyledBillTbody>
          {billList ? (
            billList.map((data, idx) => (
              <div key={idx} className="item-area">
                <div
                  className="item"
                  onClick={() => {
                    setOnModal(!onModal);
                    setBillsInformation(data);
                    setView(data);
                  }}>
                  {data.BILL_NAME}
                </div>
                <div className="item">
                  {data.PROPOSER}
                  <br />
                  {data.PROPOSE_DT}
                </div>
                <div className="item">({data.COMMITTEE ? data.COMMITTEE : "소속 없음"})</div>
                <TotalViews billId={data.BILL_ID} />
                <LikeNum billId={data.BILL_ID} />
              </div>
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
