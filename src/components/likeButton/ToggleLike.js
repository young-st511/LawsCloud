import {runTransaction, ref} from "firebase/database";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {firebasedatabase} from "../Firebase/firebase";
import {useRecoilState, useRecoilValue} from "recoil";
import {userIp, userLikeState} from "../../recoil/store";

export default function ToggleLike({billId, userLike}) {
  const [likestate, setLike] = useState(false);
  const dbRef = ref(firebasedatabase, `billId/${billId}`);
  const ip = useRecoilValue(userIp);

  useEffect(() => {
    setLike(userLike);
  }, [userLike]);

  const LikeClick = () => {
    const userIp = ip.split(".").join("");
    runTransaction(dbRef, (post) => {
      if (post) {
        if (post.likes && post.likes[userIp]) {
          post.likeCount--;
          post.likes[userIp] = null;
        } else {
          post.likeCount++;
          if (!post.likes) {
            post.likes = {};
          }
          post.likes[userIp] = true;
        }
      }

      return post;
    });
  };

  const onClick = () => {
    setLike((prev) => !prev);
    LikeClick();
  };

  return (
    <div>
      {likestate ? (
        <HeartButton type="checkbox" onClick={onClick}>
          <HeartImg src="/icons/heart.png" alt="하트" />
        </HeartButton>
      ) : (
        <HeartButton type="checkbox" onClick={onClick}>
          <HeartImg src="/icons/EmptyHeart.png" alt="빈하트" />
        </HeartButton>
      )}
    </div>
  );
}

const HeartButton = styled.button`
  border: 0;
  outline: 0;
  background-color: white;
`;

const HeartImg = styled.img`
  width: 24px;
  heigth: 24px;
`;
