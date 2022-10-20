import styled from "styled-components";

export const StyledWrapper = styled.div`
  .wordcloud {
    width: ${({size}) => (size / 100) * 600}px;
    height: ${({size}) => (size / 100) * 550}px;
    margin: 20px 20px;
    span.cloud-word {
      cursor: pointer;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1) !important;
      }
    }
  }
`;

export default StyledWrapper;
