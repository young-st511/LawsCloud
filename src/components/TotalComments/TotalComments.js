import React, {useState, useEffect} from "react";

// getFirestore
import {onSnapshot, collection} from "firebase/firestore";
import {dbService} from "../Firebase/firebase";

function TotalComments({billId}) {
  const [totalCommentsCount, setTotalCommentsCount] = useState(0);
  useEffect(() => {
    onSnapshot(collection(dbService, `${billId}`), (snapshot) => {
      const realtimeComments = snapshot.docs.map((doc) => doc.data());
      setTotalCommentsCount(realtimeComments.length);
    });
  });

  return <>{totalCommentsCount}</>;
}

export default TotalComments;
