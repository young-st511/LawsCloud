import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// getFirestore
import {dbService} from "../Firebase/firebase";
import {getDoc, doc, setDoc} from "@firebase/firestore";

import {ReactComponent as ViewIcon} from "../../images/view.svg";

function TotalViews({billsId}) {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const getcount = async (docRef) => {
      const docSnap = await getDoc(docRef);
      if (docSnap.data() === undefined) {
        setDoc(doc(dbService, `${billsId}`, "viewCount"), {
          count: 1,
        });
      }
      if (docSnap.data()) {
        setDoc(doc(dbService, `${billsId}`, "viewCount"), {
          count: docSnap.data().count + 1,
        });
        setViewCount(docSnap.data().count);
      }
    };
    const docRef = doc(dbService, `${billsId}`, "viewCount");
    getcount(docRef);
  }, [billsId]);

  return (
    <>
      <ViewIcon width={23} height={20}>
        <label title="조회수" />
      </ViewIcon>
      <Text>{viewCount}</Text>
    </>
  );
}

const Text = styled.p`
  padding-left: 10px;
`;

TotalViews.propType = {
  billsId: PropTypes.string.isRequired,
};

export default TotalViews;
