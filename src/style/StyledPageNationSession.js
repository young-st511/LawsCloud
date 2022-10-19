import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  min-width: 428px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 20px 16px 16px 16px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(calc(20px + 2.5vw), 40px);
  height: 40px;
  margin: 0;
  padding: 8px;
  font-size: 16px;
  font-weight: 700;
  color: black;
  border: 0;
  border-radius: 8px;
  background: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #e6e6e6;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    color: #e6e6e6;
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
