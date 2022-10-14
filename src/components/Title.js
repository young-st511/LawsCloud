import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Title = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <h1 onClick={() => navigate("/main")} style={{cursor: "pointer"}}>
        Laws Cloud
      </h1>
      <img
        onClick={() =>
          navigate("/bills", {
            state: {
              inputValue: "",
              age: 21,
            },
          })
        }
        src="/icons/searchIcon.svg"
        alt="검색"
        style={{cursor: "pointer"}}
      />
    </Header>
  );
};

export default Title;

const Header = styled.header`
  display: flex;
  height: 90px;
  // margin: 0 auto;
  position: relative;
  align-items: center;
  justify-content: center;
  h1 {
    // margin: 0 auto;
    padding: 0;
    text-align: center;
    font-weight: 800;
  }
  img {
    /* margin: 10px; */
    height: 25px;
    position: absolute;
    right: 320px;
  }
`;
