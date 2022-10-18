import {atom} from "recoil";

export const userIp = atom({
  key: "userIp",
  default: "",
});

export const userLikeState = atom({
  key: "userLikeState",
  default: "false",
});
