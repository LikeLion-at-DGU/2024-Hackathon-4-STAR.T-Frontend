import * as S from "./style";
import React, { useState } from "react";
import Logo1 from "../../assets/images/loading_logo(1).svg";
import Logo2 from "../../assets/images/loading_logo(2).svg";
import PrivacyContainer from "../../components/PrivacyContainer/PrivacyContainer";

const texts = ["이용약관", "개인정보 처리방침"];

export const Loading = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [selectedText, setSelectedText] = useState(null);

  const handleArrowClick = (text) => {
    setIsFormVisible(false);
    setSelectedText(text);
  };

  const handleBackBtnClick = () => {
    setIsFormVisible(true);
    setSelectedText(null);
  };
  return (
    <S.Layout>
      <S.LogoContainr>
        <img src={Logo1} />
        <img src={Logo2} />
      </S.LogoContainr>
      {isFormVisible ? (
        <S.formWrapper method="post">
          <div className="containr">
            <div className="userPrivacy"> 닉네임 설정</div>
            <input
              className="Inputform"
              type="text"
              placeholder="이름을 입력하세요"
            />
          </div>
          <div className="containr">
            <div className="userPrivacy">개인정보 이용약관</div>
            {texts.map((text, index) => (
              <PrivacyContainer
                key={index}
                text={text}
                onArrowClick={handleArrowClick}
              />
            ))}
          </div>
          <button className="confirmBtn">확인</button>
        </S.formWrapper>
      ) : (
        <S.Wrapper>
          {selectedText && (
            <>
              <div className="title">{selectedText}</div>
              <div className="content"></div>
            </>
          )}

          <button className="backBtn" onClick={handleBackBtnClick}>
            뒤로가기
          </button>
        </S.Wrapper>
      )}
    </S.Layout>
  );
};
