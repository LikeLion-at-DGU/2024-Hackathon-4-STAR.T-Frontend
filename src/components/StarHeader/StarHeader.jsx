import React from "react";
import * as S from "./styled";
import checkBadge from "../../assets/checkbadge.svg";
import progressingBar from "../../assets/progressingBar.svg";
import completeBar from "../../assets/completeBar.svg";
import ShareIcon from "../../assets/shareIcon.svg";

const ProgressingBar = ({ usercount, totalcount }) => {
  return (
    <S.ProgressingBarWrapper>
      {Array.from({ length: totalcount }).map((_, index) => {
        const imgSrc = index < usercount ? completeBar : progressingBar;
        return <img key={index} src={imgSrc} alt={`Progress ${index}`} />;
      })}
    </S.ProgressingBarWrapper>
  );
};
export const StarHeader = ({ usercount, totalcount, completecount }) => {
  return (
    <>
      <S.layout>
        <div className="progress">
          <img src={checkBadge} />
          <S.ProgressContainr>
            <div>
              달성 진행중 {usercount}/{totalcount}
            </div>
            <ProgressingBar usercount={usercount} totalcount={totalcount} />
          </S.ProgressContainr>
        </div>
        <S.ShareContainr>
          <div>총 {completecount}회</div>
          <img src={ShareIcon} />
        </S.ShareContainr>
      </S.layout>
    </>
  );
};
