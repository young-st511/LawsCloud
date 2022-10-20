import React, {useState} from "react";
import {ReactComponent as ArrowBackIcon} from "../../images/arrow-back-icon.svg";
import BillsModal from "../Modal/BillsModal";
import axios from "axios";

import {ref, get, child, update, set} from "firebase/database";
import {firebasedatabase} from "../Firebase/firebase";

import {
  Replys,
  BillNameArea,
  BillName,
  Info,
  ReplyArea,
  Title,
  Reply,
  RecentReply,
} from "../../style/StyledRecentReply";

const KEY = process.env.REACT_APP_API_KEY;
const BaseURL = `https://open.assembly.go.kr/portal/openapi/nzmimeepazxkubdpn?KEY=${KEY}&`;

export default function RecentReplysView({recentReplyArr}) {
  const [onModal, setOnModal] = useState(false);
  const [billsInformation, setBillsInformation] = useState({});
  const [viewCount, setViewCount] = useState(0);

  const overlappingReplyCheck = recentReplyArr.reduce(function (acc, current) {
    if (acc.findIndex(({id}) => id === current.id) === -1) {
      acc.push(current);
    }
    return acc;
  }, []);

  const setView = (data) => {
    const firebaseRef = ref(firebasedatabase, "billId/" + data.billId);

    get(child(ref(firebasedatabase), "billId/" + data.billId)).then((snapshot) => {
      if (snapshot.exists()) {
        update(ref(firebasedatabase, `billId/${data.billId}`), {
          count: snapshot.val().count + 1,
        });
      } else {
        set(firebaseRef, {
          name: data.billName,
          count: viewCount + 1,
          likeCount: 0,
        });
      }
    });

    setViewCount(0);
  };

  const getBillsData = ({data, setBillsInformation}) => {
    axios({
      method: "GET",
      url: `${BaseURL}AGE=${data.age}&Type=json&BILL_ID=${String(data.billId)}`,
    })
      .then((res) => setBillsInformation(res.data.nzmimeepazxkubdpn[1].row))
      .catch((error) => alert(`검색 결과가 없습니다.\n${error}`));
  };

  return (
    <>
      <Replys>
        <Title>최신 댓글</Title>
        <div className="recent-replies">
          {overlappingReplyCheck.map((data) => (
            <RecentReply
              onClick={() => {
                setOnModal(!onModal);
                getBillsData({data, setBillsInformation});
                setView(data);
              }}
              key={data.key}>
              <BillNameArea>
                <BillName>{data.billName}</BillName>
              </BillNameArea>
              <ReplyArea>
                <Reply className="icon">
                  <ArrowBackIcon width={23} height={20} />
                  <span>{data.text}</span>
                </Reply>
                <Info>
                  <span>{data.creatorId}</span>
                  {/* <span>{data.createdAt}</span> */}
                </Info>
              </ReplyArea>
            </RecentReply>
          ))}
        </div>
        {onModal && billsInformation[0] && (
          <BillsModal billsInformation={billsInformation[0]} setOnModal={(bool) => setOnModal(bool)} />
        )}
      </Replys>
    </>
  );
}
