import React, {useState, useEffect} from "react";

// getFirestore
import db from "../../firebase";

import {getDoc, doc, setDoc} from "@firebase/firestore";

function TotalViews({billsId}) {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const getcount = async (docRef) => {
      const docSnap = await getDoc(docRef);
      setViewCount(docSnap.data().count);
      if (docSnap.data() === undefined) {
        setDoc(doc(db, `${billsId}`, "viewCount"), {
          count: 1,
        });
      }
      if (docSnap.data()) {
        setDoc(doc(db, `${billsId}`, "viewCount"), {
          count: docSnap.data().count + 1,
        });
      }
    };
    const docRef = doc(db, `${billsId}`, "viewCount");
    getcount(docRef);
  }, [billsId]);

  return <>{viewCount}</>;
}

export default TotalViews;
