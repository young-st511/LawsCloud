import React, {useEffect} from "react";

import ModalFrame from "./ModalFrame";
import BillsContents from "../BillsContents/BillsContents";
import Reply from "../Reply/Reply";
import PropTypes from "prop-types";

import TotalViews from "../TotalViews/TotalViews";
import TotalComments from "../TotalComments/TotalComments";
import {ToggleArea} from "../../style/StyledModal";
import {ReactComponent as ViewIcon} from "../../images/view.svg";
import ToggleLike from "../likeButton/ToggleLike";
import {useRecoilState, useRecoilValue} from "recoil";
import {userLikeState, userIp} from "../../recoil/store";
import {get, child, ref} from "firebase/database";
import {firebasedatabase} from "../Firebase/firebase";

function BillsModal({billsInformation, setOnModal}) {
  const [likeState, setLikeState] = useRecoilState(userLikeState);
  const dbRef = ref(firebasedatabase);
  const ip = useRecoilValue(userIp);
  const stringUserIp = ip.split(".").join("");

  const getLikeState = () => {
    get(child(dbRef, `billId/${billsInformation.BILL_ID}`)).then((snapshot) => {
      if (snapshot.exists()) {
        setLikeState(snapshot.val().likes[stringUserIp]);
      } else {
        setLikeState(false);
      }
    });
  };

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  getLikeState();
  return (
    <>
      {billsInformation && (
        <ModalFrame setOnModal={setOnModal}>
          <BillsContents billsInformation={billsInformation} />
          <ToggleArea>
            <p>
              댓글 <TotalComments billId={billsInformation.BILL_ID} />
              <span className="arrow" />
            </p>
            <span className="view-and-like">
              <ViewIcon width={23} height={20}>
                <label title="조회수" />
              </ViewIcon>
              <TotalViews billId={billsInformation.BILL_ID} />
              <ToggleLike billId={billsInformation.BILL_ID} userLike={likeState} />
            </span>
          </ToggleArea>
          <Reply billId={billsInformation.BILL_ID} billAge={billsInformation.AGE} />
        </ModalFrame>
      )}
    </>
  );
}

BillsModal.propTypes = {
  billsInformation: PropTypes.shape({
    BILL_NAME: PropTypes.string,
    PROPOSER: PropTypes.string,
    BILL_NO: PropTypes.string,
    PROC_RESULT: PropTypes.string,
    PROPESE_DT: PropTypes.string,
    COMMITTEE: PropTypes.string,
    BILL_ID: PropTypes.string,
  }),
  setOnModal: PropTypes.func,
};

export default BillsModal;
