import React, {useEffect, useState} from "react";
import axios from "axios";
import {Nav, Button} from "../style/StyledPageNationSession";

const KEY = process.env.REACT_APP_API_KEY;
const BaseURL = `https://open.assembly.go.kr/portal/openapi/nzmimeepazxkubdpn?KEY=${KEY}&`;

const PageNationSession = ({searchFilter, page, setPage, age = 21}) => {
  const [billSize, setBillSize] = useState(0);
  const [pageArray, setPageArray] = useState(0);
  const [addPage, setAddPage] = useState(0);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${BaseURL}AGE=${age}&Type=json&pIndex=1&pSize=1000&BILL_NAME=${searchFilter}`,
    }).then((res) => setBillSize(Math.ceil(res.data.nzmimeepazxkubdpn[1].row.length / 7)));
  }, [searchFilter]);

  useEffect(() => {
    if (Math.ceil(billSize / 10) === Math.ceil(page / 10)) {
      setPageArray(billSize % 10);
    } else {
      setPageArray(10);
    }
    setAddPage(parseInt((page - 1) / 10) * 10);
  }, [page, billSize]);

  console.log(billSize, addPage, page, pageArray);
  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 10)} disabled={page < 11}>
          &lt;
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
          &gt;
        </Button>
      </Nav>
    </>
  );
};

export default PageNationSession;
