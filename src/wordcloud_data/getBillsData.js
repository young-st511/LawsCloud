import {appendFileSync} from "fs";
import axios from "axios";

getBillsData(16);
getBillsData(17);
getBillsData(18);

//! Test
// const count = {
//   21: 0,
//   20: 0,
//   19: 0,
// }

async function fetchData(age = 21, page = 1) {
  let data = await axios
    .get(
      `https://open.assembly.go.kr/portal/openapi/nzmimeepazxkubdpn?KEY=138ed104529d44a9ab8575f3f5332436&Type=JSON&AGE=${age}&pSize=1000&pIndex=${page}`,
    )
    .then((res) => {
      let data = res.data.nzmimeepazxkubdpn[1].row;
      console.log(data);
      return data;
    })
    .catch((err) => console.error("호출 fail -", err.name));

  return data;
}

function getBillsData(age = 21, page = 1) {
  fetchData(age, page).then((data) => {
    if (!data) {
      //! Test
      // console.log('Age: ' + age + ' - ' + count[age])
      return;
    }
    data.forEach((elem) => {
      const billName = elem.BILL_NAME;
      const date = elem.PROPOSE_DT;

      //! Test
      // count[age]++;

      appendFileSync(`./${age}th-${date.slice(0, 4)}.txt`, billName.replace("일부개정법률안", "") + " ", "utf8");
    });

    console.log("Age: " + age + "/ Page:" + page);

    getBillsData(age, page + 1);
  });
}
