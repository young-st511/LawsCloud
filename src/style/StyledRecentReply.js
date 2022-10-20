import styled from "styled-components";

export const Replys = styled.section`
  box-sizing: border-box;
  width: min(100%, 836px);
  height: 899px;

  margin: 100px auto 100px auto;

  border: 2px solid #000000;
  border-radius: 15px;

  z-index: 5;

  .recent-replies {
    width: min(100%, 836px);
    height: 856px;

    overflow-y: scroll;
    overflow-x: hidden;

    z-index: 1;

    &::-webkit-scrollbar {
      width: 6px;
      overflow-y: hidden;
      z-index: 1;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #c6c6c6;
      border-radius: 3px;
    }
    &::-webkit-scrollbar-track {
      background-color: none;
    }
    &::-webkit-scrollbar-button {
      display: none;
      background: none;
    }
    /* firefox */
    scrollbar-color: #c6c6c6;
    scrollbar-width: none;
  }
`;

export const RecentReply = styled.div`
  border-bottom: 1px solid #c6c6c6;
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

export const BillNameArea = styled.div`
  box-sizing: border-box;

  width: calc(100% - 38px);
  height: 50px;

  display: flex;
  flex-direction: column;

  margin: auto;

  padding-top: 17px;
  padding-bottom: 3px;
`;

export const BillName = styled.p`
  font-size: 16px;
  font-weight: 700;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
`;
export const Info = styled.div`
  font-size: 14px;

  color: #969696;
  span {
    padding-left: 2px;
    padding-right: 10px;
  }
`;

export const ReplyArea = styled.div`
  width: calc(100% - 40px);

  display: flex;

  margin: auto;

  justify-content: space-between;

  padding-bottom: 17px;
`;

export const Title = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 41px;

  display: flex;
  align-items: center;

  padding-left: 19px;

  font-size: 18px;
  font-weight: 700;

  z-index: 10;
  background-color: #000;
  border-radius: 10px 10px 0 0;
  color: #fff;

  border-bottom: 2px solid #000000;
`;

export const Reply = styled.p`
  box-sizing: border-box;

  margin-left: 15px;

  font-weight: 500;
  font-size: 16px;
  line-height: 25px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    margin-left: 15px;
  }
`;
