import React, {useState} from "react";
import PropTypes from "prop-types";
import ViewArea from "../../style/StyledModal";

// getFirestore
import {firebasedatabase} from "../Firebase/firebase";
import {ref, get, child} from "firebase/database";

function TotalViews({billId}) {
  const [viewCount, setViewCount] = useState(0);

  get(child(ref(firebasedatabase), `billId/${billId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      setViewCount(snapshot.val().count);
    }
  });

  return <ViewArea>{viewCount}</ViewArea>;
}

TotalViews.propType = {
  billId: PropTypes.string.isRequired,
};

export default TotalViews;
