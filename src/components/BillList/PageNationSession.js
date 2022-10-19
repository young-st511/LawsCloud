import React, {useEffect, useState} from "react";
import axios from "axios";
import {Nav, Button} from "../../style/StyledPageNationSession";
const KEY = process.env.REACT_APP_API_KEY;
const BaseURL = `https://open.assembly.go.kr/portal/openapi/nzmimeepazxkubdpn?KEY=${KEY}&`;

const PageNationSession = ({searchFilter, page, setPage, category, excelFilter}) => {
  const [billSize, setBillSize] = useState(200);
  const [pageArray, setPageArray] = useState(0);
  const [addPage, setAddPage] = useState(0);

  const fetchData = async (page) => {
    let data = await axios
      .get(
        `${BaseURL}AGE=${category}&Type=json&pIndex=${page}&pSize=1000&BILL_NAME=${searchFilter}&&COMMITTEE=${excelFilter}`,
      )
      .then((res) => {
        let data = Math.ceil(res.data.nzmimeepazxkubdpn[1].row.length / 7);
        return data;
      })
      .catch((err) => console.error("호출 fail -", err.name));
    return data;
  };

  const getBillsData = (page = 1, dataSize = 0) => {
    fetchData(page).then((data) => {
      dataSize += data ? data : 0;
      if (!data) {
        setBillSize(dataSize);
        return data;
      } else if (400 < dataSize && dataSize < 500) {
        console.log(dataSize);
        setBillSize(dataSize);
      }
      page += 1;
      getBillsData(page, dataSize);
    });
  };

  useEffect(() => {
    setPage(1);
    getBillsData();
  }, [searchFilter, category, excelFilter]);
  useEffect(() => {
    console.log(billSize);
    if (Math.ceil(billSize / 10) === Math.ceil(page / 10)) {
      setPageArray(billSize % 10 == 0 ? 10 : billSize % 10);
    } else {
      setPageArray(10);
    }
    setAddPage(parseInt((page - 1) / 10) * 10);
  }, [page, billSize]);
  console.log(pageArray, page, billSize);
  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 10)} disabled={page < 11}>
          ◀
        </Button>
        {pageArray > 0 &&
          Array(pageArray)
            .fill()
            .map((_, i) => (
              <Button
                key={i + 1}
                onClick={() => setPage(i + 1 + addPage)}
                aria-current={page === i + 1 + addPage ? "page" : null}>
                {i + 1 + addPage}
              </Button>
            ))}
        <Button
          onClick={() => setPage(page + 10 <= billSize ? page + 10 : billSize)}
          disabled={Math.ceil(billSize / 10) === Math.ceil(page / 10)}>
          ▶
        </Button>
      </Nav>
    </>
  );
};

export default PageNationSession;
