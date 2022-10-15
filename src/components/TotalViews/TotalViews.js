import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import ViewArea from "../../style/StyledModal";

// getFirestore
import {dbService} from "../Firebase/firebase";
import {getDoc, doc, setDoc} from "@firebase/firestore";

import {ReactComponent as ViewIcon} from "../../images/view.svg";

function TotalViews({billId}) {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const getcount = async (docRef) => {
      const docSnap = await getDoc(docRef);
      if (docSnap.data() === undefined) {
        setDoc(doc(dbService, `${billId}`, "viewCount"), {
          count: 1,
        });
      }
      if (docSnap.data()) {
        setDoc(doc(dbService, `${billId}`, "viewCount"), {
          count: docSnap.data().count + 1,
        });
        setViewCount(docSnap.data().count);
      }
    };
    const docRef = doc(dbService, `${billId}`, "viewCount");
    getcount(docRef);
  }, [billId]);

  return (
    <ViewArea>
      <ViewIcon width={23} height={20}>
        <label title="조회수" />
      </ViewIcon>
      {viewCount}
    </ViewArea>
  );
}

TotalViews.propType = {
  billId: PropTypes.string.isRequired,
};

export default TotalViews;
