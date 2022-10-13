import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Title = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <h1 onClick={() => navigate("/main")}>Laws Cloud</h1>
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
      />
    </Header>
  );
};

export default Title;

const Header = styled.header`
  display: flex;
  width: 1200px;
  height: 90px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  align-items: center;
  h1 {
    margin: 0 auto;
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
