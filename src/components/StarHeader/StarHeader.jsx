import React from "react";
import * as S from "./styled";
import checkBadge from "../../assets/checkbadge.svg";
import progressingBar from "../../assets/ProgressingBar.svg";
import ShareIcon from "../../assets/shareIcon.svg";

const ProgressingBar = () => {
  return (
    <S.ProgressingBarWrapper>
      <img src={progressingBar} />
      <img src={progressingBar} />
      <img src={progressingBar} />
      <img src={progressingBar} />
      <img src={progressingBar} />
      <img src={progressingBar} />
    </S.ProgressingBarWrapper>
  );
};
export const StarHeader = ({ usercount, totalcount }) => {
  return (
    <>
      <S.layout>
        <div className="progress">
          <img src={checkBadge} />
          <S.ProgressContainr>
            <div>
              달성 진행중 {usercount}/{totalcount}
            </div>
            <ProgressingBar />
          </S.ProgressContainr>
        </div>
        <S.ShareContainr>
          <div>총 00회</div>
          <img src={ShareIcon} />
        </S.ShareContainr>
      </S.layout>
    </>
  );
};
