import React, {useState, useEffect} from "react";

import RecentReplysView from "./RecentReplyView";

import {ref, get, child} from "firebase/database";
import {firebasedatabase, dbService} from "../Firebase/firebase";
import {onSnapshot, collection} from "firebase/firestore";

export default function RecentReplys() {
  const [recentReply, setRecentReply] = useState([]);
  useEffect(() => {
    get(child(ref(firebasedatabase), `billId/`)).then((snapshot) => {
      if (snapshot.exists()) {
        const viewed = snapshot.val();
        Object.entries(viewed).map((bill) => {
          onSnapshot(collection(dbService, `${bill[0]}`), (sanpshot) => {
            const replyArray = sanpshot.docs.map((doc) => ({
              id: doc.id,
              text: doc.text,
              age: doc.age,
              ...doc.data(),
            }));

            replyArray.map((item) => {
              if (item.text && item.age) {
                item["billName"] = bill[1].name;
                item["billId"] = bill[0];

                setRecentReply((recentReply) => [...recentReply, item]);
              }
            });
          });
        });
      }
    });
  }, []);

  return (
    <>
      <RecentReplysView recentReplyArr={recentReply} />
    </>
  );
}
