import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  width: ${({size}) => (size / 100) * 400}px;
  margin: 20px auto;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-weight: 600;
  font-size: ${({size}) => (size / 100) * 21}px;

  select {
    font-weight: 700;
    font-size: ${({size}) => (size / 100) * 20}px;
  }

  > div {
    margin-right: 5px;
  }
  select + div {
    margin-left: 5px;
  }
`;

export default StyledWrapper;
