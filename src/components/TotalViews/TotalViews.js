import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import ViewArea from "../../style/StyledModal";

// getFirestore
import {dbService} from "../Firebase/firebase";
import {getDoc, doc, setDoc} from "@firebase/firestore";

function TotalViews({billId, billsListPage}) {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const getcount = async (docRef) => {
      const docSnap = await getDoc(docRef);
      if (docSnap.data() === undefined && billsListPage === false) {
        setDoc(doc(dbService, `${billId}`, "viewCount"), {
          count: 1,
        });
      }
      if (docSnap.data() && billsListPage === false) {
        setDoc(doc(dbService, `${billId}`, "viewCount"), {
          count: docSnap.data().count + 1,
        });
        setViewCount(docSnap.data().count);
        console.log(docSnap.data());
      }
      if (docSnap.data() === undefined && billsListPage === true) {
        setViewCount(0);
      }
      if (docSnap.data() && billsListPage === true) {
        setViewCount(docSnap.data().count);
      }
    };
    const docRef = doc(dbService, `${billId}`, "viewCount");
    getcount(docRef);
  }, [billId]);

  return <ViewArea>{viewCount}</ViewArea>;
}

TotalViews.propType = {
  billId: PropTypes.string.isRequired,
  billsListPage: PropTypes.bool.isRequired,
};

export default TotalViews;
