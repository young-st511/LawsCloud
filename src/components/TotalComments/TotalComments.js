import React, {useState, useEffect} from "react";

// getFirestore
import db from "../../firebase";

import {onSnapshot, collection} from "@firebase/firestore";

function TotalComments({billId}) {
  const [totalCommentsCount, setTotalCommentsCount] = useState(0);
  useEffect(() => {
    onSnapshot(collection(db, `${billId}/comments/comment`), (snapshot) => {
      const realtimeComments = snapshot.docs.map((doc) => doc.data());
      setTotalCommentsCount(realtimeComments.length);
    });
  });

  return <div>{totalCommentsCount}</div>;
}

export default TotalComments;
