import React, {useState} from "react";
import styled from "styled-components";

export default function ToggleLike() {
  const [likestate, setLike] = useState(false);

  const onClick = () => {
    setLike((prev) => !prev);
  };

  return (
    <div>
      {likestate ? (
        <HeartButton type="checkbox" onClick={onClick}>
          <HeartImg src="/icons/EmptyHeart.png" alt="빈하트" />
        </HeartButton>
      ) : (
        <HeartButton type="checkbox" onClick={onClick}>
          <HeartImg src="/icons/heart.png" alt="하트" />
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
