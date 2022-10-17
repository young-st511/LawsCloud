import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 10px 16px 16px 16px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: min(calc(15px + 2.5vw), 40px);
  color: black;
  font-size: 1rem;
  font-weight: 700;
  border: 0;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: white;
  &:hover {
    background: gray;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    color: gray;
    cursor: revert;
    transform: revert;
  }
  &[disabled]:hover {
    background: white;
  }

  &[aria-current] {
    background: black;
    color: white;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
